let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp
    .src('source/sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});
