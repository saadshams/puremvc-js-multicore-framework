/* PATCH @see [... import/export works in Nightwatch test](https://bit.ly/2Y9bfLv) */
require('babel-core/register')
module.exports = {
  test_runner: {
    // type: "default" // N.B. default will produce xml output
    type: "mocha" // display tests in console
  }
, output_folder: "tool/nightwatch/results"
, src_folders: ["src/test"]
, test_settings: {
    /* @todo Chrome */
    /* @todo Firefox */
    /* @todo Edge */
    /* Safari is default for this scaffold  */
    default: {
      desiredCapabilities : {
        browserName : 'safari',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      }
    , webdriver: {
        port: 4445
      , start_process: true
      , server_path: '/usr/bin/safaridriver'
      , log_path: 'tool/nightwatch/'
      }
    }
  }
}
