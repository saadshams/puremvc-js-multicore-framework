/* @todo split ino buildReleaseCJS and buildReleaseES6 */
/* @todo process.ENV to disable terser during development */
import pkg from "../../package.json"
import multiEntry from "rollup-plugin-multi-entry"
import includePaths from "rollup-plugin-includepaths"
import { terser } from "rollup-plugin-terser"

export default {
  input: [
    `tool/rollup/manifest/index.js`,
    `src/main/**/*.js`
  ],
  output: {
    file: `${pkg.exports}`,
    format: "esm"
  },
  plugins: [
    includePaths({
      paths: [
        `src/main`
      ]
    }),
    multiEntry({
      exports: true
    }),
    terser({
      mangle: {
        safari10: true
      , keep_classnames: true
      , properties: {
          regex: /^_|_$/
        }
      }
    })
  ]
}
