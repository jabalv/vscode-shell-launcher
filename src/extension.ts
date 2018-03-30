'use strict';

import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';
import * as vscode from 'vscode';

interface ShellConfig {
    shell: string;
    args?: string[];
    label?: string;
    launchName?: string;
    cwd?: string;
}

interface ShellLauncherConfig {
    shells: {
        linux: ShellConfig[];
        osx: ShellConfig[];
        windows: ShellConfig[];
    };
}

function getShells(): ShellConfig[] {
    const config = <ShellLauncherConfig>vscode.workspace.getConfiguration().get('shellLauncher');
    const shells = config.shells;
    if (os.platform() === 'win32') {
        return shells.windows;
    }
    if (os.platform() === 'darwin') {
        return shells.osx;
    }
    return shells.linux;
}

function getShellLabel(shell: ShellConfig) {
    if (shell.label) {
        return shell.label;
    }
    return getShellDescription(shell);
}

function getShellDescription(shell: ShellConfig) {
    if (!shell.args || shell.args.length === 0) {
        return shell.shell;
    }
    return `${shell.shell} ${shell.args.join(' ')}`;
}

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('shellLauncher.launch', () => {
        const shells = getShells();
        const options: vscode.QuickPickOptions = {
            placeHolder: 'Select the shell to launch'
        }
        const items: vscode.QuickPickItem[] = shells.filter(s => {
            // If the basename is the same assume it's being pulled from the PATH
            if (path.basename(s.shell) === s.shell) {
                return true;
            } 
            try {
                fs.accessSync(s.shell, fs.constants.R_OK | fs.constants.X_OK);
            } catch {
                return false;
            }
            return true;
        }).map(s => {
            return {
                label: getShellLabel(s),
                description: getShellDescription(s),
                _shell: s
            };
        });
        vscode.window.showQuickPick(items, options).then(item => {
            if (!item) {
                return;
            }
            const shell = item['_shell'];
            const terminalOptions = {
                cwd: shell.cwd,
                name: shell.launchName,
                shellPath: shell.shell,
                shellArgs: shell.args
            };
            const terminal = vscode.window.createTerminal(terminalOptions);
            terminal.show();
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
