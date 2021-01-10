const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanhtml = require('gulp-cleanhtml');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const rev = require('gulp-rev'); //latest file name reference in index.html
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');

gulp.task('minifyImage', async function () {
  gulp
    .src('src/images/**/*.+(png|jpg|JPG|jpeg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('clean-js', async function () {
  return del(['dist/js/*.js']);
});

gulp.task('sass', async function () {
  gulp
    .src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('clean-css', function () {
  return del(['dist/css/*.css']);
});
//Minify js
gulp.task('jscompress', async function () {
  return gulp
    .src(['src/js/*.js'])
    .pipe(
      minify({
        ext: {
          min: '.js',
        },
        noSource: true,
      })
    )
    .pipe(gulp.dest('dist/js'));
});

//Minify css ...autoprefix

gulp.task('minify-css', async function () {
  return gulp
    .src(['src/css/*.css'])
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

//Manifesting minified js and css
gulp.task('revision', async function () {
  return gulp
    .src('dist/**/*.{css,js}')
    .pipe(rev()) //pipe minified output thorugh rev plugin
    .pipe(gulp.dest('dist')) //write result in disk
    .pipe(
      rev.manifest('dist/rev-manifest.json', {
        base: 'dist',
        merge: true,
      })
    ) //call rev(rev plugin rename minified file tagged with unique hash ) and create manifest file
    .pipe(gulp.dest('dist'));
});

gulp.task('cleanhtml', async function () {
  gulp.src('src/index.html').pipe(cleanhtml()).pipe(gulp.dest('dist'));
});

// Static server
gulp.task('browser-sync', async function () {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
});
// gulp watch - development
gulp.task('watch', async function () {
  gulp.watch('src/scss/*.scss', gulp.series('sass'));
});
// gulp build - production
gulp.task(
  'build',
  gulp.series(
    'cleanhtml',
    'jscompress',
    'sass',
    'minify-css',
    'revision',
    'minifyImage'
  )
);

/* ====================================================================
BUILD COMMAND
gulp build 2 times(2nd time to call revision)
==================================================================== */

/* ====================================================================
update & git commit
git push will update master
command automate gh-pages: npm run deploy
==================================================================== */
/* ====================================================================
browserslist in PACKAGE JSON : CONFIGURED TO supported list of browsers
==================================================================== */
