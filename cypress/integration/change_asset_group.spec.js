describe("Change asset group", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Change asset group to BTC", () => {
    cy.get(".market-widget")
      .contains("btc")
      .click()
      // .should("have.class", "active-btn")
      // подумать как проверить выбранный раздел

    cy.get(".market-assets-list .market-assets-list-item")
      .should("be.visible")
  })
})