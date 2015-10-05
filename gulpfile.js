var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    karmaServer = require('karma').Server;


gulp.task('default', function () {

});

gulp.task('setup', function () {

    gulp.src('./src/app/**/*.*', {base: './src'})
        .pipe(gulp.dest('./dest'));

    gulp.src('./src/index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('./dest'));
});

gulp.task('tdd', function (done) {
    new karmaServer({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});




