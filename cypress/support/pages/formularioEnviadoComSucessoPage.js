import homePage from './homePage'

class FormularioEnviadoComSucesso {

    formularioEnviadoComSucessoPageEstaVisivel() {
      cy.wait(3000);
      cy.url().should('include', '/sucesso?')
      return this
    }

    formularioEnviadoComSucesso() {
      cy.get('.f-title').should('be.visible').and('contain.text', 'Tudo certo! Aguarde nosso contato')
      cy.get('.subtitle').should('be.visible').and('contain.text', 'Seus dados foram enviados. Agora é com a gente! Logo entraremos em contato.')
      return this
    }

    voltarHomePage() {
      cy.get('#undefined').should('be.visible').and('contain.text', 'Continuar navegando')
      cy.get('#undefined').click()
      return homePage
    }

}

export default new FormularioEnviadoComSucesso()