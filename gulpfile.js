var gulp = require('gulp');
var gulpCopy = require('gulp-copy');
var es = require('event-stream');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');

gulp.task('default', [ 'copyJsCss', 'angular' ]);

gulp.task('clean', function () {
    return gulp.src(['libs', 'build'])
        .pipe(clean());
});

gulp.task('copyJsCss', ['clean'], function(){
    let jquery = gulp.src(['./bower_components/jquery/dist/jquery.min.js'])
    .pipe(gulpCopy('./libs/jquery', { prefix: 1000}));

    let metro = gulp.src([
        './bower_components/metro/build/js/metro.min.js',
        './bower_components/metro/build/css/metro.min.css'])
    .pipe(gulpCopy('./libs/metro', { prefix: 3}));

    let fontAwesome = gulp.src([
        './bower_components/font-awesome/css/font-awesome.css',
        './bower_components/font-awesome/fonts/fontawesome-webfont.woff2',
        './bower_components/font-awesome/fonts/fontawesome-webfont.woff'])
    .pipe(gulpCopy('./libs/font-awesome', { prefix: 2}));

    let bootstrap = gulp.src([
        './bower_components/bootstrap/dist/css/bootstrap.min.css',
        './bower_components/bootstrap/dist/js/bootstrap.min.js',
        './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
        './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff'])
    .pipe(gulpCopy('./libs/bootstrap', {prefix: 3}));

     return es.merge(jquery, metro, fontAwesome, bootstrap);
});

gulp.task('angular', ['clean'], function (cb) {
    return runSequence('angular.copy', 'angular.build', 'angular.clean', cb);
});

gulp.task('angular.copy', function () {
    return gulp.src(['./angular/**'])
        .pipe(gulpCopy('./build', {prefix: 1}));
});

gulp.task('angular.build', function () {
    return gulp.src('./build/**/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('./build/'));
});

gulp.task('angular.clean', function () {
    return gulp.src(['./build/**/*.ts'])
        .pipe(clean());
});
