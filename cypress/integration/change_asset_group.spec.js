describe("Change asset group", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Change asset group to BTC", () => {
    cy.get("[data-cy=market-widget]")
      .findByText("btc")
      .click()
      .should("have.class", "active-btn");

    cy.get("[data-cy=asset-list-item]").should("be.visible");
  })
});