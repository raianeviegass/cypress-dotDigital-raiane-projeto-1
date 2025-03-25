const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://meoo.localiza.com/',
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    retries: 0,
    screenshotsFolder: './reports/screenshots',
  },
  reporter: 'mochawesome',
  reporterOptions: {
      reportDir: './reports',
      reportFilename: "relatorio-final-testes",
      overwrite: true,
      html: true,
      json: true,
    }

})