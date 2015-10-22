var gulp = require('gulp'),
    del = require('del'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass');

var paths = {
    assets: ['src/assets/**/*.*'],
    srcViews: ['src/*.html'],
    srcScripts: ['src/*.js'],
    appViews: ['src/app/**/*.html'],
    appScripts: ['src/app/**/*.js'],
    commonViews: ['src/common/**/*.html'],
    commonScripts: ['src/common/**/*.js'],
    commonCss: ['src/common/**/*.css'],
    testViews: ['src/*-test.html', 'src/test/**/*.html'],
    testScripts: ['src/test/**/*.js'],
    sassAssets: ['src/assets/styles/**/*.sass'],
    dist: 'dist',
    distApp: 'dist/app',
    distCommon: 'dist/common',
    distAssets: 'dist/assets',
    distStyles: 'dist/assets/styles'
};

var tasks = {
    clean: 'del',
    copy: 'copy',
    sass: 'sass',
    devWebServer: 'devWebServer',
    watch: 'watch',
    default: 'default',
    devDefault: 'devDefault',
    qaDefault: 'qaDefault',
    uatDefault: 'uatDefault',
    prodDefault: 'prodDefault'
};

gulp.task(tasks.clean, function() {
    return del([
        'dist/**/*'
    ]);
});

gulp.task(tasks.copy, function() {
	gulp.src(paths.srcScripts.concat(paths.srcViews))
		.pipe(gulp.dest(paths.dist));
	gulp.src(paths.appScripts.concat(paths.appViews))
		.pipe(gulp.dest(paths.distApp));
	gulp.src(paths.commonScripts.concat(paths.commonViews).concat(paths.commonCss))
		.pipe(gulp.dest(paths.distCommon));
	gulp.src(paths.assets)
		.pipe(gulp.dest(paths.distAssets));
});

gulp.task(tasks.sass, function() {
  gulp.src(paths.sassAssets)
    .pipe(sass())
    .pipe(gulp.dest(paths.distStyles))
    .pipe(connect.reload());
});

gulp.task(tasks.devWebServer, function() {
  connect.server({
    livereload: true
  });
});

gulp.task(tasks.watch, function() {
    gulp.watch('./src/**/*.*', [tasks.sass, tasks.copy]);
})

gulp.task(tasks.devDefault, [tasks.clean, tasks.sass, tasks.copy, tasks.devWebServer, tasks.watch]);

gulp.task(tasks.default, [tasks.clean, tasks.copy, tasks.devWebServer, tasks.watch]);


