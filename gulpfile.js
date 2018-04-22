var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');


gulp.task('styles', function () {
    gulp.src('./*.scss')    // 指定要處理的 Scss 檔案目錄
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));  // 指定編譯後的 css 檔案目錄
});