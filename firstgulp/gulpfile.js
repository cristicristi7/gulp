let gulp = require('gulp');
let colors = require('ansi-colors');
let newer = require('gulp-newer');
let less = require('gulp-less');

gulp.task('default', () => {
    console.log('Tarea por' + colors.blue(' defecto.'));
});

gulp.task('Cris', function(){
    console.log('Holi');
});

gulp.task('css', () => {
    return gulp.src('src/css/*.less')
      .pipe(newer({
          dest: 'dist/css',
          ext:'.css',
          extra:'src/css/includes/**/*.less',
      }))
      .pipe(less())
      .pipe(gulp.dest('dist/css'))
});