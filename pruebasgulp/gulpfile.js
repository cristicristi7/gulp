let gulp = require('gulp');
let postcss = require('gulp-postcss');
let cleancss = require('gulp-clean-css');
let rename = require('gulp-rename');
let presetenv = require('postcss-preset-env');

let postcssOptions = [presetenv];

gulp.task('css', () => {
    return gulp.src('src/css/*.pcss')
       
       .pipe(postcss(postcssOptions))
       .pipe(rename({extname: '.css'}))
       .pipe(gulp.dest('dist/css'))
       .pipe(cleancss())
       .pipe(rename({ suffix: '.min'}))
       .pipe(gulp.dest('dist/css'))
});
