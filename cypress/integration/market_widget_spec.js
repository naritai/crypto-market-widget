describe('Main page', () => {
  it('Successfully loads main page', () => {
    cy.visit('/')
  });

  it('Contains MarketWidget component', () => {
    cy.get('.market-widget').should('be.visible');
  })
})