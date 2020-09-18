describe("Search asset logic", () => {
  const searchText = "BNBBTC";
  const searchedAsset = "BNB/BTC";
  const fakeAsset = "foobarbaz";

  beforeEach(() => {
    cy.visit("/");
  });

  it("accepts input", () => {
    cy.get(".search-asset-input")
      .type(searchText)
      .should("have.value", searchText);
  })

  context("Search an asset in the assets list", () => {
    it("Search a certain asset in the list", () => {
      cy.get(".search-asset-input")
        .type(searchText);

      cy.get(".market-assets-list .market-assets-list-item")
        .as("assets_list")
        .should("be.visible")
        .and("contain", searchedAsset);
    });

    it.only("Renders an empty list if no asset has been found", () => {
      cy.get(".search-asset-input")
        .type(fakeAsset);

      cy.get(".market-assets-list .market-assets-list-item")
        .should("not.exist");

      cy.get(".asset-not-found")
        .should("be.visible")
    })
  })
})