const { defineConfig } = require ("cypress");

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
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space/',
    setupNodeEvents(on, config) {
      //on('test:after:run')
    },
  },
});