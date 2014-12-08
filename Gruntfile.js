module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    jshint: {
      options: {
        node: true,
        jshintrc: true
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
      src: ['test/api/**/*.js']
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
        src: ['**/*.html', 'css/**/*.css'],
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

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      },
      continuous: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      }
    }

  });

  grunt.registerTask('test', ['clean:testClient', 'jshint', 'jscs', 'simplemocha', 'browserify:test', 'karma:unit']);
  grunt.registerTask('build', ['clean', 'jshint', 'browserify:dev', 'copy:dev']);
};
