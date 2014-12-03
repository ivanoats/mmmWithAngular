module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    jshint: {
      options: {
        node: true
      },
      src: ['server.js', 'routes/**/*.js', 'app/js/**/*.js', 'test/**/*.js', 'lib/**/*.js']
    },

    jscs: {
      src: ['server.js', 'routes/**/*.js', 'app/js/**/*.js', 'test/**/*.js', 'lib/**/*.js'],
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/**/*.js']
    },

    clean: {
      build: {
        src: ['build/']
      },
      testClient: {
        src: ['test/angular_testbundle.js']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        expand: true,
        src: ['**/*.html'],
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/client_bundle.js',
        options: {
          transform: ['debowerify']
        }
      },
      test: {
        src: ['test/client/**/*.js'],
        dest: 'test/angular_testbundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

  });

  grunt.registerTask('test', ['clean:testClient', 'jshint', 'jscs', 'simplemocha', 'browserify:test']);
  grunt.registerTask('build', ['jshint', 'clean', 'browserify:dev', 'copy:dev']);
};
