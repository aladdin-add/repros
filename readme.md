## repro esno
refs: https://github.com/esbuild-kit/esno/issues/25
```sh
$ npm run dev

> repros@1.0.0 dev
> esno serve.ts

(node:23392) ExperimentalWarning: Custom ESM Loaders is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
SyntaxError: The requested module '../lib/application.js' does not provide an export named 'default'
```