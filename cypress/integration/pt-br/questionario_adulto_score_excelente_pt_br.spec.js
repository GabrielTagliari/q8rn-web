/// <reference types="Cypress" />

context('Questionario Adulto Portugues', () => {
  
  it('Acessar questionario adulto portugues', () => {
    cy.visit("http://localhost:8080/");
    cy.get('#lang-dropdown').click()
    cy.get('.q-list').children().first().click()
    cy.get('#adulto').click()
    cy.get("#tema").should("have.text", "Nutrição");
  })

  it('Clicar em proximo sem selecionar opcao', () => {
    cy.get('#proximo').click()
    cy.get(".modal-header").should("have.text", "Resposta obrigatória");
    cy.get('.modal-buttons').children().click()
  })

  for (let index = 0; index < 22; index++) {
    it('Clicar em proximo selecionando opcao', () => {
      cy.get('.q-radio').first().click()
      if (index === 21) {
        cy.get('#finalizar').click()  
      } else {
        cy.get('#proximo').click()
      }
    })
  }

  it('Verificar escore e classificacao', () => {
    cy.get("#escore").should("have.text", "Pontuação: 88");
    cy.get("#classificacao").should("have.text", "Classificação: Excelente");
  })
})
