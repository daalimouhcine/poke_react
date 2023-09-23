describe("pokemon Cards and Modal", () => {
  it("should display the cards and the modal is functional", () => {
    cy.visit("/");

    // should be able to see the pokemon cards
    cy.get("#pokemon-card-1").click();
    cy.get("#pokemon-modal").should("be.visible");

    // close the modal
    cy.get("#close-pokemon-modal-button").click();
    cy.get("#pokemon-modal").should("not.be.visible");

    // click any card again and check the name
    cy.get("#pokemon-card-1").click();
    cy.get("#pokemon-modal").should("be.visible");
    cy.get("#modal-pokemon-name").should("have.text", "Bulbasaur");

    cy.get("#close-pokemon-modal-button").click();
    cy.get("#pokemon-modal").should("not.be.visible");

    // scroll down and check the number of cards should be more than 25
    cy.scrollTo("bottom");
    cy.get("#pokemon-card-26").click();
    cy.get("#pokemon-modal").should("be.visible");
    cy.get("#modal-pokemon-name").should("have.text", "Raichu");
    cy.get("#close-pokemon-modal-button").click();
    cy.get("#pokemon-modal").should("not.be.visible");
  });
});
