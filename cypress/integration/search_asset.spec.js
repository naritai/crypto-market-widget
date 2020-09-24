describe("Search asset logic", () => {
  const searchText = "BNBBTC";
  const searchedAsset = "BNB/BTC";
  const fakeAsset = "foobarbaz";

  beforeEach(() => {
    cy.visit("/");
  });

  context("Search an asset in the assets list", () => {
    it("Finds search input element and types in search value", () => {
      cy.findByPlaceholderText("Search").type(searchText);

      cy.get("[data-cy=asset-list-item]").should("be.visible")
        .and("contain", searchedAsset);
    });

    it("Renders an empty list if no asset has been found", () => {
      cy.findByPlaceholderText("Search").type(fakeAsset);
      cy.get("[data-cy=asset-list-item]").should("not.exist");
      cy.get("[data-cy=asset-not-found]").should("be.visible");
    })
  })
});