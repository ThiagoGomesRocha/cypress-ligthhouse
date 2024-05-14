describe('Lighthouse', () => {
  it('should run performance audits in globo home page', () => {
    const url = 'www.sicoob.com.br/web/sicoob/sistema-sicoob';
    cy.visit(url,{timeout:20000});
    const customThresholds = {
      performance: 30,
      accessibility: 50,
      seo: 70,
      'first-contentful-paint': 21000,
      'largest-contentful-paint': 10000,
      'cumulative-layout-shift': 0.1,
      'total-blocking-time': 800,
    };

    const desktopConfig = {
      formFactor: 'desktop',
      screenEmulation: { disabled: true },
    };

    const lighthouseConfig = {
      settings: { output: "html" },
      extends: "lighthouse:default",
    };

    cy.lighthouse(customThresholds, desktopConfig, lighthouseConfig);
  });
});