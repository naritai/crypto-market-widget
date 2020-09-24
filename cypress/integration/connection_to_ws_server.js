describe("Checks connection to websocket server", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Successfully connects to ws server", () => {
    const config = {
      url: "wss://stream.binance.com/stream?streams=!miniTicker@arr"
    };

    cy.wrap(null, { timeout: 20000 }).then(() => {
      cy.streamRequest(config).then(results => {
        expect(results).to.not.be.undefined;
      });
    })
  });
});