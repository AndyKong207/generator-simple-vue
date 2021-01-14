const Generator = require('yeoman-generator')
// const fs = require('fs')
// const path = require('path')

// function walk(currentDir, callback) {
//   fs.readdir(currentDir, (err, files) => {
//     if (err) {
//       throw new Error(err)
//     }
//     // console.log(files)
//     files.forEach((item => {
//       const filePath = path.join(currentDir, item)
//       const stat = fs.statSync(filePath)
//       if (stat.isFile()) {
//         callback(filePath, stat)
//       } else if (stat.isDirectory()) {
//         walk(filePath, callback)
//       }
//     }))
//   })
// }
// const templates = []
// walk(path.resolve('generators/app/templates'), (filePath, stat) => {
//   const fileName = filePath.split(path.resolve('generators/app/templates'))[1].substring(1)
//   templates.push(fileName)
//   console.log(templates)
// })
// console.log('finish')



module.exports = class extends Generator {
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }]).then(answer => {
      this.answer = answer
    })
  }

  writing() {
    const templates = [
      'README.md',
      'babel.config.js',
      'package.json',
      'postcss.config.js',
      'public/favicon.ico',
      'public/index.html',
      'src/.DS_Store',
      'src/App.vue',
      'src/main.js',
      'src/router.js',
      'src/components/HelloWorld.vue',
      'src/assets/logo.png',
      'src/store/actions.js',
      'src/store/getters.js',
      'src/store/index.js',
      'src/store/mutations.js',
      'src/store/state.js',
      'src/utils/request.js',
      'src/views/About.vue',
      'src/views/Home.vue'
    ]
    templates.forEach((item) => {
      this.fs.copyTpl(this.templatePath(item), this.destinationPath(item), this.answer)
    })
  }
}