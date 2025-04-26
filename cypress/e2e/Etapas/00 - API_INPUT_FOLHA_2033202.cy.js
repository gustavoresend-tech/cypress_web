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
      url: 'https://opera.api.qa.pjus.com.br/api/V1/Operacoes',
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
      "nome": "MARCIO ANTONIO MELHADO BEZERRA", //
      "documento": "06640100835", //
      "dataNascimento": "1958-02-22T12:57:31.215Z",
      "nomePai": "JOSE GONCALVES BEZERRA",
      "nomeMae": "ANGELA ANTNIO MELHADO BEZERRA",
      "tipoPessoa": 0,
      "estadoCivil": 1,
      "regimeBens": 0,
      "conjuge": "MARIA HELENA BERTOLINI BEZERRA",
      "telefone": "(11) 4371-6400",
      "email": "Teste-QA@teste.com.br",
      "logradouro": "Rua Presidente Vargas",
      "numeroEndereco": 85,
      "bairro": "Vila Caiúba",
      "complemento": "Casa",
      "cep": "05207-000",
      "cidade": "São Paulo",
      "estado": "SP",
      "banco": "Caixa Econômica Federal",
      "codigoBanco": "104",
      "operacaoBancaria": "001",
      "agencia": "1372",
      "agenciaDigito": "0",
      "conta": "582901162",
      "contaDigito": "6",
      "tipoConta": "0",
      "cidadeNascimento": "São Paulo",
      "estadoNascimento": "SP",
      "cartorioNascimento": "1º Cartório",
      "livroNascimento": "A123",
      "termoNascimento": "4567",
      "paginaNascimento": "89",
      "nomeConjuge": "MARIA HELENA BERTOLINI BEZERRA",
      "dataCasamento": "1981-02-22T12:57:31.215Z",
      "cidadeCasamento": "São Paulo",
      "estadoCasamento": "SP",
      "cartorioCasamento": "",
      "livroCasamento": "",
      "termoCasamento": "",
      "paginaCasamento": "",
      "rg": "7674636",
      "orgaoEmissorRg": "SSP-SP",
      "nacionalidade": "Brasileiro"
},
// Informacoes do credito precatorio
    "credito": {
      "sistemaExternoId": 2033202, //
      "processo": "0030972-56.2021.8.26.0053", //
      "precatorio": "0030972-56.2021.8.26.0053", //
      "estadoSigla": "SP",
      "esfera": 2,
      "tribunalSigla": "TJSP",
      "vencimento": 2026,
      "enteDevedor": "INSTITUTO DE PREVIDENCIA DO MUNICIPIO DE SAO PAULO - IPREM", //
      "orgaoDevedor": "INSTITUTO DE PREVIDENCIA DO MUNICIPIO DE SAO PAULO - IPREM", //
      "dataAutuacao": "2022-07-31T12:57:31.215Z",
      "tipoCredito": 1,
      "dataBase": "2022-07-31T12:57:31.215Z",
      "informacoesRecebimento": "",
      "naturezaCredito": "Alimentar", //
      "numeroJuizo": "",
      "descritivoJuizo": "Vara de Fazenda Pública",
      "comarca": "Minas Gerais",
      "acaoColetiva": false,
      "valorFace": 109280431,
      "processoDepre": "", //
      "processoSei": "",
      "senhaAcesso": "",
      "ec62": false,
      "operacaoCodigo": "SINESP-PSP-Prec",
      "operacaoDescricao": "Compra de crédito alimentar",
      "classificacaoOperacao": "CompraTotalidade",
      "classificacaoTitular": "Originario",
      "nomeOrgaoPagador": "Tesouro Estadual",
      "percentualComissao": 3.9
  },
    // Informações da proposta do precatorio
    "proposta": {
      "valorProposta": 3000000, //
      "possuiValorFuturo": false,
      "dataAceiteProposta": "2025-04-01T00:00:00Z",
      "tabelaPrecoCodigo": "SINESP-PSP-Prec",
      "cessionario": "Abeto",
      "possuiIntermediario": true,
      "intermediarioNome": "NE", //
      "possuiPatrono": true,
      "patronoNome": "NE", //
      "negociadorEmail": "deborah.drumond@pjus.com.br",
      "dadosCalculoProposta": {
          "adiantamento": 0,
          "anoVencimento": 2026,
          "calculoHunterEditouImpostoRenda": false,
          "comissaoXp": 0,
          "controlePreValoresXp": 0,
          "dataAceitePreProposta": "2025-03-20T00:00:00Z",
          "dataAceiteProposta": "2025-04-01T00:00:00Z",
          "dataAlteracaoProposta": "2025-02-11T00:00:00Z",
          "dataAutuacao": "2023-03-15T00:00:00Z",
          "dataEc": "2025-07-01",
          "dataExpedicao": "2025-02-15T00:00:00Z",
          "dataFimFormacao": "2022-04-01",
          "dataInicioFormacao": "2010-10-01",
          "dataLiquidacao": "2022-07-31T00:00:00Z",
          "dataRegistro": "2024-04-23T00:00:00Z",
          "dataUltimaAtualizacao": "2025-02-07T00:00:00Z",
          "descontoPrevidencia": 970501,
          "honorarios": 0, //
          "id": 2042711,
          "idImpostoDeRenda": 0,
          "idResumo": "3efa2b50-5bf6-4f63-9965-7919447709fb",
          "idTipoPrevidencia": 2,
          "idUsuarioAcaoFinalXp": 101,
          "idUsuarioAcaoXp": 100,
          "idUsuarioUltimaAtualizacao": 102,
          "indiceFatorDeAjuste": 1.02,
          "outrasDespesas": 0,
          "percentualAdquirido": 71.4,
          "percentualHonorarioAdvogado": 5,
          "preComissaoXp": 0,
          "prePropostaXp": 0,
          "preValoresXpAprovado": true,
          "preValoresXpRejeitado": false,
          "previdencia": 0,
          "propostaXp": 1000000, //
          "retencao": 0,
          "tabelaMaximaUltimoCalculo": 25418581, //
          "tipoDescontoPrevidencia": 1,
          "tipoImpostoDeRenda": 0,
          "tributo": 0,
          "valorContraProposta": 0,
          "valorEc": 0,
          "valoresXpAprovado": false,
          "valoresXpRejeitado": false,
          "valorJuros": 13341902,
          "valorMaximoTabela": 2415012,
          "valorMinimoTabela": 21735109,
          "valorPenhora": 0,
          "valorPrincipal": 82596627,
          "valorProposta": 300000.0
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