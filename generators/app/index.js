'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = Generator.extend({
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
