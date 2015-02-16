/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;
var fs = require('fs');

describe('wp-starter generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('wp-starter:app', [
        '../../app', [
          helpers.createDummyGenerator(),
          'mocha:app'
        ]
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      ['package.json', /"name":\s+"test-theme"/],
      'Gruntfile.js',
      '.gitignore',
      'assets/css/sass/style.scss',
      'assets/css/sass/_shame.scss',
      'assets/css/sass/layout/_header.scss',
      'assets/css/sass/layout/_footer.scss',
      'assets/css/sass/utils/_mixins.scss',
      'assets/css/sass/utils/_placeholders.scss',
      'assets/css/sass/utils/_variables.scss',
      'assets/fonts',
      'images',
      'template-parts',
      'assets/js/vendor',
      'assets/js/src/theme.js',
      ['index.php', new RegExp("@package Test theme", 'g')],
      ['header.php', new RegExp("@package Test theme", 'g')],
      ['footer.php', new RegExp("@package Test theme", 'g')],
      ['functions.php', new RegExp("@package Test theme", 'g')],
      ['style.css', new RegExp("Theme Name: Test theme\nTheme URI: TestURL\nAuthor: Test Author\nAuthor URI: TestAuthorURL\nDescription: Test Description", 'g')]
    ];
    helpers.mockPrompt(this.app, {
      themename: 'Test theme',
      themeuri: 'TestURL',
      author: 'Test Author',
      authoruri: 'TestAuthorURL',
      themedescription: 'Test Description'
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

});
