# ESLint Task
Lint your source files with ESLint.

## API

### eslint([options])

#### Available options:

##### **src**
(String|Array) Glob or array of globs ([What's a glob?](https://github.com/isaacs/node-glob#glob-primer)) matching JS files. Default: `'app/**/*.js'`.

##### **eslintOptions**
(Object) [ESLint CLI options](http://eslint.org/docs/developer-guide/nodejs-api#cliengine). Default:
```
{
    extends: 'eslint:recommended'
}
```

You can also use a `.eslintrc` file to supply config options.

Order that ESLint config is applied:

1. .eslintrc
2. Supplied config (eslintOptions)
3. Default

## Example

```
var eslint = require('ionic-gulp-eslint');

// default options
gulp.task('lint', eslint);

// override options
gulp.task('lint', function () {
    return eslint({ src: ['app/**/*.js'] });
});
```





