module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            css: {
                src: ['src/styles/*.css', 'src/styles/*.css.map', 'src/js/*.js'],
                filter: 'isFile'
            }
        },
        concat: {
            options: {
                separator: ';',
                sourceMap: true
            },
            dev: {
                src: [
                    'node_modules/jquery/dist/jquery.js',
                    'node_modules/angular/angular.js',
                    'node_modules/angular-route/angular-route.js',
                    'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
                    'src/main.js'
                ],
                dest: 'src/js/et.min.js'
            }
        },
        concurrent: {
            dev: ['sass:dev', 'concat:dev']
        },
        connect: {
            options: {
                port: 8000,
                hostname: 'localhost',
                livereload: true,
                base: 'src'
            },
            server: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                    base: 'src',
                    livereload: true,
                    open: true
                }
            }
//            ,
//            livereload: {
//                options: {
//                    open: true,
//                    base: 'src'
//                }
//            }

        },
        open: {
            server: {
                path: 'http://localhost:8000'
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dev: {
                files: {
                    'src/styles/eandt.min.css': 'src/styles/sass/eandt.scss'
                }
            }
        },
        serve: {
            options: {
                port: 3000
            }
        },
        watch: {
            options: {
                spawn: true,
                livereload: true
            },
            sass: {
                files: ['src/styles/sass/**/*.{scss,sass}'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['src/**/*.{js}'],
                tasks: ['concat:dev'],
                options: {
                    livereload: true
                }
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'src/*.html',
                    '{.tmp,src}/styles/**/*.css',
                    '{.tmp,src}/scripts/**/*.js',
                    'src/images/**/*.{png,jpg,jpeg,gif,webp}',
                    'test/spec/**/*.js'
                ]
            }
        }


    });
    grunt.registerTask('default', [
        'clean',
        'qunit',
        'concat',
        'uglify'
    ]);

    grunt.registerTask('dev', [
        'clean:css',
        'concurrent:dev',
        'connect:server', 
        'watch:sass',
        'watch:js',
        'open'
    ]);

    grunt.registerTask('dist', [
        'clean',
        'sass',
        'concat'
    ]);


};