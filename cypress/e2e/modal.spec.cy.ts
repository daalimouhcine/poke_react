describe("pokemon Cards and Modal", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be able to see the pokemon cards", () => {
    cy.get("[data-cy='skeleton-card']").should("be.visible");
    cy.get("[data-cy='pokemon-card-1']").should("be.visible");
  });

  it("should open and close the modal", () => {
    cy.get("[data-cy='pokemon-card-1']").click();
    cy.get("[data-cy='pokemon-modal']").should("be.visible");
    cy.get("[data-cy='close-pokemon-modal-button']").click();
    cy.get("[data-cy='pokemon-modal']").should("not.be.visible");
  });

  it("should check the name of the opened modal", () => {
    cy.get("[data-cy='pokemon-card-1']").click();
    cy.get("[data-cy='pokemon-modal']").should("be.visible");
    cy.get("[data-cy='modal-pokemon-name']").should("have.text", "Bulbasaur");
    cy.get("[data-cy='close-pokemon-modal-button']").click();
    cy.get("[data-cy='pokemon-modal']").should("not.be.visible");
  });

  it("should scroll down and check if a new card apers and check the name of the 70th with the modal", () => {
    cy.scrollTo("bottom");
    cy.wait(1000);
    cy.scrollTo("bottom");
    cy.get("[data-cy='pokemon-card-70']").click();
    cy.get("[data-cy='pokemon-modal']").should("be.visible");
    cy.get("[data-cy='modal-pokemon-name']").should("have.text", "Weepinbell");
    cy.get("[data-cy='close-pokemon-modal-button']").click();
  });
});
