module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                includePaths: ['bower_components/foundation/scss']
            },
            dist: {
                options: {
                    outputStyle: 'expanded',
                    sourceMap: true
                },
                files: {
                    'assets/css/app.css': 'assets/scss/app.scss'
                }
            }
        },
        watch: {
            grunt: {
                options: {
                    reload: true
                },
                files: ['Gruntfile.js']
            },

            sass: {
                files: 'assets/scss/**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['build','watch']);
}
