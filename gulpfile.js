const gulp = require('gulp');
const useref  = require('gulp-useref');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const cache = require('gulp-cache');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');

gulp.task('message', async function(){
return console.log('Gulp starting');
});

//compile scss
gulp.task('scss', async function(){
  gulp.src('src/scss/*.scss')
    .pipe(sass())
      .pipe(gulp.dest('src/css'))
});

// Imagemin
gulp.task('images', async function(){
  return gulp.src('src/image/**/*.+(png|jpg|JPG|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/image'))
});

gulp.task('useref', async function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('src/*.js', uglify()))
         // Minifies only if it's a CSS file
    .pipe(gulpIf('src/css/main.css', cssnano()))
    .pipe(gulp.dest('dist'))
});





gulp.task('build', gulp.series('scss','useref','images'));


// WATCH
gulp.task('watch', async function(){
          gulp.watch('src/scss/*.scss', gulp.series('scss'))
});

