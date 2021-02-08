const gulp = require("gulp"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-uglify");

sass.compiler = require("node-sass");

function scss() {
  return gulp
    .src("./resources/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./assets/css"));
}

function js() {
  return gulp
    .src("./resources/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./assets/js"));
}

function watch() {
  gulp.watch("./resources/scss/*.scss", scss);
  gulp.watch("./resources/js/*.js", js);
}

exports.scss = scss;
exports.js = js;
exports.watch = watch;

exports.default = scss, js;