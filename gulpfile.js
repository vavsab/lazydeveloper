var gulp = require('gulp');
var gulpCopy = require('gulp-copy');
var es = require('event-stream');
var clean = require('gulp-clean');
var ts = require('gulp-typescript').createProject("tsconfig.json");
var runSequence = require('run-sequence');

gulp.task('default', [ 'copyJsCss', 'angular.build' ]);

gulp.task('clean', function () {
    return gulp.src(['angular/libs'])
        .pipe(clean());
});

gulp.task('copyJsCss', function(){
    
    let shim = gulp.src(['./node_modules/core-js/client/shim.min.js'])
    .pipe(gulpCopy('./angular/libs/core-js', { prefix: 1000 }));

    let zone = gulp.src(['./node_modules/zone.js/dist/zone.js'])
    .pipe(gulpCopy('./angular/libs/zone.js/', { prefix: 1000 }));

    let systemjs = gulp.src(['node_modules/systemjs/dist/system.src.js'])
    .pipe(gulpCopy('./angular/libs/systemjs/', { prefix: 1000 }));
    

    let jquery = gulp.src(['./bower_components/jquery/dist/jquery.min.js'])
    .pipe(gulpCopy('./angular/libs/jquery', { prefix: 1000 }));

    let metro = gulp.src([
        './bower_components/metro/build/js/metro.min.js',
        './bower_components/metro/build/css/metro.min.css'])
    .pipe(gulpCopy('./angular/libs/metro', { prefix: 3 }));

    let fontAwesome = gulp.src([
        './bower_components/font-awesome/css/font-awesome.css',
        './bower_components/font-awesome/fonts/fontawesome-webfont.woff2',
        './bower_components/font-awesome/fonts/fontawesome-webfont.woff'])
    .pipe(gulpCopy('./angular/libs/font-awesome', { prefix: 2 }));

    let bootstrap = gulp.src([
        './bower_components/bootstrap/dist/css/bootstrap.min.css',
        './bower_components/bootstrap/dist/js/bootstrap.min.js',
        './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
        './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff'])
    .pipe(gulpCopy('./angular/libs/bootstrap', {prefix: 3 }));

     return es.merge(shim, zone, systemjs, jquery, metro, fontAwesome, bootstrap);
});

gulp.task('angular.build', function () {
    return gulp.src('./angular/**/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('./angular/'));
});