/* eslint-disable no-useless-constructor */
import 'babel-polyfill';
import Generator from 'yeoman-generator';
import chalk from 'chalk';
import yosay from 'yosay';

class HTMLWireframe extends Generator {

  constructor(...args) {
    super(...args);
  }

  get prompting() {
    let app = this;
    return {

      async appName() {
        console.log(yosay(chalk.blue('Welcome to the HTML Wireframe generator!')));

        let defaultAppName = 'default-name';

        const prompts = [
          {
            type: 'input',
            name: 'appName',
            message: 'Enter app name:',
            default: defaultAppName
          },
          {
            type: 'list',
            name: 'nav',
            message: 'Choose a navigation option',
            choices: ['Fixed', 'Floating', 'Left', 'Right', 'None'],
            default: 'Fixed'
          },
          {
            type: 'confirm',
            name: 'sass',
            message: 'Do you want Sass?',
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

  get writing() {
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
        switch (this.answers.nav) {
          case 'Fixed':
            this.fs.copy(
              this.templatePath('css/nav-top.css'),
              this.destinationPath('css/nav.css'));
            if (this.answers.sass) {
              this.fs.copy(
                this.templatePath('sass/nav-top.scss'),
                this.destinationPath('sass/nav.scss')
              );
            }
            break;
          case 'Floating':
            this.fs.copy(
              this.templatePath('css/nav-floating.css'),
              this.destinationPath('css/nav.css'));
            if (this.answers.sass) {
              this.fs.copy(
                this.templatePath('sass/nav-top.scss'),
                this.destinationPath('sass/nav-top.scss')
              );
              this.fs.copy(
                this.templatePath('sass/nav-floating.scss'),
                this.destinationPath('sass/nav.scss')
              );
            }
            break;
          case 'Left':
            this.fs.copy(
              this.templatePath('css/nav-left.css'),
              this.destinationPath('css/nav.css'));
            if (this.answers.sass) {
              this.fs.copy(
                this.templatePath('sass/nav-vertical.scss'),
                this.destinationPath('sass/nav-vertical.scss')
              );
              this.fs.copy(
                this.templatePath('sass/nav-left.scss'),
                this.destinationPath('sass/nav.scss')
              );
            }
            break;
          case 'Right':
            this.fs.copy(
              this.templatePath('css/nav-right.css'),
              this.destinationPath('css/nav.css'));
            if (this.answers.sass) {
              this.fs.copy(
                this.templatePath('sass/nav-vertical.scss'),
                this.destinationPath('sass/nav-vertical.scss')
              );
              this.fs.copy(
                this.templatePath('sass/nav-right.scss'),
                this.destinationPath('sass/nav.scss')
              );
            }
            break;
          default:
            break;
        }
      }
    };
  }
}

module.exports = HTMLWireframe;
