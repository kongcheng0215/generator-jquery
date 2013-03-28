/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('jquery generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('jquery:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      '.jshintrc',
      '.editorconfig'
    ];

    helpers.mockPrompt(this.app, {
      'name': 'myplugin',
      'title': 'a jquery plugin',
      'description': 'awesome plugin',
      'version': '1.0.0',
      'repository': 'http://github.com',
      'bugs': 'http://jira.com',
      'license': 'MIT',
      'github_username': 'octocat',
      'author_name': 'Octo Cat',
      'author_email': 'octo@example.com',
      'jquery_version': '1.9.1'
    });

    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
