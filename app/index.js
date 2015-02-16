'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var fs = require('fs');
var chalk = require('chalk');

var hello =
chalk.blue.bold("\n ______________") +
chalk.blue.bold("\n< Hello, you!  >") +
chalk.blue.bold("\n --------------") +
chalk.red("\n      ") + chalk.blue.bold("\\") + chalk.red("                    / \\  //\\") +
chalk.red("\n       ") + chalk.blue.bold("\\") + chalk.red("    |\\___/|      /   \\//  \\\\") +
chalk.red("\n            /") + chalk.yellow("0  0") + chalk.red("  \\__  /    //  | \\ \\") +
chalk.red("\n           /     /  \\/_/    //   |  \\  \\") +
chalk.red("\n           @_^_@'/   \\/_   //    |   \\   \\") +
chalk.yellow("\n           //") + chalk.red("_^_/     \\/_ //     |    \\    \\") +
chalk.yellow("\n        ( //)") + chalk.red(" |        \\///      |     \\     \\") +
chalk.yellow("\n      ( / /) ") + chalk.red("_|_ /   )  //       |      \\     _\\") +
chalk.yellow("\n    ( // /) ") + chalk.red("'/,_ _ _/  ( ; -.    |    _ _\\.-~        .-~~~^-.") +
chalk.yellow("\n  (( / / )) ") + chalk.red(",-{        _      `-.|.-~-.           .~         `.") +
chalk.yellow("\n (( // / ))  ") + chalk.red("'/\\      /                 ~-. _ .-~      .-~^-.  \\") +
chalk.yellow("\n (( /// ))      ") + chalk.red("`.   {            }                   /      \\  \\") +
chalk.yellow("\n  (( / ))     ") + chalk.red(".----~-.\\        \\-'                 .~         \\  `. \\^-.") +
"\n             " + chalk.red("///.----..>        \\             _ -~             `.  ^-`  ^-_") +
"\n               " + chalk.red("///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~") +
"\n                                                                  " + chalk.red("/.-~          ");

var WpStarterGenerator = module.exports = function WpStarterGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ bower: false, skipInstall: this.options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(WpStarterGenerator, yeoman.generators.Base);

WpStarterGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(hello);

  var prompts = [
  {
    name: 'themename',
    message: 'What is the name of your theme?',
    default: 'My Theme'
  },
  {
    name: 'themeuri',
    message: 'What is the URL of your theme?',
    default: 'http://'
  },
  {
    name: 'author',
    message: 'What is your name?',
    default: 'Anonymous'
  },
  {
    name: 'authoruri',
    message: 'What is your URL?',
    default: 'http://'
  },
  {
    name: 'themedescription',
    message: 'Enter the theme description:',
    default: 'A cool WP Theme'
  }
  ];

  this.prompt(prompts, function (props) {
    this.themename = props.themename;
    this.themeuri = props.themeuri;
    this.author = props.author;
    this.authoruri = props.authoruri;
    this.themedescription = props.themedescription;
    cb();
  }.bind(this));
};


WpStarterGenerator.prototype.addfiles = function addfiles() {
  this.log(chalk.yellow('Creating dev folders and files'));
  this.mkdir('images');
  this.mkdir('assets');
  this.mkdir('assets/fonts');
  this.mkdir('assets/css');
  this.mkdir('assets/css/sass');
  this.mkdir('assets/css/sass/base');
  this.mkdir('assets/css/sass/components');
  this.mkdir('assets/css/sass/layout');
  this.mkdir('assets/css/sass/pages');
  this.mkdir('assets/css/sass/utils');
  this.copy('_style.scss', 'assets/css/sass/style.scss');
  this.copy('_shame.scss', 'assets/css/sass/_shame.scss');
  this.copy('_header.scss', 'assets/css/sass/layout/_header.scss');
  this.copy('_footer.scss', 'assets/css/sass/layout/_footer.scss');
  this.copy('_mixins.scss', 'assets/css/sass/utils/_mixins.scss');
  this.copy('_placeholders.scss', 'assets/css/sass/utils/_placeholders.scss');
  this.copy('_variables.scss', 'assets/css/sass/utils/_variables.scss');
  this.mkdir('assets/js/src');
  this.mkdir('assets/js/vendor');
  this.copy('_theme.js', 'assets/js/src/theme.js');
  this.mkdir('template-parts');
  this.copy('_package.json', 'package.json');
  this.copy('Gruntfile.js');
  this.copy('_gitignore', '.gitignore');
  this.copy('_header.php', 'header.php');
  this.copy('_footer.php', 'footer.php');
  this.copy('_index.php', 'index.php');
  this.copy('_functions.php', 'functions.php');
  this.copy('_style.css', 'style.css');
};