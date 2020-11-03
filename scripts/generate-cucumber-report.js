const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'hierarchy',
  jsonDir: 'cypress/cucumber-json',
  output: 'cypress/cucumber-report/index.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  scenarioTimestamp: true,
  screenshotsDirectory: 'screenshots/',
  storeScreenshots: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "DEV",
    "Browser": "Chrome  54.0.2840.98",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);