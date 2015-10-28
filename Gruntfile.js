'use strict';
var LIVERELOAD_PORT = 35729;
var mountFolder = function (dir) {
  return require('serve-static')(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // configurable paths
  var yeomanConfig = {
    // I set this to the current folder for simplicity.
    // At one point I set `app` to "demo" but I could not find
    // an easy way access content that was up a level.
    app: '.'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    // I was unable to get it working well without `watch` and `livereload`.
    watch: {
      options: {
        nospawn: true,
        livereload: {
          liveCSS: false
        }
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '<%= yeoman.app %>/*.html',
          '<%= yeoman.app %>/*.css',
          '<%= yeoman.app %>/demo/*.html',
          '<%= yeoman.app %>/demo/*.css'
          ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0'
      },

      livereload: {
        options: {
          middleware: function () {
            return [
              require('connect-livereload')({
                port: LIVERELOAD_PORT
              }),
              mountFolder(yeomanConfig.app)
            ];
          }
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>/demo'
      }
    }

  });

  grunt.registerTask('serve', [
      'connect:livereload',
      'open',
      'watch'
    ]);



  grunt.registerTask('default', [
    'serve']);
};