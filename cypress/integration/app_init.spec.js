describe("App initialization", () => {
  beforeEach(() => {
    cy.visit("/");
  })

  it('Contains MarketWidget component', () => {
    cy.get('.market-widget').should('be.visible');
  })

  it("Loads assets when page is loaded", () => {
    cy.get(".market-assets-list-item")
      .should("be.visible")
  })
})