'use strict';

var gulp = require('gulp'),
  less = require('gulp-less'),
  connect = require('gulp-connect');

  gulp.task('connect', function() {
    connect.server({
      port: 8889,
      root: 'app',
      livereload: true
    });
    connect.serverClose();
  });

gulp.task('less', function () {
  gulp.src('app/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(gulp.dest('./app'))
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch('./app/less/**/*.less', ['less']); 
  gulp.watch(['./app/*.html'], ['html']);
});
 
gulp.task('default', ['watch', 'connect']);

