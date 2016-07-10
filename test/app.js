import test from 'ava'
import path from 'path'
import assert from 'yeoman-assert'
import helpers from 'yeoman-test'

test.before(t => {
  return helpers.run(path.join(__dirname, '../generators/app'))
    .toPromise()
})

test('create dotfiles', t => {
  assert.file([
    '.editorconfig',
    '.eslintrc',
    '.gitattributes',
    '.gitignore',
    '.tern-project',
    '.travis.yml'
  ])
})
