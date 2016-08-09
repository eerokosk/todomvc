var gulp = require('gulp');
var webpack = require('webpack-stream');
var del = require('del');
var runSequence = require('run-sequence');

// clean
gulp.task('clean', function() {
  return del('./dist');
});

// index
gulp.task('index', function() {
  return gulp.src('./src/html/index.html')
    .pipe(gulp.dest('./dist'));
});

// Webpack
gulp.task('webpack', function() {
  return gulp.src('./src/app.js')
    .pipe(webpack(require('./src/webpack.config.js')))
    .pipe(gulp.dest('./'));
});

gulp.task('default', function (callback) {
  runSequence(
    'clean',
    'index',
    'webpack',
    callback
  );
});
