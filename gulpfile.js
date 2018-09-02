const gulp = require('gulp')

const autoprefixer = require('gulp-autoprefixer')
const clean = require('gulp-clean-css')
const connect = require('gulp-connect')
const sass = require('gulp-sass')

gulp.task('connect', () =>
  connect.server({
    livereload: true,
    root: 'public'
  })
)

gulp.task('livereload', () => gulp.src('./public/**/*').pipe(connect.reload()))

gulp.task('watch', () => {
  gulp.watch('./src/stylesheets/*.scss', ['default'])
  gulp.watch('./public/**/*', ['livereload'])
})

gulp.task('dev', ['connect', 'watch', 'default'])

gulp.task('default', () =>
  gulp
    .src('./src/stylesheets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(clean())
    .pipe(gulp.dest('./public/assets/css/'))
    .pipe(connect.reload())
)
