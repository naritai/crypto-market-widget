describe("Change asset group", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Change the asset group to BTC", () => {
    cy.get(".market-widget")
      .contains("btc")
      .click()
      .should("have.class", "active-btn")

    cy.get(".market-assets-list .market-assets-list-item")
      .should("be.visible")
  })
})