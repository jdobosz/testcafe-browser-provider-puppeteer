var gulp        = require('gulp');
var babel       = require('gulp-babel');
var mocha       = require('gulp-mocha');
var del         = require('del');
var nodeVersion = require('node-version');


var clean = function () {
    return del('lib');
};

var lint = function () {
    // TODO: eslint supports node version 4 or higher.
    // Remove this condition once we get rid of node 0.10 support.
    if (nodeVersion.major === '0')
        return null;

    const gulpESLintNew = require('gulp-eslint-new');

    return gulp
        .src([
            'src/**/*.js',
            'test/**/*.js',
            'Gulpfile.js'
        ])
        .pipe(gulpESLintNew({ fix: true }))     // Lint files, create fixes.
        .pipe(gulpESLintNew.fix())              // Fix files if necessary.
        .pipe(gulpESLintNew.format())           // Output lint results to the console.
        .pipe(gulpESLintNew.failAfterError());  // Exit with an error if problems are found.
};

var build = function () {
    return gulp
        .src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'));
};

gulp.task('clean', clean);
gulp.task('lint', lint);
gulp.task('build', gulp.series(lint, clean, build));
