module.exports = function( grunt ) {
  'use strict';

  // Load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      theme: {
        src: [
          'assets/js/src/theme.js'
        ],
        dest: 'assets/js/theme.js'
      },
    },
    jshint: {
      browser: {
        files: {
          src: [
          'assets/js/src/**/*.js',
          'assets/js/test/**/*.js'
          ]
        },
        options: {
          jshintrc: '.jshintrc'
        }
      },
      grunt: {
        files: {
          src: [
          'Gruntfile.js'
          ]
        },
        options: {
          jshintrc: '.gruntjshintrc'
        }
      }
    },
    uglify: {
      all: {
        files: {
          'assets/js/theme.min.js': ['assets/js/theme.js']
        },
        options: {
          mangle: {
            except: ['jQuery']
          }
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'assets/css/sass',
          cssDir: 'assets/css',
          imagesDir: 'images',
          javascriptsDir: 'assets/js',
          fontsDir: 'fonts',
          outputStyle: 'compact',
          relativeAssets: true,
          noLineComments: true
        }
      }
    },
    cssmin: {
      minify: {
        expand: true,

        cwd: 'assets/css/',
        src: ['style.css', 'style.css'],

        dest: 'assets/css/',
        ext: '.min.css'
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 3 versions', 'Firefox > 4']
      },
      build: {
        src: ['assets/css/style.css']
      }
    },
    watch: {
      options: {
        livereload: true
      },
      compass: {
        files: ['assets/css/sass/**/*.scss'],
        tasks: ['compass', 'autoprefixer', 'cssmin']
      },
      scripts: {
        files: ['assets/js/src/**/*.js', 'assets/js/vendor/**/*.js'],
        tasks: ['jshint', 'concat', 'uglify'],
        options: {
          debounceDelay: 500,
          livereload: true
        }
      }
    },
    sassdoc: {
      default: {
        src: 'assets/css/sass',
        dest: 'docs',
        options: {
          groups: {
            'undefined': 'General'
          },
          force: true
        }
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'compass', 'autoprefixer', 'cssmin']);
  grunt.registerTask( 'js', ['jshint', 'concat', 'uglify'] );
  grunt.registerTask( 'css', ['compass', 'autoprefixer', 'cssmin'] );

};