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
      url: Cypress.env('URL_API') + '/api/V1/Operacoes',
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
      "nome": "Teste-QA-Workflow - (NAO USAR)",
      "documento": "01199292605",
      "dataNascimento": "1980-01-01T12:57:31.215Z",
      "nomePai": " ",
      "nomeMae": "TESTE NETO",
      "tipoPessoa": 0,
      "estadoCivil": 1,
      "regimeBens": 1,
      "conjuge": "TESTE OLIVEIRA",
      "telefone": "(73) 3202-2386",
      "email": "Teste-QA@teste.com.br",
      "logradouro": "RUA EDNA VIEIRA REZENDE",
      "numeroEndereco": 72,
      "bairro": "DEMOCRATA",
      "complemento": "Casa",
      "cep": "45570-000",
      "cidade": "Ipiaú",
      "estado": "BA",
      "banco": "Santander",
      "codigoBanco": "033",
      "operacaoBancaria": "001",
      "agencia": "2960",
      "agenciaDigito": "0",
      "conta": "03029746",
      "contaDigito": "6",
      "tipoConta": "1",
      "cidadeNascimento": "Ipiaú",
      "estadoNascimento": "BA",
      "cartorioNascimento": "1º Cartório",
      "livroNascimento": "A123",
      "termoNascimento": "4567",
      "paginaNascimento": "89",
      "nomeConjuge": "JECIENE ROCHA SANTOS OLIVEIRA",
      "dataCasamento": "2024-04-17T12:57:31.215Z",
      "cidadeCasamento": "BARRA_DO_ROCHA",
      "estadoCasamento": "BA",
      "cartorioCasamento": "",
      "livroCasamento": "",
      "termoCasamento": "",
      "paginaCasamento": "",
      "rg": "807032590",
      "orgaoEmissorRg": "SSP BA",
      "nacionalidade": "Brasileiro"
},
// Informacoes do credito precatorio
    "credito": {
      "sistemaExternoId": 2033202,
      "processo": "0030972-56.2021.8.26.0053",
      "precatorio": "0030972-56.2021.8.26.0053",
      "estadoSigla": "MG",
      "esfera": 2,
      "tribunalSigla": "TJMG",
      "vencimento": 2026,
      "enteDevedor": "INSTITUTO DE PREVIDENCIA DO MUNICIPIO DE SAO PAULO - IPREM",
      "orgaoDevedor": "INSTITUTO DE PREVIDENCIA DO MUNICIPIO DE SAO PAULO - IPREM",
      "dataAutuacao": "2022-07-31T12:57:31.215Z",
      "tipoCredito": 1,
      "dataBase": "2022-07-31T12:57:31.215Z",
      "informacoesRecebimento": "Pagamento previsto para o segundo semestre",
      "naturezaCredito": "Alimentar",
      "numeroJuizo": "12ª Vara Cível",
      "descritivoJuizo": "Vara de Fazenda Pública",
      "comarca": "Minas Gerais",
      "acaoColetiva": false,
      "valorFace": 109280431,
      "senhaAcesso": "12345@78",
      "ec62": false,
      "operacaoCodigo": "SINESP-PSP-Prec",
      "operacaoDescricao": "SINESP - Município de São Paulo (Precatório)",
      "classificacaoOperacao": "2",
      "classificacaoTitular": "0",
      "nomeOrgaoPagador": "INSTITUTO DE PREVIDENCIA DO MUNICIPIO DE SAO PAULO - IPREM",
      "CnpjOrgaoPagador": "23673034000142",
      "percentualComissao": 3.9,
      "NomeAdvogado": "Advogado",
      "CpfAdvogado": "370.696.467-40",
      "OabAdvogado": "987654",
      "TribunalSiglaOndeTramita": "TRFSP",
      "ExpectativaVencimento": 2026,
      "ProcessoOriginario": "0030972-56.2021.8.26.0053",
      "ProcessoConhecimento": "0030972-56.2021.8.26.0053",
      "ProcessoExecucao": "0030972-56.2021.8.26.0053",
      "ProcessoDepre": "0005678-90.2020.8.26.0001",
      "ProcessoSei": "SEI-123456",
      "DataDistribuicao": "2025-02-07T00:00:00Z",
      "DataCitacao": "2025-02-07T00:00:00Z",
      "DataTransitoJulgado": "2025-02-07T00:00:00Z",
      "DataProtocolo": "2025-02-07T00:00:00Z",
      "DataPenhora": "2025-02-07T00:00:00Z",
      "DataUltimaMovimentacao": "2025-04-07T00:00:00Z"
},
    // Informações da proposta do precatorio
    "proposta": {
      "valorProposta": 14253.37,
      "possuiValorFuturo": false,
      "dataAceiteProposta": "2025-04-01T00:00:00Z",
      "tabelaPrecoCodigo": "MUNE5",
      "cessionario": "Abeto",
      "possuiIntermediario": true,
      "intermediarioNome": "NE",
      "possuiPatrono": true,
      "patronoNome": "",
      "negociadorEmail": "pedro.costa@pjus.com.br",
      "dadosCalculoProposta": {
          "adiantamento": 0,
          "anoVencimento": 2024,
          "calculoHunterEditouImpostoRenda": false,
          "comissaoXp": 0,
          "controlePreValoresXp": 0,
          "dataAceitePreProposta": "2025-03-20T00:00:00Z",
          "dataAceiteProposta": "2025-04-01T00:00:00Z",
          "dataAlteracaoProposta": "2025-04-24T00:00:00Z",
          "dataAutuacao": "2025-04-24T00:00:00Z",
          "dataEc": "2025-04-24T00:00:00Z",
          "dataExpedicao": "2025-04-24T00:00:00Z",
          "dataFimFormacao": "2025-04-24T00:00:00Z",
          "dataInicioFormacao": "2025-04-24T00:00:00Z",
          "dataLiquidacao": "2022-02-03T00:00:00Z",
          "dataRegistro": "2023-10-20T00:00:00Z",
          "dataUltimaAtualizacao": "2025-04-24T00:00:00Z",
          "descontoPrevidencia": 15,
          "honorarios": 0,
          "id": 1731764,
          "idImpostoDeRenda": 2,
          "idResumo": "4347a890-e1a5-4f76-972e-4e4a7fcd0acc",
          "idTipoPrevidencia": 0,
          "idUsuarioAcaoFinalXp": 11357,
          "idUsuarioAcaoXp": 0,
          "idUsuarioUltimaAtualizacao": 10639,
          "indiceFatorDeAjuste": 20,
          "outrasDespesas": 0,
          "percentualAdquirido": 33.4,
          "percentualHonorarioAdvogado": 20,
          "preComissaoXp": 2,
          "prePropostaXp": 0,
          "preValoresXpAprovado": false,
          "preValoresXpRejeitado": false,
          "previdencia": 0,
          "propostaXp": 0,
          "retencao": 0,
          "tabelaMaximaUltimoCalculo": 3340,
          "tipoDescontoPrevidencia": 0,
          "tipoImpostoDeRenda": 2,
          "tributo": 0,
          "valorContraProposta": 0,
          "valorEc": 0,
          "valoresXpAprovado": false,
          "valoresXpRejeitado": false,
          "valorJuros": 12478.74,
          "valorMaximoTabela": 14253.37,
          "valorMinimoTabela": 8552.02,
          "valorPenhora": 0,
          "valorPrincipal": 40844.49,
          "valorProposta": 14253.37
  }
  }
}
      // testes assert
      }).then((response) => {
      // Verifique o status da resposta
      expect(response.status).to.eq(200);
      // Adicione mais verificações conforme necessário

    });
  });
})