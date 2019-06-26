var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build', buildTask);
gulp.task('watch', watchTask);
gulp.task('default', gulp.parallel('build', 'watch'));

function buildTask() {
	return browserify('./index.js', {debug: true})
		.bundle()
		.pipe(source('chartjs-color.js'))
		.pipe(gulp.dest('./dist'))
		.pipe(streamify(uglify()))
		.pipe(rename('chartjs-color.min.js'))
		.pipe(gulp.dest('./dist'));
}

function watchTask() {
	gulp.watch('index.js', ['build']);
}
