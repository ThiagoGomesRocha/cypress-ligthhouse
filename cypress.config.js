const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { pa11y } = require("@cypress-audit/pa11y");
const fs = require("fs");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse((lighthouseReport) => {
          const reportHtml = lighthouseReport.report;
          fs.writeFileSync('cypress/reports/lighthouse.html', reportHtml);
        }),
      });
    },
  },
};