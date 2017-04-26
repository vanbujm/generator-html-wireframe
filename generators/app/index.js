'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTMLWireframe = function (_yeoman$Base) {
  _inherits(HTMLWireframe, _yeoman$Base);

  function HTMLWireframe() {
    _classCallCheck(this, HTMLWireframe);

    return _possibleConstructorReturn(this, (HTMLWireframe.__proto__ || Object.getPrototypeOf(HTMLWireframe)).apply(this, arguments));
  }

  _createClass(HTMLWireframe, [{
    key: 'prompting',

    // Using `constructor()` instead of `initializing()`
    // constructor(...args) {
    //   super(...args);
    // }

    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var defaultAppName, prompts, answers;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log((0, _yosay2.default)(_chalk2.default.blue('Welcome to the HTML Wireframe generator!')));

                defaultAppName = 'default-name';
                prompts = [{
                  type: 'input',
                  name: 'appName',
                  message: 'Enter app name:',
                  default: defaultAppName
                }];
                _context.next = 5;
                return this.prompt(prompts, function (props) {
                  _this2.appName = props.appName;
                });

              case 5:
                answers = _context.sent;
                return _context.abrupt('return', console.log('you answered: ' + answers.appName));

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function prompting() {
        return _ref.apply(this, arguments);
      }

      return prompting;
    }()
  }, {
    key: 'writing',
    get: function get() {
      return {
        app: function app() {
          console.log(_chalk2.default.green('copying file...\n'));
          this.fs.copy(this.templatePath('dummyfile.txt'), this.destinationPath('dummyfile.txt'));
        }
      };
    }
  }]);

  return HTMLWireframe;
}(_yeomanGenerator2.default.Base);

module.exports = HTMLWireframe;