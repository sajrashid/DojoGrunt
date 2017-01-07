/*jshint node:true*/
module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt, [ 'grunt-*', 'intern-geezer' ]);
	var path = require('path');
	var LIVERELOAD_PORT = 35729;
	var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });

	var stripComments = /<\!--.*?-->/g,
		collapseWhiteSpace = /\s+/g;

	grunt.initConfig({
		dojo: {
			dist: {
				options: {
					dojo: path.join('src', 'dojo', 'dojo.js'),
					dojoConfig: path.join('src', 'dojoConfig.js'),
					profile: path.join('profiles', 'air.profile.js'),
					releaseDir: path.join('..', 'dist'),
					basePath: path.join(__dirname, 'src')
				}
			}
		},
		copy: {
			config: {
				options: {
					processContent: function (content) {
						return content.replace(/isDebug:\s+(true|1),?\s+/, '');
					}
				},
				files: [{
					src: path.join('src', 'dojoConfig.js'),
					dest: path.join('dist', 'dojoConfig.js')
				}]
			},
			index: {
				options: {
					processContent: function (content) {
						return content
							.replace(stripComments, '')
							.replace(collapseWhiteSpace, ' ')
						;
					}
				},
				files: [{
					src: path.join('src', 'index.html'),
					dest: path.join('dist', 'index.html')
				}]
			}
		},
		connect: {
			options: {
				port: 8888,
				hostname: 'localhost'
			},
			test: {
				options: {
					base: 'src'
				}
			},
			dist: {
				options: {
					base: 'dist'
				}
			}
		},
		open: {
		    cdn: {
		        path: 'http://localhost:<%= connect.options.port %>/'
		    },
		    build: {
		        path: 'http://localhost:<%= connect.options.port %>/'
		    }
		},
	    //setup watch tasks
		watch: {
		    options: {
		        nospan: true,
		        livereload: LIVERELOAD_PORT
		    },

		    source: {
		        files: ['./src/js/**/*.js'],
		        tasks: ['jshint']
		    },
		    livereload: {
		        options: {
		            livereload: LIVERELOAD_PORT
		        },
		        files: [
                  './src/js/**/*.js',
                  './src/**/*.html',
                  './src/css/**/*.css'
		        ]
		    }
		},
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'dist'
					]
				}]
			}
		},
		processhtml: {
		    build: {
		        files: {
		            'dist/index.html': ['src/index.html']
		        }
		    }
		},
	});




	grunt.registerTask('default', ['serve'], function (target) {
	    var trgt = target || 'cdn';
	    grunt.task.run([
          'jshint',
          'connect:' + trgt,
          'open:' + trgt,
          'watch'
	    ]);
		
	});
	grunt.registerTask('build', [ 'clean', 'dojo:dist', 'processhtml', 'copy' ]);
};
