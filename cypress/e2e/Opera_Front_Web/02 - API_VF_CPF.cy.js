describe('API Operacao - Valor Futuro', () => {
    it('Validar API Operacao - Valor Futuro', () => {
      cy.request({
        method: 'POST',
        url: 'https://opera.api.hml.pjus.com.br/api/V1/Operacoes',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: {
          "titular": {
            "nome": "Teste-QA - Cypress",
            "documento": "205.349.371-28",
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
            "estado": "MG",
            "banco": "Banco de Dados",
            "agencia": "12364",
            "contaDigito": "56789-0"
          },
          "credito": {
            "processo": "51655552-1",
            "precatorio": "2023-0001123456",
            "estadoSigla": "MG",
            "esfera": 1,
            "tribunalSigla": "TRF3",
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
            "comarca": "São Paulo",
            "classificacaoTitular": 1,
            "acaoColetiva": false,
            "valorFace": 6906780,
            "processoDepre": "DEPRE-2023-56789",
            "processoSei": "SEI-2023-098765",
            "senhaAcesso": "ABC123!@#",
            "ec62": true,
            "operacaoCodigo": "TRF1I",
            "operacaoDescricao": "TRF1 Comum",
            "classificacaoOperacao": 1
          },
          "proposta": {
            "valorProposta": 730264,
            "possuiValorFuturo": true,
            "valorFuturos": [
              {
                "valorOferecido": 730264,
                "prazo": "2026-06-30T12:57:31.215Z"
              },
              {
                "valorOferecido": 730264,
                "prazo": "2026-07-30T12:57:31.215Z"
              },
              {
                "valorOferecido": 730264,
                "prazo": "2026-08-30T12:57:31.215Z"
              }
            ],
            "dataAceiteProposta": "2025-03-13T12:57:31.215Z",
            "tabelaPrecoCodigo": "TRF1",
            "cessionario": 1,
            "possuiIntermediario": true,
            "intermediarioNome": "Advogado",
            "possuiPatrono": true,
            "patronoNome": "Dr. Marlyn Manson",
            "negociadorEmail": "Testes-QA@pjus.com.br"
          }
        }
      }).then((response) => {
        expect(response.status).to.eq(200);        
        // Adicione mais verificações conforme necessário
      });
    });
  })