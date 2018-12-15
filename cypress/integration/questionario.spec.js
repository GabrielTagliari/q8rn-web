/// <reference types="Cypress" />

context('Questionario', () => {
  
  it('verifica se carrega questoes ao clicar em questionario sem formulario', () => {
    cy.visit("http://localhost:8080/#/questionario");
    cy.get('.questionario-sem-form').click()
    cy.get("#tema")
      .should("have.text", " Nutrição ");
  })
})
