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
      }
    };
  }
}

module.exports = HTMLWireframe;
