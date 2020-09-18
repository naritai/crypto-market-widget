describe("App initialization", () => {
  beforeEach(() => {
    cy.visit("/");
  })

  it('Contains MarketWidget component', () => {
    cy.get('.market-widget').should('be.visible');
  })

  it("Loads assets when page load", () => {
    cy.get(".market-assets-list .market-assets-list-item")
      .should("have.length", 758)
  })
})