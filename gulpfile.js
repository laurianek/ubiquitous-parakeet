const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const rename = require("gulp-rename");

const config = {
  paths: {
    js: 'src/scripts/**/*.js',
    css: 'src/styles/**/*.scss',
    cssMain: 'src/styles/main.scss'
  },
  output: './dist/assets'
};

gulp.task('build:js', () => {
  return gulp.src(config.paths.js)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(config.output))
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest(config.output));
});

gulp.task('build:css', function () {
  return gulp.src(config.paths.cssMain)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.output))
    .pipe(uglifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.output));
});

gulp.task('watch', ['build'], function () {
  var jsWatcher = gulp.watch(config.paths.js, ['build:js']);
  var cssWatcher = gulp.watch(config.paths.css, ['build:css']);
  jsWatcher.on('change', watchLog);
  cssWatcher.on('change', watchLog);
  function watchLog(event) {
    console.log('Event type: ' + event.type);
    console.log('Event path: ' + event.path);
  }
});

gulp.task('build', ['build:js', 'build:css']);
gulp.task('default', ['build']);