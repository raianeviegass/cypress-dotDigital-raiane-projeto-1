import homePage from '../support/pages/homePage'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Teste de Solicitação de Contato', () => {

  it('Deve acessar a página de Solicitação de Contato, validar a existência dos respectivos campos do formulário, preencher o formulário, submeter o formulário, validar que ele foi enviado com sucesso e voltar para a Home Page', {defaultCommandTimeout:7000}, () => {
    homePage
      .visit()
      .acessarSolicitarContatoPage()
      .solicitarContatoPageEstaVisivel()
      .validarCamposDoFormulario()
      .preencherFormulario('Catarina Silvana Rodrigues', 'catarina-rodrigues91@powerblade.com.br', '65761040816', '78736004', '66985385328')
      .validarSelecaoCheckboxes()
      .submeterFormulario()
      .formularioEnviadoComSucessoPageEstaVisivel()
      .formularioEnviadoComSucesso()
      .voltarHomePage()
      .homePageEstaVisivel()
  })

})