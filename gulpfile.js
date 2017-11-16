const gulp = require('gulp');
const srcset = require('gulp-srcset');

gulp.task('images', () =>
  gulp
    .src('src/*.{jpg,png}')
    .pipe(
      srcset([
        {
          width: [1, 1920, 1280, 720, 560, 320],
          format: ['jpg', 'png']
        }
      ])
    )
    .pipe(gulp.dest('dist'))
);
