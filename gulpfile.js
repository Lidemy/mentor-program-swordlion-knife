var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');


gulp.task('styles', function () {
    gulp.src('./gulp/*.scss')   
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});

gulp.task('es5', function () {
	gulp.src('./gulp/*.js')
		.pipe(babel({
			presets: [['env', {outputStyle: 'compressed'}]]
		}))
		.pipe(gulp.dest('./css'))
})
