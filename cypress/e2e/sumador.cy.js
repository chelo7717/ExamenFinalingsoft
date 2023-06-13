describe("Sumador", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#primeraPalabra").type("El");
    cy.get("#segundaPalabra").type("El");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "9");
  });
});
