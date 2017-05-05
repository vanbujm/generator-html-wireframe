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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-useless-constructor */


var HTMLWireframe = function (_Generator) {
  _inherits(HTMLWireframe, _Generator);

  function HTMLWireframe() {
    var _ref;

    _classCallCheck(this, HTMLWireframe);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = HTMLWireframe.__proto__ || Object.getPrototypeOf(HTMLWireframe)).call.apply(_ref, [this].concat(args)));
  }

  _createClass(HTMLWireframe, [{
    key: 'handleNav',
    value: function handleNav() {
      switch (this.answers.nav) {
        case 'Fixed':
          this.fs.copy(this.templatePath('css/nav-bar/nav-top.css'), this.destinationPath('css/nav.css'));
          if (this.answers.sass) {
            this.fs.copy(this.templatePath('sass/nav-bar/nav-top.scss'), this.destinationPath('sass/nav-bar/nav.scss'));
          }
          break;
        case 'Floating':
          this.fs.copy(this.templatePath('css/nav-bar/nav-floating.css'), this.destinationPath('css/nav.css'));
          if (this.answers.sass) {
            this.fs.copy(this.templatePath('sass/nav-bar/nav-top.scss'), this.destinationPath('sass/nav-bar/nav-top.scss'));
            this.fs.copy(this.templatePath('sass/nav-bar/nav-floating.scss'), this.destinationPath('sass/nav-bar/nav.scss'));
          }
          break;
        case 'Left':
          this.fs.copy(this.templatePath('css/nav-bar/nav-left.css'), this.destinationPath('css/nav.css'));
          if (this.answers.sass) {
            this.fs.copy(this.templatePath('sass/nav-bar/nav-vertical.scss'), this.destinationPath('sass/nav-bar/nav-vertical.scss'));
            this.fs.copy(this.templatePath('sass/nav-bar/nav-left.scss'), this.destinationPath('sass/nav-bar/nav.scss'));
          }
          break;
        case 'Right':
          this.fs.copy(this.templatePath('css/nav-bar/nav-right.css'), this.destinationPath('css/nav.css'));
          if (this.answers.sass) {
            this.fs.copy(this.templatePath('sass/nav-bar/nav-vertical.scss'), this.destinationPath('sass/nav-bar/nav-vertical.scss'));
            this.fs.copy(this.templatePath('sass/nav-bar/nav-right.scss'), this.destinationPath('sass/nav-bar/nav.scss'));
          }
          break;
        default:
          break;
      }
    }
  }, {
    key: 'handleFooter',
    value: function handleFooter() {
      if (this.answers.footer !== 'None') {
        if (this.answers.footer === 'Floating') {
          this.fs.copy(this.templatePath('css/footer/footer-floating.css'), this.destinationPath('css/footer.css'));
          if (this.answers.sass) {
            this.fs.copy(this.templatePath('sass/footer/footer-floating.scss'), this.destinationPath('sass/footer-floating.scss'));
            this.fs.copy(this.templatePath('sass/footer/footer.scss'), this.destinationPath('sass/footer.scss'));
          }
        } else {
          this.fs.copy(this.templatePath('css/footer/footer.css'), this.destinationPath('css/footer.css'));
          if (this.answers.sass) {
            this.fs.copy(this.templatePath('sass/footer/footer.scss'), this.destinationPath('sass/footer.scss'));
          }
        }
      }
    }
  }, {
    key: 'prompting',
    get: function get() {
      var app = this;
      return {
        appName: function appName() {
          var _this2 = this;

          return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var defaultAppName, prompts;
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
                    }, {
                      type: 'list',
                      name: 'nav',
                      message: 'Choose a navigation option',
                      choices: ['Fixed', 'Floating', 'Left', 'Right', 'None'],
                      default: 'Fixed'
                    }, {
                      type: 'list',
                      name: 'footer',
                      choices: ['Fixed', 'Floating', 'None'],
                      message: 'Choose a footer',
                      default: true
                    }, {
                      type: 'confirm',
                      name: 'sass',
                      message: 'Do you want Sass?',
                      default: true
                    }];
                    _context.next = 5;
                    return _this2.prompt(prompts, function (props) {
                      _this2.appName = props.appName;
                    });

                  case 5:
                    app.answers = _context.sent;
                    return _context.abrupt('return', app.answers);

                  case 7:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this2);
          }))();
        }
      };
    }
  }, {
    key: 'writing',
    get: function get() {
      return {
        app: function app() {
          console.log(_chalk2.default.green('copying files...\n'));
          this.fs.copyTpl(this.templatePath('html/wireframe.ejs'), this.destinationPath('html/' + this.answers.appName + '-wireframe.html'), { answers: this.answers });
          this.fs.copyTpl(this.templatePath('css/style.css'), this.destinationPath('css/' + this.answers.appName + '-style.css'), { answers: this.answers });
          this.handleNav();
          this.handleFooter();
        }
      };
    }
  }]);

  return HTMLWireframe;
}(_yeomanGenerator2.default);

module.exports = HTMLWireframe;