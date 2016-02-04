module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/example.css': 'sass/example.scss'
        }
      }
    },

    watch: {
      files: ['sass/*.scss'],
      tasks: ['sass'],
      options: {
        livereload: true
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);

};