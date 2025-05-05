// DADO: que preciso inserir um novo card de precatório na esteira da aplicação Opera
// E: esse precatório NAO tem valor fututo e tem input de CPF
// QUANDO: envio a requisição com os dados de body preebchidos corretamente
// ENTAO: o response.status deve retornar (200 OK); 
// E: o card deve ser inserido no inicio da esteira conforme os dados incluidos no body


// Descreve o bloco de testes para a API de Operação - Valor Futuro CNPJ
describe('Input Default - API Operacao - Sem Valor Futuro', () => {
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
      "nome": "Teste-QA-Funcionais - (NAO USAR)",
      "documento": "87215876632",
      "dataNascimento": "1980-01-01T12:57:31.215Z",
      "nomePai": " Pai do titular ",
      "nomeMae": "Mae do titular",
      "tipoPessoa": 1,
      "estadoCivil": 1,
      "regimeBens": 1,
      "conjuge": "Teste Conjugue",
      "telefone": "(73) 3202-2386",
      "email": "Teste-QA@teste.com.br",
      "logradouro": "RUA dos códigos",
      "numeroEndereco": 100,
      "bairro": "Deploy",
      "complemento": "Casa",
      "cep": "45570-000",
      "cidade": "Belo Horizonte",
      "estado": "MG",
      "banco": "Santander",
      "codigoBanco": "033",
      "operacaoBancaria": "001",
      "agencia": "2960",
      "agenciaDigito": "0",
      "conta": "03029746",
      "contaDigito": "6",
      "tipoConta": "1",
      "cidadeNascimento": "Belo Horizonte",
      "estadoNascimento": "MG",
      "cartorioNascimento": "1º Cartório",
      "livroNascimento": "A123",
      "termoNascimento": "4567",
      "paginaNascimento": "89",
      "nomeConjuge": "Teste Conjugue",
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
      "CpfAdvogado": "44078120016",
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
      "tabelaPrecoCodigo": "TRF1F",
      "cessionario": "Abeto",
      "possuiIntermediario": true,
      "intermediarioNome": "NE",
      "possuiPatrono": true,
      "patronoNome": "Teste Patrono",
      "negociadorEmail": "pedro.costa@pjus.com.br",
      "dadosCalculoProposta": {
          "adiantamento": 0,
          "anoVencimento": 2026,
          "calculoHunterEditouImpostoRenda": false,
          "comissaoXp": 0,
          "controlePreValoresXp": 0,
          "dataAceitePreProposta": "2025-03-20T00:00:00Z",
          "dataAceiteProposta": "2025-04-01T00:00:00Z",
          "dataAlteracaoProposta": "2025-04-24T00:00:00Z",
          "dataAutuacao": "2025-04-24T00:00:00Z",
          "dataEc": null,
          "dataExpedicao": "2025-04-24T00:00:00Z",
          "dataFimFormacao": "2025-04-24T00:00:00Z",
          "dataInicioFormacao": "2025-04-24T00:00:00Z",
          "dataLiquidacao": "2022-02-03T00:00:00Z",
          "dataRegistro": "2023-10-20T00:00:00Z",
          "dataUltimaAtualizacao": "2025-04-24T00:00:00Z",
          "descontoPrevidencia": 0,
          "honorarios": 15,
          "id": 1731764,
          "idImpostoDeRenda": 0,
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
          "previdencia": 15,
          "propostaXp": 0,
          "retencao": 0,
          "tabelaMaximaUltimoCalculo": 3340,
          "tipoDescontoPrevidencia": 0,
          "tipoImpostoDeRenda": 0,
          "tributo": 1,
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