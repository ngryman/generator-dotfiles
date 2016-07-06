'use strict'
const yeoman = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = yeoman.Base.extend({
  initializing: {
    headling: function() {
      this.log(yosay(
        'Welcome to the finest ' + chalk.red('dotfiles') + ' generator!'
      ))
    }
  },

  configuring: {
    dotfiles: function() {
      this.fs.copy(
        this.templatePath('.*'),
        this.destinationPath('.')
      )
    }
  }
})
