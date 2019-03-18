const vscode = require('vscode')
const path = require('path')
const fs = require('fs-extra')

function createFile(pathStr) {
  if (!pathStr) {
    vscode.window.showInformationMessage('请输入创建文件模版的路径！')
    return
  }
  let rootPath = vscode.workspace.rootPath
  const templatePath = path.join(rootPath, '/static/template')
  // 视图路径
  const viewPath = path.join(rootPath, pathStr)
  // 文件列表
  const fileList = fs.readdirSync(templatePath)
  // 查找文件是否存在
  for (var i = 0; i < fileList.length; i++) {
    if (fs.existsSync(path.join(viewPath, fileList[i]))) {
      vscode.window.showInformationMessage('文件已经存在!')
      return
    }
  }
  // 复制文件
  fs.copySync(templatePath, viewPath)
}
module.exports = createFile
