var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    assign = require('lodash.assign');

var defaultOptions = {
    src: 'app/**/*.js',
    eslintOptions: {
        extends: 'eslint:recommended'
    }
}

module.exports = function (options) {
    options = assign(defaultOptions, options);

    return gulp.src(options.src)
        .pipe(eslint(options.eslintOptions))
        .pipe(eslint.format());
}
