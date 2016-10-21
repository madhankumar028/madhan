module.exports = function(grunt) {

    grunt.initConfig({

        pkg:grunt.file.readJSON('package.json'),

        // validate all the js files
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            all: ['Gruntfile.js', 'server/**/*.js']
        },

        // watch all the js and html files for any changes
        watch: {
            scripts: {
                files: 'server/**/*.js',
                all: ['Gruntfile.js', 'server/routes.js']
            },
            tpl: {
                files: 'client/**/*.html'
            },
            livereload: {
                options: { livereload: true },
                files: ['client/**/*.html', 'client/index.html']
            }
        },

        // to restart the node server automatically whenever changes occur
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },

        // run two tasks simultaneously
        concurrent: {
            dev: [
                'nodemon',
                'watch'
            ],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('server', ['concurrent']);
};
