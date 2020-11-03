const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)
  on('file:preprocessor', cucumber());
  on('task', {
    failed: require('cypress-failed-log/src/failed')(),
  })

  return config
};