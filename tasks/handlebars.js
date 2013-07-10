/*
 * 
 * Task: Handlebars
 * Description: Compile handlebars templates to JST files
 * Dependencies: handlebars
 * 
 */

module.exports = function(grunt) {

  var exec = require('child_process').exec;

  grunt.registerMultiTask('handlebars', 'Precompile Handlebars template', function() {
    var self = this;
    var done = self.async();
    var templateDir = this.data.src;
    var truncateFileCmd = '> ' +this.data.dest;

    var handlebarsCmd = __dirname + '/../node_modules/.bin/handlebars -rm ' + templateDir + '/*.handlebars -f ' + this.data.dest;

    // Check on which platform node is running.
    var finalCmd;
    if (process.platform == "win32") {
      // win32 cmd doesn't know what "&&" is and is also not able to use wildcards
      // anyway this will match all the files in the template dir anyway.
      finalCmd =  __dirname + '/../node_modules/.bin/handlebars -m ' + templateDir + '/ -f ' + this.data.dest;
    } else {
      // others platform, set to the default command
      finalCmd = truncateFileCmd +' && '+ handlebarsCmd;
    }

    exec(finalCmd, function(err, stdout, stderr) {
      if (err) {
        grunt.fail.fatal(stderr);
      }
      done();
    });
  });
};
