import homePage from '../support/pages/homePage'

describe('Teste de Solicitação de Contato', () => {

  it('Deve acessar a página de Solitação de Contato, validar a existência dos respectivos campos do formulário, preencher o formulário, submeter o formulário, validar que ele foi enviado com sucesso e voltar para a Home Page', () => {
    homePage
    .visit()
    .acessarSolicitarContatoPage()
    .solicitarContatoPageEstaVisivel()
    .validarCamposDoFormulario()
    .preencherFormulario('Iago José Alves', 'iagojosealves@mesquita.not.br', '35494328287', '32242470', '31998697089')
    .validarSelecaoCheckboxes()
    .submeterFormulario()
    .formularioEnviadoComSucessoPageEstaVisivel()
    .formularioEnviadoComSucesso()
    .voltarHomePage()
    .homePageEstaVisivel()
  })

})