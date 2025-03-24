import HomePage from '../support/pages/HomePage'

describe('Teste de Solicitação de Contato', () => {

  it('Deve acessar a página de Solitação de Contato, validar a existência dos respectivos campos do formulário, preencher o formulário, submeter o formulário, validar que ele foi enviado com sucesso e voltar para a Home Page', () => {
    HomePage
    .visit()
    .acessarSolicitarContatoPage()
    .solicitarContatoPageEstaVisivel()
    .validarCamposDoFormulario()
    .preencherFormulario('Mariah Milena Francisca Melo', 'mariah_melo@megasurgical.com.br', '59095767639', '69301225', '95993884900')
    .validarSelecaoCheckboxes()
    .submeterFormulario()
    .formularioEnviadoComSucessoPageEstaVisivel()
    .formularioEnviadoComSucesso()
    .voltarHomePage()
    .homePageEstaVisivel()
  })

})