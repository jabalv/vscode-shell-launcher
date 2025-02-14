# Change Log

## 0.3.0

- Added a `env` override option [#33](https://github.com/Tyriar/vscode-shell-launcher/pull/33) via [@DoctorJew](https://github.com/DoctorJew)
- Environment variables are now resolved in shell and args using the %VAR% format on Windows and $VAR on non-Windows [#32](https://github.com/Tyriar/vscode-shell-launcher/pull/32), [#35](https://github.com/Tyriar/vscode-shell-launcher/pull/35) via [@Vigilans](https://github.com/Vigilans), [@Tyriar](https://github.com/Tyriar)
- Setup CI and unit tests [#34](https://github.com/Tyriar/vscode-shell-launcher/pull/34) via [@Tyriar](https://github.com/Tyriar)

## 0.2.0

- Added a `cwd` override option [#17](https://github.com/Tyriar/vscode-shell-launcher/pull/17) via [@fabiospampinato](https://github.com/fabiospampinato)
- Fix bug that would not allow launching of shells that have duplicate labels [#18](https://github.com/Tyriar/vscode-shell-launcher/pull/18) via [@fabiospampinato](https://github.com/fabiospampinato)

## 0.1.6

- Fixed regression where shells from `$PATH` would not be picked up [#14](https://github.com/Tyriar/vscode-shell-launcher/issues/14) via [@Tyriar](https://github.com/Tyriar)

## 0.1.5
- Added the `launchName` setting which allows naming of terminal instances [#10](https://github.com/Tyriar/vscode-shell-launcher/pull/10) via [@Jared-Miller](https://github.com/Jared-Miller)
- Shell paths are now validated before being displayed in the picker [#11](https://github.com/Tyriar/vscode-shell-launcher/pull/11) via [@Jared-Miller](https://github.com/Jared-Miller)
- Fixed an exception when canceling out of the shell launcher dialog [#13](https://github.com/Tyriar/vscode-shell-launcher/issues/13) via [@Tyriar](https://github.com/Tyriar)

## 0.1.4
- Use `System32` over `sysnative` as the default on Windows to fix launching shells from the 64-bit client

## 0.1.3
- Fix example
- Added configuration section to readme via @jonbgallant

## 0.1.2
- Fix syntax highlighting in readme

## 0.1.1
- Fix images in readme

## 0.1.0
- Initial release