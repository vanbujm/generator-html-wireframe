'use strict';

require('babel-polyfill');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _yeomanAssert = require('yeoman-assert');

var _yeomanAssert2 = _interopRequireDefault(_yeomanAssert);

var _yeomanTest = require('yeoman-test');

var _yeomanTest2 = _interopRequireDefault(_yeomanTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('generator-html-wireframe:app', function () {
  before(function () {
    return _yeomanTest2.default.run(_path2.default.join(__dirname, '../generators/app')).withPrompts({ appName: true });
  });

  it('creates files', function () {
    _yeomanAssert2.default.file(['dummyfile.txt']);
  });
});