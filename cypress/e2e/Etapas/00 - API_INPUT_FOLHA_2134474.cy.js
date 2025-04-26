// DADO: que preciso inserir um novo card de precatório na esteira da aplicação Opera
// E: esse precatório NAO tem valor fututo e tem input de CPF
// QUANDO: envio a requisição com os dados de body preebchidos corretamente
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
      "nome": "2134474 - CELIO DONIZETE PEREIRA (NAO USAR)", //
      "documento": "099.276.788-19", //
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
      "numeroEndereco": 322,
      "bairro": "Centro",
      "complemento": "Sobrado",
      "cep": "01010-000",
      "cidade": "Belo Horizonte",
      "estado": "MG",
      "banco": "Santander",
      "codigoBanco": "033",
      "operacaoBancaria": "001",
      "agencia": "0947",
      "agenciaDigito": "0",
      "conta": "07672912",
      "contaDigito": "6",
      "tipoConta": "Corrente",
      "cidadeNascimento": "Belo Horizonte",
      "estadoNascimento": "MG",
      "cartorioNascimento": "1º Cartório",
      "livroNascimento": "A123",
      "termoNascimento": "4567",
      "paginaNascimento": "89",
      "nomeConjuge": "Ana Paula Silva",
      "dataCasamento": "2005-06-20T00:00:00Z",
      "cidadeCasamento": "São Paulo",
      "estadoCasamento": "SP",
      "cartorioCasamento": "2º Cartório",
      "livroCasamento": "B456",
      "termoCasamento": "1234",
      "paginaCasamento": "56",
      "rg": "12.345.678-9",
      "orgaoEmissorRg": "SSP-SP",
      "nacionalidade": "Brasileiro"
},
// Informacoes do credito precatorio
    "credito": {
      "sistemaExternoId": 0, //
      "processo": "1005471-22.2018.8.26.0269", //
      "precatorio": "a20240166203", //
      "estadoSigla": "SP",
      "esfera": 2,
      "tribunalSigla": "TRF1",
      "vencimento": 2026,
      "enteDevedor": "INSS - INSTITUTO NACIONAL DO SEGURO SOCIAL", //
      "orgaoDevedor": "FUNDO DO REGIME GERAL DE PREVIDENCIA SOCIAL", //
      "dataAutuacao": "2023-05-10T12:57:31.215Z", //
      "tipoCredito": 2,
      "dataBase": "2024-01-01T12:57:31.215Z", //
      "informacoesRecebimento": "Pagamento previsto para o segundo semestre",
      "naturezaCredito": "Alimentar", //
      "numeroJuizo": "12ª Vara Cível",
      "descritivoJuizo": "Vara de Fazenda Pública",
      "comarca": "Minas Gerais",
      "acaoColetiva": false,
      "valorFace": 75569858, //
      "processoDepre": "DEPRE-2023-56789", //
      "processoSei": "SEI-123456",
      "senhaAcesso": "senha@123",
      "ec62": false,
      "operacaoCodigo": "TRF1F", 
      "operacaoDescricao": "Compra de crédito alimentar",
      "classificacaoOperacao": "CompraTotalidade",
      "classificacaoTitular": "Originario",
      "nomeOrgaoPagador": "Tesouro Estadual",
      "percentualComissao": 5
  },
    // Informações da proposta do precatorio
    "proposta": {
      "valorProposta": 37000000, //
      "possuiValorFuturo": false,
      "dataAceiteProposta": "2025-04-01T00:00:00Z", //
      "tabelaPrecoCodigo": "TRF1F", //
      "cessionario": "Abeto",
      "possuiIntermediario": true,
      "intermediarioNome": "NE", //
      "possuiPatrono": false,
      "patronoNome": "NE", //
      "negociadorEmail": "negociador@xp.com.br",
      "dadosCalculoProposta": {
          "adiantamento": 0, //Pagamento de Tributo
          "anoVencimento": 2026,
          "calculoHunterEditouImpostoRenda": false,
          "comissaoXp": 12500, 
          "controlePreValoresXp": 0,
          "dataAceitePreProposta": "2025-03-20T00:00:00Z",
          "dataAceiteProposta": "2025-04-01T00:00:00Z",
          "dataAlteracaoProposta": "2025-04-10T00:00:00Z",
          "dataAutuacao": "2023-03-15T00:00:00Z",
          "dataEc": "2025-07-01", //Data EC-62:
          "dataExpedicao": "2025-02-15T00:00:00Z",
          "dataFimFormacao": "2025-07-01",
          "dataInicioFormacao": "2025-06-01",
          "dataLiquidacao": "2026-01-10T00:00:00Z",
          "dataRegistro": "2025-04-22T00:00:00Z",
          "dataUltimaAtualizacao": "2025-04-22T00:00:00Z",
          "descontoPrevidencia": 0,
          "honorarios": 23888388, //
          "id": 789,
          "idImpostoDeRenda": 456,
          "idResumo": "RES-9876",
          "idTipoPrevidencia": 2,
          "idUsuarioAcaoFinalXp": 101,
          "idUsuarioAcaoXp": 100,
          "idUsuarioUltimaAtualizacao": 102,
          "indiceFatorDeAjuste": 1.02,
          "outrasDespesas": 2000,
          "percentualAdquirido": 71.4,
          "percentualHonorarioAdvogado": 5,
          "preComissaoXp": 262500,
          "prePropostaXp": 275000,
          "preValoresXpAprovado": true,
          "preValoresXpRejeitado": false,
          "previdencia": 0,
          "propostaXp": 54067384,
          "retencao": 0,
          "tabelaMaximaUltimoCalculo": 0, //
          "tipoDescontoPrevidencia": 1,
          "tipoImpostoDeRenda": 2,
          "tributo": 5000,
          "valorContraProposta": 0,
          "valorEc": 0,
          "valoresXpAprovado": true,
          "valoresXpRejeitado": false,
          "valorJuros": 0,
          "valorMaximoTabela": 36549552, //
          "valorMinimoTabela": 0,
          "valorPenhora": 0,
          "valorPrincipal": 79627959,
          "valorProposta": 370000000
    }
  }
}
      // testes assert
      }).then((response) => {
      // Verifique o status da resposta
      expect(response.status).to.eq(200);
      // Captura print para evidencia
      cy.screenshot('01 - API_VF_CNPJ',{overwrite: true});

      // Adicione mais verificações conforme necessário

    });
  });
})