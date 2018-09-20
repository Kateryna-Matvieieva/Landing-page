'use strict';

var gulp = require('gulp'),
  less = require('gulp-less');

  gulp.task('less', function () {
  gulp.src('./app/less//*.less')
    .pipe(less())
    .pipe(gulp.dest('./app/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./app/less//*.less', ['less']); 
});