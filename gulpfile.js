const gulp = require('gulp')

const autoprefixer = require('gulp-autoprefixer')
const clean = require('gulp-clean-css')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const webserver = require('gulp-server-livereload')

gulp.task('stylesheets', () =>
  gulp
    .src('./src/stylesheets/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(clean())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./public/assets/css/'))
)

gulp.task('webserver', function() {
  gulp.src('./public').pipe(
    webserver({
      livereload: true,
      open: true
    })
  )
})

gulp.task('default', ['stylesheets'])

gulp.task('dev', ['stylesheets', 'webserver'], () => {
  gulp.watch('./src/stylesheets/*.scss', ['stylesheets'])
})
