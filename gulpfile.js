var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var clean = require('gulp-clean');


gulp.task('styles',['clean'],()=> {
    gulp.src('./gulp/*.scss')   
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(rename({
        	suffix: '.min'
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('es5', ['clean'],()=> {
	gulp.src('./gulp/*.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest('./css'))
        .pipe(uglify())
        .pipe(rename({
        	suffix: '.min'
        }))
        .pipe(gulp.dest('./css'));
})

gulp.task('clean', ()=>{
	return gulp.src('./css')
		.pipe(clean());
});