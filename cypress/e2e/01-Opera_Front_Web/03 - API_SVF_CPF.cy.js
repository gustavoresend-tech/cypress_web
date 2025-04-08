// DADO: que preciso inserir um novo card de precatório na esteira da aplicação Opera
// E: esse precatório NAO tem valor futuro, e tem input de CPF
// QUANDO: envio a requisição com os dados de body preenchidos corretamente
// ENTAO: o response.status deve retornar (200 OK); 
// E: o card deve ser inserido no inicio da esteira conforme os dados incluidos no body


// Descreve o bloco de testes para a API de Operação - Valor Futuro CNPJ
describe('API Operacao - Valor Futuro CNPJ', () => {
  // Descreve o teste individual para a API
  it('Validar API Operacao - Valor Futuro CNPJ', () => {
    cy.request({
      // Método da requisição
      method: 'POST',
      // URL da API
      url: 'https://opera.api.hml.pjus.com.br/api/V1/Operacoes',
      // Cabeçalhos da requisição
      headers: {
        // Tipo de conteúdo aceito
        'accept': '*/*',
        // Tipo de conteúdo enviado
        'Content-Type': 'application/json'
},
  body: { // Corpo da requisição
    // Informacoes do titular do crédito
    "titular": {
      "nome": "Teste-QA - Cypress",
      "documento": "925.910.640-08",
      "dataNascimento": "1985-06-15T12:57:31.215Z",
      "nomePai": "QA Silva",
      "nomeMae": "QA Souza",
      "tipoPessoa": 2,
      "estadoCivil": 3,
      "regimeBens": 2,
      "conjuge": "Dev Oliveira",
      "telefone": "(31) 98765-4321",
      "email": "Teste-QA@teste.com.br",
      "logradouro": "Rua dos códigos",
      "numeroEndereco": 666,
      "bairro": "Centro",
      "complemento": "Sobrado",
      "cep": "01010-000",
      "cidade": "Belo Horizonte",
      "estado": "RJ",
      "banco": "Banco de Dados",
      "agencia": "12364",
      "contaDigito": "56789-0"
    },
// Informacoes do credito precatorio
    "credito": {
      "processo": "98765432-1",
      "precatorio": "2023-0001123456",
      "estadoSigla": "RJ",
      "esfera": 2,
      "tribunalSigla": "TRF5",
      "vencimento": 2030,
      "enteDevedor": "União Federal",
      "orgaoDevedor": "Ministério da Fazenda",
      "dataAutuacao": "2023-05-10T12:57:31.215Z",
      "tipoCredito": 2,
      "dataBase": "2024-01-01T12:57:31.215Z",
      "informacoesRecebimento": "Pagamento previsto para 2025",
      "naturezaCredito": 1,
      "numeroJuizo": "12345",
      "descritivoJuizo": "Vara Federal de Execuções",
      "comarca": "Rio de Janeiro",
      "classificacaoTitular": 1,
      "acaoColetiva": false,
      "valorFace": 84004521,
      "processoDepre": "DEPRE-2023-56789",
      "processoSei": "SEI-2023-098765",
      "senhaAcesso": "ABC123!@#",
      "ec62": true,
      "operacaoCodigo": "TRF5I",
      "operacaoDescricao": "TRF5 Comum",
      "classificacaoOperacao": 1
    },
    // Informações da proposta do precatorio
    "proposta": {
      "valorProposta": 1300505,
      "possuiValorFuturo": false,
      "dataAceiteProposta": "2025-03-13T12:57:31.215Z",
      "tabelaPrecoCodigo": "TRF5",
      "cessionario": 1,
      "possuiIntermediario": true,
      "intermediarioNome": "Advogado",
      "possuiPatrono": true,
      "patronoNome": "Dr. Marlyn Manson",
      "negociadorEmail": "Teste-QA@pjus.com.br"
    }
  }
      // testes assert
    }).then((response) => {
      expect(response.status).to.eq(200);        
      // Adicione mais verificações conforme necessário
    });
  });
})