const { defineConfig } = require('cypress');
const fs = require('fs');

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 20000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  numTestsKeptInMemory: 10,
  blockHosts: ['*.google.com'],
  chromeWebSecurity: false,
  screenshotsFolder: 'screenshots',
  videosFolder: 'video',
  video: false,
  hosts: {
    'staging.acme.co': '127.0.0.1',
    'acme.co': '127.0.0.1',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    supportFile: false,
    fixturesFolder: "cypress/fixtures",
    setupNodeEvents(on, config) {
      const environmentName = config.env.environmentName || 'local';
      const environmentFilename = `./cypress/config/${environmentName}.settings.json`;
      console.log('loading %s', environmentFilename);
      
      if (fs.existsSync(environmentFilename)) {
        const settings = require(environmentFilename);
        // Merge the settings with the config object
        return {
          ...config,
          ...settings,
          e2e: {
            ...config.e2e,
            baseUrl: settings.baseUrl || config.e2e.baseUrl,
          },
        };
      } else {
        console.error(`Configuration file ${environmentFilename} not found`);
        return config;
      }
    },
  },
});