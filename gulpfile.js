const gulp = require('gulp');
const hb = require('gulp-hb');
const sass = require('gulp-sass');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');


// browserSync base directory
// this will be the base directory of files for web preview
// since we are building `index.hbs` templates (located in src/emails) to `dist` folder.
const baseDir = ".";

// compile sass to css
gulp.task('compileSass', function () {
    return gulp
        // import all email .scss files from src/scss folder
        // ** means any sub or deep-sub files or foders
        .src('./src/sass/*.scss')

        // on error, do not break the process
        .pipe(sass().on('error', sass.logError))

        // output to `src/css` folder
        .pipe(gulp.dest('./styles'));
});

gulp.task('imageMin', function () {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./images'));
});

// build complete HTML email template
// compile sass (compileSass task) before running build
gulp.task('build', ['compileSass', 'imageMin'], function () {
    return gulp
        .src('./src/*.html')

        // replace `.scss` file paths from template with compiled file paths
        // .pipe(replace(new RegExp('\/sass\/(.+)\.scss', 'ig'), '/css/$1.css'))

        // compile using Handlebars
        .pipe(hb()
            .partials('./src/partials/*.hbs')
            .helpers({
                if_eq: function (a, b, opts) {
                    if(a == b) // Or === depending on your needs
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            })
            .data('./src/data/*.{js,json}')
        )

        // do not generate sub-folders inside dist folder
        //.pipe(rename({dirname: ''}))

        // put compiled HTML email templates inside dist folder
        .pipe(gulp.dest('.'))
});

// browserSync task to launch preview server
gulp.task('browserSync', function () {
    return browserSync.init({
        reloadDelay: 2000, // reload after 2s, compilation is finished (hopefully)
        server: { baseDir: baseDir }
    });
});

// task to reload browserSync
gulp.task('reloadBrowserSync', function () {
    return browserSync.reload();
});

// watch source files for changes
// run `build` task when anything inside `src` folder changes (except .css)
// and reload browserSync
gulp.task('watch', ['build', 'browserSync'], function () {
    return gulp.watch([
        'src/**/*',
        '!src/**/*.css',
    ], ['build', 'reloadBrowserSync']);
});