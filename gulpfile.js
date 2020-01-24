let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp
    .src('source/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});
