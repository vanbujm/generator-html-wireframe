import 'babel-polyfill';
import yeoman from 'yeoman-generator';
import chalk from 'chalk';
import yosay from 'yosay';

class HTMLWireframe extends yeoman.Base {
  // Using `constructor()` instead of `initializing()`
  // constructor(...args) {
  //   super(...args);
  // }

  async prompting() {
    console.log(yosay(chalk.blue('Welcome to the HTML Wireframe generator!')));

    let defaultAppName = 'default-name';

    const prompts = [{
      type: 'input',
      name: 'appName',
      message: 'Enter app name:',
      default: defaultAppName
    }];

    let answers = await this.prompt(prompts, props => {
      this.appName = props.appName;
    });

    return console.log('you answered: ' + answers.appName);
  }

  get writing() {
    return {
      app() {
        console.log(chalk.green('copying file...\n'));
        this.fs.copy(
          this.templatePath('dummyfile.txt'),
          this.destinationPath('dummyfile.txt')
        );
      }
    };
  }
}

module.exports = HTMLWireframe;
