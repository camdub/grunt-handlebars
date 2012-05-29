var assert = require('assert'),
    grunt = require('grunt'),
    path = require('path'),
    fs = require('fs')

describe('Handlebars', function() {

  beforeEach(function(done) {
    if (!path.existsSync("test/fixtures/output")) {
      fs.mkdirSync("test/fixtures/output");
    }
    grunt.utils.spawn({
      cmd: "grunt",
      args: ["--config", "test/grunt.js", "handlebars"]
    }, function(err, result) {
      console.log(result.stderr);
      console.log(result.stdout);
      done();
    });
  });

  it('should compile templates in src', function(done) {
    var jsdom = require('jsdom');
    var handlebarsJS = fs.readFileSync('./test/fixtures/handlebars.runtime.js').toString();
    var templatesJS = fs.readFileSync('./test/fixtures/output/templates.js').toString();
    jsdom.env({
      html: 'http://news.ycombinator.com',
      src: [handlebarsJS, templatesJS],
      done: function(err, window) {
        if (err) { throw err; }
        assert.ok(window.Handlebars);
        assert.ok(window.Handlebars.templates);
        assert.ok(window.Handlebars.templates.header);
        assert.ok(window.Handlebars.templates.nav);
        assert.equal(window.Handlebars.templates.header({title: 'My Title'}), '<h1>My Title</h1>\n');
        assert.equal(window.Handlebars.templates.nav({items: ['Home', 'Auto']}), '<ul>\n \n  <li>Home</li>\n  \n  <li>Auto</li>\n  \n</ul>\n');
        done();
      }
    });
  });
});
