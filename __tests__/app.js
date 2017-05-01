/* eslint-disable no-undef */
import 'babel-polyfill';
import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';
import fs from 'fs';

let yeomanContext;
const testName = 'testName';

describe('generator-html-wireframe:app', () => {
  beforeAll(async() => {
    yeomanContext = await helpers.run(path.join(__dirname, '../src/app/index.js'))
      .withPrompts({appName: testName, nav: 'Fixed'});
  });

  test('should write html and css files', () => {
    assert.file(['html/' + testName + '-wireframe.html']);
    assert.file(['css/' + testName + '-style.css']);
  });

  test('should generate test wireframe', () => {
    const file = fs.readFileSync('html/' + testName + '-wireframe.html', 'utf8');
    expect(file).toMatchSnapshot();
  });

});
