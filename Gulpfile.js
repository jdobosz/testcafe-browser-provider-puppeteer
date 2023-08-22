const gulp = require('gulp');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const del = require('del');
const nodeVersion = require('node-version');

const clean = function () {
  return del('lib');
};

const build = function () {
  return gulp.src('src/**/*.js').pipe(babel()).pipe(gulp.dest('lib'));
};

gulp.task('clean', clean);
gulp.task('build', gulp.series(lint, clean, build));
