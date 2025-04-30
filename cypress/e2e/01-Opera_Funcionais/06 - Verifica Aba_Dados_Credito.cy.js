// DADO: que estou logado e na pagina de detalhamento de um card/precatório
// QUANDO: clico na opção "Dados"
// E: Seleciono a opção "Crédito"
// ENTAO: devem ser exibidas os campos da aba Crédito

describe('Verifica Campos Aba "CRÉDITO"', () => {
    beforeEach(() => {
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit(Cypress.env('URL_OPERA') + '/board');
            // Configura exibição da tela de teste
            cy.viewport(1280, 720);
            // Insere e-mail e submete
            cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}`, { force: true });
            cy.get('[type="submit"]').click();
            cy.wait(2000); // aguarda 2 segundos
            // Insere e-senha e submete
            cy.get('#i0118').type(`${Cypress.env('password')}`, { force: true });
            cy.wait(2000); // aguarda 2 segundos
            cy.get('[type="submit"]').click();
            cy.wait(2000); // aguarda 2 segundos
            cy.get('[id="idSIButton9"]').click();
        });
    });

    // Validar "Edição de Dados - CRÉDITO'

    it('Verifica Campos Aba "CRÉDITO"', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

        // Clica aba dados/proposta
        cy.get('#dados-operacao-tab').click();
        cy.get('#btn-tab-dados-proposta').click();
        cy.wait(1000); // Aguarda 1 segundos
        cy.get('#btn-tab-dados-credito').click();
        // Captura print para evidencia
        cy.screenshot('06-Dados_Credito',{overwrite: true});

        // Valida se os campos da aba proposta estão presentes

        // Informações básicas

        // Precatório
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(2) > .text-label')
        .contains("Precatório");        

        // Processo
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(3) > .text-label')
        .contains("Processo");        

        // Valor de face
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(4) > .text-label')
        .contains("Valor de face");        

        // Esfera
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(5) > .text-label')
        .contains("Esfera");        

        // Tribunal
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(6) > .text-label')
        .contains("Tribunal");        

        // Tribunal onde tramita
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(7) > .text-label')
        .contains("Tribunal onde tramita");        

        // Vencimento
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(8) > .text-label')
        .contains("Vencimento");        

        // Expectativa de vencimento
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(9) > .text-label')
        .contains("Expectativa de vencimento");        

        // Ente devedor
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(10) > .text-label')
        .contains("Ente devedor");        

        // Orgão devedor
        cy.get(':nth-child(1) > .card > :nth-child(11) > .text-label')
        .contains("Orgão devedor");        

        // CNPJ do pagador
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(12) > .text-label')
        .contains("CNPJ do pagador");        

        // Tipo de crédito
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(13) > .text-label')
        .contains("Tipo de crédito");        

        // Processo originario
        cy.get(':nth-child(14) > .text-label')        
        .contains("Processo originário");        

        // Cessionário
        cy.get(':nth-child(15) > .text-label')
        .contains("Cessionário");        

        // Processo de conhecimento
        cy.get(':nth-child(16) > .text-label')
        .contains("Processo de conhecimento");        

        // processo de execução
        cy.get(':nth-child(17) > .text-label')
        .contains("Processo de execução");        

        // Advogado

        // Nome
        cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(1) > :nth-child(2) > .text-label')
        .contains("Nome");        

        // CPF
        cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(1) > :nth-child(3) > .text-label')
        .contains("CPF");        

        // OAB
        cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(1) > :nth-child(4) > .text-label')
        .contains("OAB");        

        // Datas

        // Distribuição
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .text-label')
        .contains("Distribuição");        

        // Citação
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .text-label')
        .contains("Citação");        

        // Trânsito em julgado
        cy.get(':nth-child(2) > :nth-child(4) > .text-label')
        .contains("Trânsito em julgado");        

        // Autuação do precatório
        cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(2) > :nth-child(5) > .text-label')
        .contains("Autuação do precatório");        

        // Data do protocolo
        cy.get(':nth-child(2) > :nth-child(6) > .text-label')
        .contains("Data do protocolo");           

        // Data base
        cy.get(':nth-child(2) > :nth-child(7) > .text-label')
        .contains("Data base");         

        // Penhora
        cy.get(':nth-child(2) > :nth-child(8) > .text-label')
        .contains("Penhora");        

        // Última movimentação
        cy.get(':nth-child(2) > :nth-child(9) > .text-label')
        .contains("Última movimentação");        

        // Outras informações

        // Informações para recebimento
        cy.get('.mb-4 > :nth-child(2) > .text-label')
        .contains("Informações para recebimento");

        // Natureza do crédito
        cy.get('.mb-4 > :nth-child(3) > .text-label')
        .contains("Natureza do crédito");        

        // Natureza da ação
        cy.get('.mb-4 > :nth-child(4) > .text-label')
        .contains("Natureza da ação");

        // Classificação da operação
        cy.get('.mb-4 > :nth-child(5) > .text-label')
        .contains("Classificação da operação");

        // Número do cumprimento de sentença
        cy.get('.mb-4 > :nth-child(6) > .text-label')
        .contains("Número do cumprimento de sentença");

        // Número do juízo
        cy.get('.mb-4 > :nth-child(7) > .text-label')
        .contains("Número do juízo");        

        // Descritivo do juízo
        cy.get('.mb-4 > :nth-child(8) > .text-label')
        .contains("Descritivo do juízo");        

        // Comarca/seção judiciária
        cy.get('.mb-4 > :nth-child(9) > .text-label')
        .contains("Comarca/seção judiciária");        

        // Classificação do titular
        cy.get('.mb-4 > :nth-child(10) > .text-label')
        .contains("Classificação do titular");        

        // Ação coletiva
        cy.get('.mb-4 > :nth-child(11) > .text-label')
        .contains("Ação coletiva");        

        // Processo DEPRE
        cy.get('.mb-4 > :nth-child(12) > .text-label')
        .contains("Processo DEPRE");        

        // Processo SEI
        cy.get('.mb-4 > :nth-child(13) > .text-label')
        .contains("Processo SEI");        

        // EC-62
        cy.get('.mb-4 > :nth-child(14) > .text-label')
        .contains("EC-62");        

        // Dados de acesso
        cy.get('.mb-4 > :nth-child(15) > .text-label')
        .contains("Dados de acesso");        

    });
});