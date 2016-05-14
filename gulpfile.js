var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['build', 'watch']);

// Build
gulp.task('build', buildTask);

// Watch
gulp.task('watch', watchTask);

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
