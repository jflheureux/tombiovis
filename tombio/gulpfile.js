var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require("gulp-rename");

gulp.task('minify', function(callback) {
  var inputFiles = [
    '*.js',
    '!gulpfile.js'
  ];
  pump([
        gulp.src(inputFiles),
        uglify(),
        rename(function (path) {
          path.basename += ".min"
        }),
        gulp.dest('dist')
    ],
    callback
  );
});