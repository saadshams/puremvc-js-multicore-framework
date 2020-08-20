# PureMVC
Hi Saad, this is a placeholder README that I hope will be off some use during further development.

- build artefacts are now put into `./out` rather than `./build` (see package.json#exports for example of the path)
- the project contains an implicit babel configuraton to patch a bug with nightwatch. Babel will be removed when this issue is fixed.
- each test file (*Spec.js) must import test dependencies (no shared "global scope")
- run bdd tests like so:
```bash
npm run test
```
run bdd and e2e tests like so
```bash
NODE_ENV=staging npm run test
```
run e2e tests directly
```bash
npm run test:e2e
```


## TODO
- unify mocha global scope variables for test:bdd and test:e2e
- clarify project LICENSE
- clarify project name
- watch bdd tests
- when nightwatch fixes modules, remove the Babel patch
- define this README for doc and for github
- define cross platform environmental variables
- consider integrating .npmrc for package.json configuration variables
  - it should be committed to git or should note be made about ~/.npmrc
- find way to define semver build directory and file name in package.json
- FIX: nightwatch logs being dumped in tool/nightwatch due to permissions issues
- FIX: nightwatch - browser silent launch is needed but is not set
- add readme to directories to explain project structure
- configure nightwatch for Firefox and Chrome tests

### Package APIs

#### Documentation
- https://jsdoc.app/about-commandline.html

#### Testing
- https://mochajs.org/
- https://sinonjs.org/
- [Nightwatch configuration example](https://gist.github.com/rebers/b640b1663c98d4436ecabb06270ff091)


### Project management
- https://stackabuse.com/the-ultimate-guide-to-configuring-npm/
- https://stackabuse.com/the-ultimate-guide-to-configuring-npm/
- https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm
- https://nodesource.com/blog/configuring-your-npmrc-for-an-optimal-node-js-environment
- https://www.freecodecamp.org/news/10-npm-tricks-that-will-make-you-a-pro-a945982afb25/
- https://flaviocopes.com/package-json/
- https://www.toptal.com/javascript/a-guide-to-npm-the-node-package-manager
- https://github.com/lorenwest/node-config
- https://docs.npmjs.com/package-name-guidelines
