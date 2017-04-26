import 'babel-polyfill';
import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

describe('generator-html-wireframe:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({appName: true});
  });

  it('creates files', function () {
    assert.file([
      'dummyfile.txt'
    ]);
  });
});
