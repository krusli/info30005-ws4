# Worked solutions for Workshop 4
Each branch in this repository contains the state of the source directories at the end of each stage of the workshop.

To see all branches: `git branch`

To checkout a branch: `git checkout <branchname>` (without brackets)

To go back to the `master` branch: `git checkout master`

## Create a Node project
Branch: `create-node-project`

Notes:
- `npm`: Node Package Manager
- `npm init` is an interactive wizard which asks you for a bunch of questions to automatically create a `package.json` file for you. `package.json` contains metadata about your Node project ("package").
- [package.json fields - documentation](https://docs.npmjs.com/files/package.json) (also in workshop slides)

## Create an express boilerplate
Branch: `create-express-boilerplate`

If you are trying to run the `app.js` file for the Express server, be sure to run `npm install` to install all the required dependencies (including Express) first.

This is the reason why we use `npm install --save`, so that all the dependencies (required modules/packages) that our web app needs can easily be installed (preparing the runtime environment) when we run the project on another machine.

### The Node.js import system
- https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/
- To see the paths Node.js uses when it searches for modules, run `console.log(module.paths)`.
  - To play around with a Node.js REPL (read-eval-print-loop) in the same style as Python's, simply run `node` on your CLI.

Contents of `module.paths`
```
[ '/Users/kenneth/Desktop/info30005-ws4/repl/node_modules',
  '/Users/kenneth/Desktop/info30005-ws4/node_modules',
  '/Users/kenneth/Desktop/node_modules',
  '/Users/kenneth/node_modules',
  '/Users/node_modules',
  '/node_modules',
  '/Users/kenneth/.node_modules',
  '/Users/kenneth/.node_libraries',
  '/usr/local/Cellar/node/9.8.0/lib/node' ]
```

### Express
- [Express behind the hood](https://medium.com/man-moon/express-js-under-the-hood-6452c897b316)

## Install nodemon
Branch: `create-node-project`

Nothing much to see here - as we are installing `nodemon` globally (`-g` flag): to the internal "node_modules" directory of your Node installation.

You can alternatively install `nodemon` as a dev-dependency (`--save-dev`) and set up a script to run `nodemon`.

In `package.json`:
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "nodemon": "nodemon app.js"
},
```

If you've chosen to do this, you can run the `nodemon` Node script by running `npm run nodemon`. Alternatively for the global install, simply run `nodemon app.js` in your project directory.
