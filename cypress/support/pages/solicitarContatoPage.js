import formularioEnviadoComSucessoPage from './formularioEnviadoComSucessoPage'

class SolicitarContatoPage {

    solicitarContatoPageEstaVisivel() {
      cy.url().should('include', '/preencha-seus-dados')
      cy.get('.sc-d-title')
        .should('be.visible')
        .contains('Preencha seus dados')
      return this
    }

    validarCamposDoFormulario() {
      cy.get('#mat-mdc-form-field-label-0').should('be.visible').and('contain.text', 'Nome')
      cy.get('#mat-mdc-form-field-label-6').should('be.visible').and('contain.text', 'E-mail')
      cy.get('#mat-mdc-form-field-label-2').should('be.visible').and('contain.text', ' CPF ou CNPJ *')
      cy.get('#mat-mdc-form-field-label-8').should('be.visible').and('contain.text', 'CEP')
      cy.get('#mat-mdc-form-field-label-4').should('be.visible').and('contain.text', 'Telefone ')
      cy.get('#form-pref-wpp').should('be.visible').and('contain.text', 'Pode me chamar no WhatsApp')
      cy.get('#form-pref-email-sms').should('be.visible').and('contain.text', 'Aceito receber e-mail e SMS promocionais da Localiza')
      cy.get('#optin-scr').should('be.visible').and('contain.text', 'Aceito os termos de uso e autorizo a Localiza, através de empresas parceiras, a consultar o Sistema de Informações de Crédito para fins de análise de crédito e risco, nos termos da Resolução CMN n° 5.037 de 29.9.2022')
      cy.get('#undefined').should('be.visible').and('contain.text', 'SOLICITAR CONTATO')
      cy.get('#icon-small').should('be.visible').and('contain.text', 'Ir para o Whatsapp')
      return this
    }

    preencherFormulario(nome,email,cpfOucnpj,cep,telefone) {
      cy.get('#name').type(nome)
      cy.get('#email').type(email)
      cy.get('#document').type(cpfOucnpj)
      cy.get('#zipCode-').type(cep)
      cy.get('#mat-mdc-form-field-label-10').should('be.visible').and('contain.text', 'Cidade')
      cy.get('#mat-mdc-form-field-label-12').should('be.visible').and('contain.text', 'Estado')
      cy.get('#mat-input-2').type(telefone)
      cy.get('#form-pref-email-sms').should('be.visible').click()
      return this
    }

    validarSelecaoCheckboxes() {
      cy.get('mat-checkbox#form-pref-email-sms').should('have.class', 'mat-mdc-checkbox-checked')
      cy.get('mat-checkbox#optin-scr').should('have.class', 'mat-mdc-checkbox-checked')
      return this
    }
    
    submeterFormulario() {
      cy.get('#undefined').click()
      return formularioEnviadoComSucessoPage
    }

}
    
export default new SolicitarContatoPage()