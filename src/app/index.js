// @flow
/* eslint-disable no-useless-constructor */
import 'babel-polyfill';
import Generator from 'yeoman-generator';
import chalk from 'chalk';
import yosay from 'yosay';

type Prompt = {
  type: string,
  name: string,
  message: string,
};

class HTMLWireframe extends Generator {

  constructor(...args: Array<mixed>) {
    super(...args);
  }

  get prompting(): { appName: mixed } {
    let app = this;
    return {

      async appName() {
        console.log(yosay(chalk.blue('Welcome to the HTML Wireframe generator!')));

        let defaultAppName: string = 'test';

        const prompts: Prompt[] = [
          {
            type: 'input',
            name: 'appName',
            message: chalk.magenta('Enter page name:'),
            default: defaultAppName
          },
          {
            type: 'list',
            name: 'nav',
            message: chalk.magenta('Choose a navigation option'),
            choices: ['Fixed', 'Floating', 'Left', 'Right', 'None'],
            default: 'Fixed'
          },
          {
            type: 'list',
            name: 'footer',
            choices: ['Fixed', 'Floating', 'None'],
            message: chalk.magenta('Choose a footer'),
            default: 'Fixed'
          },
          {
            type: 'list',
            name: 'theme',
            choices: ['wireframe', 'black-and-white'],
            message: chalk.magenta('Choose a theme'),
            default: 'wireframe'
          },
          {
            type: 'confirm',
            name: 'sass',
            message: chalk.magenta('Do you want Sass?'),
            default: true
          }
        ];

        app.answers = await this.prompt(prompts, props => {
          this.appName = props.appName;
        });
        return app.answers;
      }
    };
  }

  handleNav() {
    switch (this.answers.nav) {
      case 'Fixed':
        this.fs.copy(
          this.templatePath('css/nav-bar/nav-top.css'),
          this.destinationPath('css/nav.css'));
        if (this.answers.sass) {
          this.fs.copy(
            this.templatePath('sass/nav-bar/nav-top.scss'),
            this.destinationPath('sass/nav-bar/nav.scss')
          );
        }
        break;
      case 'Floating':
        this.fs.copy(
          this.templatePath('css/nav-bar/nav-floating.css'),
          this.destinationPath('css/nav.css'));
        if (this.answers.sass) {
          this.fs.copy(
            this.templatePath('sass/nav-bar/nav-top.scss'),
            this.destinationPath('sass/nav-bar/nav-top.scss')
          );
          this.fs.copy(
            this.templatePath('sass/nav-bar/nav-floating.scss'),
            this.destinationPath('sass/nav-bar/nav.scss')
          );
        }
        break;
      case 'Left':
        this.fs.copy(
          this.templatePath('css/nav-bar/nav-left.css'),
          this.destinationPath('css/nav.css'));
        if (this.answers.sass) {
          this.fs.copy(
            this.templatePath('sass/nav-bar/nav-vertical.scss'),
            this.destinationPath('sass/nav-bar/nav-vertical.scss')
          );
          this.fs.copy(
            this.templatePath('sass/nav-bar/nav-left.scss'),
            this.destinationPath('sass/nav-bar/nav.scss')
          );
        }
        break;
      case 'Right':
        this.fs.copy(
          this.templatePath('css/nav-bar/nav-right.css'),
          this.destinationPath('css/nav.css'));
        if (this.answers.sass) {
          this.fs.copy(
            this.templatePath('sass/nav-bar/nav-vertical.scss'),
            this.destinationPath('sass/nav-bar/nav-vertical.scss')
          );
          this.fs.copy(
            this.templatePath('sass/nav-bar/nav-right.scss'),
            this.destinationPath('sass/nav-bar/nav.scss')
          );
        }
        break;
      default:
        break;
    }
  }

  handleFooter() {
    if (this.answers.footer !== 'None') {
      if (this.answers.footer === 'Floating') {
        this.fs.copy(
          this.templatePath('css/footer/footer-floating.css'),
          this.destinationPath(`css/footer.css`)
        );
        if (this.answers.sass) {
          this.fs.copy(
            this.templatePath('sass/footer/footer-floating.scss'),
            this.destinationPath(`sass/footer-floating.scss`)
          );
          this.fs.copy(
            this.templatePath('sass/footer/footer.scss'),
            this.destinationPath(`sass/footer.scss`)
          );
        }
      } else {
        this.fs.copy(
          this.templatePath('css/footer/footer.css'),
          this.destinationPath(`css/footer.css`)
        );
        if (this.answers.sass) {
          this.fs.copy(
            this.templatePath('sass/footer/footer.scss'),
            this.destinationPath(`sass/footer.scss`)
          );
        }
      }
    }
  }

  get writing(): { app: mixed } {
    return {
      app() {
        console.log(chalk.green('copying files...\n'));
        this.fs.copyTpl(
          this.templatePath('html/wireframe.ejs'),
          this.destinationPath(`html/${this.answers.appName}-wireframe.html`),
          {answers: this.answers}
        );

        this.fs.copyTpl(
          this.templatePath('css/style.css'),
          this.destinationPath(`css/${this.answers.appName}-style.css`),
          {answers: this.answers}
        );

        this.handleNav();

        this.handleFooter();

        this.fs.copy(
          this.templatePath('css/theme/' + this.answers.theme + '.css'),
          this.destinationPath('css/theme/' + this.answers.theme + '.css')
        );
        if (this.answers.sass) {
          this.fs.copy(
            this.templatePath('sass/theme/' + this.answers.theme + '.scss'),
            this.destinationPath('sass/theme/' + this.answers.theme + '.scss')
          );
        }
      }
    };
  }
}

module.exports = HTMLWireframe;
