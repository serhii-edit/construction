var {src, dest, watch, series} = require("gulp");
var browserSync = require('browser-sync').create();
var sass = require("gulp-sass");
// var autoprefixer = require('gulp-autoprefixer');

const cleanCSS = require('gulp-clean-css');
var minifyjs = require('gulp-js-minify');
const htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');


// Static server
 function bs() {
   serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.scss", serveSass);
  // watch("./sass/**/*.sass"), serveSass;
  watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass() {
  return src("./sass/*.scss")
      .pipe(sass())
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};


// minify files (down)

function buildCSS(done) {
  src("css/**/**.css").pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(dest("dist/css/"));
  done();
}

function buildJS (done) {
  src(["js/**.js", "!js/**.min.js"])
  .pipe(minifyjs())
  .pipe(dest("dist/js/"));

  src("js/**.min.js")
  .pipe(dest("dist/js/"));

  done();
}

function html(done) {
  src("**.html")
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest("dist/"))
  done();
}

function fonts(done) {
  src("fonts/**/**")
  .pipe(dest("dist/fonts/"))
  done();
}

function php(done) {
  src("**.php")
  .pipe(dest("dist/"))

  src("phpmailer/**/**")
  .pipe(dest("dist/phpmailer/"))
  done();
}
// function img(done) {
//   src("img/**/**")
//   .pipe(dest("dist/img/"))
//   done();
// }

function imgmin(done) {
  src("img/**/**")
  .pipe(tinypng({ key: '7fp3ZGtHDZ7N3yb0hj2tXlyThL4N69WZ',}))
  .pipe(dest("dist/img/"))

  src("img/**/*.svg")
  .pipe(dest("dist/img/"))
  done();
}

exports.serve = bs;
exports.minifyf = series(buildCSS, buildJS, html, php, fonts, imgmin);