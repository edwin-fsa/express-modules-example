# Express with ES6 Modules

This is a minimal example of how to write express servers using 
ES6 modules instead of CommonJS (require). Essentially, you need to make two changes:

1. add `"type": "module"` to `package.json`
2. If you need access to `__dirname`, use `import.meta.dirname`

The other thing that's different from  workshops is that instead of node directly,
I use nodemon, which will automatically update your server when files change. You can install it in your own projects with `npm i -D nodemon`, where `i` is shorthand for `install` and `-D` says to install it as a development dependency (since we use regular node in production).
