const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(connect.reload());
})

gulp.task('connect', function() {
  return connect.server({
    livereload: true
  })
})

gulp.task('watch', function() {
  gulp.watch('*.html', ['html']);
})

gulp.task('default', ['connect', 'watch']);

