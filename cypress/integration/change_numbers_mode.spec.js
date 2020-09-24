describe("Change numbers mode: change or volume", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Change the view mode to volume", () => {
    cy.get("[data-cy=search-panel]")
      .within(() => cy.findByText("Volume"))
      .click();

    cy.get("[data-cy=market-body]").contains("Volume");
  })
});