const gulp = require('gulp')
const replace = require('gulp-replace')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

function jsMin() {
  return gulp.src('./src/*/*.js')
    .pipe(replace(/import \{(.*)\} .*/g, ''))
    .pipe(replace(/export /g, ''))
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(rename({
      'suffix': '.min'
    }))
    .pipe(gulp.dest('./'))
}

exports.default = jsMin