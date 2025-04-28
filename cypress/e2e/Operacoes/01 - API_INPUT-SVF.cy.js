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
      "nome": "Testes QA - (NAO USAR)",
      "documento": "22124270850",
      "dataNascimento": "1980-01-01T12:57:31.215Z",
      "nomePai": " ",
      "nomeMae": "MAURETE PALMA DE OLIVEIRA NETO",
      "tipoPessoa": 0,
      "estadoCivil": 1,
      "regimeBens": 1,
      "conjuge": "JECIENE ROCHA SANTOS OLIVEIRA",
      "telefone": "(73) 3202-2386",
      "email": "Teste-QA@teste.com.br",
      "logradouro": "RUA EDNA VIEIRA REZENDE",
      "numeroEndereco": 72,
      "bairro": "DEMOCRATA",
      "complemento": "Casa",
      "cep": "45570-000",
      "cidade": "Ipiaú",
      "estado": "BA",
      "banco": "Banco do Brasil S.A.",
      "codigoBanco": "001",
      "operacaoBancaria": "001",
      "agencia": "357",
      "agenciaDigito": "0",
      "conta": "35872",
      "contaDigito": "0",
      "tipoConta": "0",
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
      "sistemaExternoId": 1722444,
      "processo": "8049882-08.2022.8.05.0000",
      "precatorio": "0500073-46.2018.8.05.0105",
      "estadoSigla": "BA",
      "esfera": 2,
      "tribunalSigla": "TJBA",
      "vencimento": 2024,
      "enteDevedor": "MUNICIPIO DE BARRA DO ROCHA",
      "orgaoDevedor": "MUNICIPIO DE BARRA DO ROCHA",
      "dataAutuacao": "2022-02-03T12:57:31.215Z", //
      "tipoCredito": 1,
      "dataBase": "2022-02-03T12:57:31.215Z",
      "informacoesRecebimento": "",
      "naturezaCredito": "Alimentar",
      "numeroJuizo": "",
      "descritivoJuizo": "Vara de Fazenda Pública",
      "comarca": "Minas Gerais",
      "acaoColetiva": false,
      "valorFace": 5332323,
      "processoDepre": "",
      "processoSei": "",
      "senhaAcesso": "",
      "ec62": false,
      "operacaoCodigo": "MUNE5",
      "operacaoDescricao": "Municípios - Regime Especial - DIF 05 anos",
      "classificacaoOperacao": "2",
      "classificacaoTitular": "0",
      "nomeOrgaoPagador": "MUNICIPIO DE BARRA DO ROCHA",
      "percentualComissao": 6.5
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
      // Captura print para evidencia
      cy.screenshot('01 - API_VF_CNPJ',{overwrite: true});

      // Adicione mais verificações conforme necessário

    });
  });
})