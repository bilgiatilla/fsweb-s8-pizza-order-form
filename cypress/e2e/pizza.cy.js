describe("Pizza Order Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("inputa bir metin girer", () => {
    cy.get('[data-testid="name-input"]')
      .type("Atilla")
      .should("have.value", "Atilla");
  });

  it("birden fazla malzeme seçebilir", () => {
    cy.get('[data-testid="topping-pepperoni"]').check({ force: true });
    cy.get('[data-testid="topping-domates"]').check({ force: true });
    cy.get('[data-testid="topping-biber"]').check({ force: true });
    cy.get('[data-testid="topping-sosis"]').check({ force: true });

    cy.get('[data-testid="topping-pepperoni"]').should("be.checked");
    cy.get('[data-testid="topping-domates"]').should("be.checked");
    cy.get('[data-testid="topping-biber"]').should("be.checked");
    cy.get('[data-testid="topping-sosis"]').should("be.checked");
  });

  it("formu gönderir", () => {
    cy.intercept("POST", "**/api/**", {
      statusCode: 201,
      body: {
        id: "101",
        createdAt: "2026-04-19T18:00:00.000Z",
      },
    }).as("postOrder");

    cy.get('[data-testid="name-input"]').type("Atilla");

    cy.get('[data-testid="size-m"]').check({ force: true });

    cy.get('[data-testid="dough-select"]').select(1);

    cy.get('[data-testid="topping-pepperoni"]').check({ force: true });
    cy.get('[data-testid="topping-domates"]').check({ force: true });
    cy.get('[data-testid="topping-biber"]').check({ force: true });
    cy.get('[data-testid="topping-sosis"]').check({ force: true });

    cy.get('[data-testid="order-note"]').type("Bol malzemeli olsun");

    cy.get('[data-testid="submit-order"]')
      .should("not.be.disabled")
      .click();

    cy.wait("@postOrder");

    cy.url().should("include", "/success");
    cy.contains("SİPARİŞ ALINDI").should("exist");
  });
});