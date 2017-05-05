/* eslint-disable no-undef */
import 'babel-polyfill';
import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';
import fs from 'fs';

let yeomanContext;
const testName = 'testName';

describe('generator-html-wireframe:app', () => {
  beforeAll(async () => {
    yeomanContext = await helpers.run(path.join(__dirname, '../src/app/index.js'))
      .withPrompts({appName: testName, nav: 'Fixed', footer: 'Fixed', sass: true});
  });

  test('should write html files', () => {
    assert.file(['html/' + testName + '-wireframe.html']);
  });

  test('should write css files', () => {
    assert.file(['css/' + testName + '-style.css']);
  });

  test('should write sass files', () => {
    assert.file(['sass/footer.scss']);
  });

  test('should generate test wireframe as expected', () => {
    const file = fs.readFileSync('html/' + testName + '-wireframe.html', 'utf8');
    expect(file).toMatchSnapshot();
  });
});
