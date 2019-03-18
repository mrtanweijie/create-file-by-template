const vscode = require('vscode')

function runScript(scriptStr) {
  if (!scriptStr) {
    vscode.window.showInformationMessage('请输入命令！')
    return
  }
  vscode.commands.executeCommand(scriptStr)
}

module.exports = runScript
