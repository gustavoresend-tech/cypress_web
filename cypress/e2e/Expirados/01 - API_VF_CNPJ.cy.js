// DADO: que preciso inserir um novo card de precatório na esteira da aplicação Opera
// E: esse precatório precisa ter valor futuro com input de CNPJ
// QUANDO: envio a requisição com os dados de body preenchidos corretamente
// ENTAO: o response.status deve retornar (200 OK); 
// E: o card deve ser inserido no inicio da esteira conforme os dados incluídos no body

// Descreve o bloco de testes para a API de Operação - Valor Futuro CNPJ
describe('API Operacao - Valor Futuro CNPJ', () => {
  // Descreve o teste individual para a API
    it('Validar API Operacao - Valor Futuro CNPJ', () => {
      // Realiza uma requisição POST para a API
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
        body: {  // Corpo da requisição
          // Informacoes do titular do crédito
          "titular": { 
            "nome": "Teste-QA - NAO USAR (Automação)",
            "documento": "35.490.557.0001-32",
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
            "numeroEndereco": 300,
            "bairro": "Centro",
            "complemento": "Sobrado",
            "cep": "01010-000",
            "cidade": "Belo Horizonte",
            "estado": "MG",
            "banco": "Caixa Econômica Federal",
            "agencia": "12364",
            "agenciaDigito": "0",
            "conta": "5678908",
            "contaDigito": "0",
            "DataCasamento": "2013-06-15T12:57:31.215Z",
            "CidadeCasamento": "SAO_PAULO",
            "EstadoCasamento": "SP",
            "CartorioCasamento": "29-oficial-de-registro-civil-santo-amaro-sao-paulo",
            "LivroCasamento": "266",
            "TermoCasamento": "79038",
            "PaginaCasamento": "155"
              },
          // Informacoes do credito precatorio
          "credito": {
            "processo": "51655552-1",
            "precatorio": "2023-0001123456",
            "estadoSigla": "MG",
            "esfera": 1,
            "tribunalSigla": "TRF1",
            "vencimento": 2026,
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
            "operacaoCodigo": "TRF1F",
            "operacaoDescricao": "TRF1F Comum",
            "classificacaoOperacao": 1
          },
          // Informações da proposta do precatorio
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
            "tabelaPrecoCodigo": "TRF1F",
            "cessionario": 1,
            "possuiIntermediario": true,
            "intermediarioNome": "Advogado",
            "possuiPatrono": true,
            "patronoNome": "Dr. Marlyn Manson",
            "negociadorEmail": "Testes-QA@pjus.com.br"
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