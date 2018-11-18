const gulp = require('gulp')

gulp.task('webpack', () => {
    // 转译javascript
    const webpack = require('webpack-stream')
    const config = require('./webpack.config')
    gulp.src('./js/**/*.js')
        .pipe(webpack(config))
        .pipe(gulp.dest('../www/js'))
})

gulp.task('less', () => {
    // 编译less
    const less = require('gulp-less')
    gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('../www/css'))
})

gulp.task('default', ['webpack', 'less'])
