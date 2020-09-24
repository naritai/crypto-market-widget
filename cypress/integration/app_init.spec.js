describe("App initialization", () => {
  it('Contains MarketWidget component', () => {
    cy.visit("/");
    cy.get("[data-cy=market-widget]").should("be.visible");
  });

  it("Loads assets when page is loaded", () => {
    cy.server();
    cy.route("GET", "**/get-products")
      .as("get-assets-request");

    cy.visit("/");
    cy.wait("@get-assets-request").should(xhr => {
      expect(xhr.response.body)
        .to.have.property("data")
        .and.to.be.a("array");

      expect(xhr.status).to.equal(200);
    });

    cy.get("[data-cy=asset-list-item]").should("be.visible");
  });
});