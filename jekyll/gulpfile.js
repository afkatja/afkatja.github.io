const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();
const child = require('child_process');
const gutil = require('gulp-util');
const run = require('gulp-run');

gulp.task('jekyll', function() {
  const shellCommand = 'bundle exec jekyll serve';

  return gulp.src('')
    .pipe(run(shellCommand))
    .on('error', gutil.log);
});

const sassPaths = [
  'node_modules/foundation-sites/scss' //,'/bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('./scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 11']
    }))
    .pipe(gulp.dest('css'));
});

const siteRoot = '_site';

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });
  gulp.watch(['scss/**/*.scss'], ['sass']);
});

gulp.task('default', ['sass', 'jekyll', 'serve']);
