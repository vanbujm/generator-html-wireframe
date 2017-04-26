import path from 'path';
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import excludeGitignore from 'gulp-exclude-gitignore';
import jest from 'gulp-jest';
import istanbul from 'gulp-istanbul';
import nsp from 'gulp-nsp';
import plumber from 'gulp-plumber';
import coveralls from 'gulp-coveralls';
import babel from 'gulp-babel';
import rename from 'gulp-rename';

const es6Code = 'generators/**/*.es6';

gulp.task('babel', () => {
  return gulp.src(`${es6Code}`)
    .pipe(babel({retainLines: 'true'}))
    .pipe(rename(path => {
      path.extname = '.js';
    }))
    .pipe(gulp.dest('generators/'));
});

gulp.task('babel-test', () => {
  return gulp.src('test/*.es6')
    .pipe(babel())
    .pipe(rename(path => {
      path.extname = '.js';
    }))
    .pipe(gulp.dest('test/'));
});

gulp.task('static', () => {
  return gulp.src([`${es6Code}`, 'test/*.es6'])
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('nsp', cb => {
  nsp({package: path.resolve('package.json')}, cb);
});

gulp.task('pre-test', ['babel'], () => {
  return gulp.src('generators/**/*.js')
    .pipe(excludeGitignore())
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test', 'babel-test'], () => {
  // let mochaErr;

  gulp.src('test/**/*.js')
    .pipe(jest())
    .pipe(istanbul.writeReports());
});

gulp.task('watch', () => {
  gulp.watch(['generators/**/*.js', 'test/**'], ['test']);
});

gulp.task('coveralls', ['test'], () => {
  if (!process.env.CI) {
    return;
  }

  return gulp.src(path.join(__dirname, 'coverage/lcov.info'))
    .pipe(coveralls());
});

gulp.task('prepublish', ['nsp']);
gulp.task('default', ['static', 'test', 'coveralls']);
