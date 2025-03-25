import solicitarContatoPage from './solicitarContatoPage'

class HomePage {
  visit() {
    cy.visit('/')
    return this
  }

  acessarSolicitarContatoPage() {
    cy.get('.banner-info-button').eq(1)
      .should('be.visible')
      .contains(' Solicitar contato ').click()
    return solicitarContatoPage
  }

  homePageEstaVisivel() {
    cy.url().should('include', '/')
    cy.get('#toolbar-fixed')
    return this
  }
}

export default new HomePage()