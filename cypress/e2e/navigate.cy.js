describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get('[data-testid="card"]').eq(0).click();
    cy.get('[data-testid="item-episodes"]').eq(0).click();
    cy.get('[data-testid="header-text"]').eq(0).click();
    cy.url().should("include", "/");
  });
});
