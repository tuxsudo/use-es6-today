import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import streamify from 'gulp-streamify'
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';




gulp.task('default', () => {

	return browserify()
		.transform(babelify)
		.add('src/app.js')
		.bundle()
			.pipe( source('app.js') )
			.pipe( gulp.dest('dist') )
			.pipe( streamify( uglify() ) )
			.pipe(rename('app.min.js'))
			.pipe( gulp.dest('dist') )

});
