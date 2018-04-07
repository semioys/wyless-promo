var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    rimraf = require('rimraf'),
    browserSync = require('browser-sync').create();


gulp.task('server', function() {
  browserSync.init({
      server: {
          baseDir: "./build"
      }
  });
});

gulp.task('js', function() {
  return gulp.src([
    './src/js/main.js'
  ])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat('main.min.js'))
    .pipe(plugins.babel({
      presets: ['env']
    }))
    .pipe(plugins.uglify())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('pug', function() {
  return gulp.src('./src/templates/index.pug')
    .pipe(plugins.pug({
      pretty: true
    }))
    .pipe(gulp.dest('./build'))
    .on('end', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src('./src/sass/main.scss')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .on("error", plugins.notify.onError({
      message: "Error: <%= error.message %>",
      title: "Error with compilling sass"
    }))
    .pipe(plugins.autoprefixer({
      browsers: ['last 4 versions']
    }))
    .pipe(plugins.csso())
    .pipe(plugins.rename('main.min.css'))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('clean', function(cb) {
  return rimraf('./build', cb);
});

gulp.task('watch', function() {
  gulp.watch('./src/templates/**/*.pug', gulp.series('pug'));
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/js/**/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('pug', 'sass', 'js'),
  gulp.parallel('watch', 'server') 
));