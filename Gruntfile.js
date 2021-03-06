module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jasmine: {
          components: {
            src: [
            'src/*.js'
            ],
            options: {
              specs: 'tests/*.js',
              keepRunner : true
              }
          },
          coverage: {
              src: ['src/*.js'],
              options: {
                  specs: ['tests/*.js'],
                  template: require('grunt-template-jasmine-istanbul'),
                  templateOptions: {
                      coverage: 'coverage/coverage.json',
                      report: {
                        type: 'lcov',
                        options: {
                            dir: 'coverage'
                        }
                      }
                  }
              }
          }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('travis', ['jasmine']);
};