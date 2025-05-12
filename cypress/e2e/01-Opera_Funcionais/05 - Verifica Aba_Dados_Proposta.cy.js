// DADO: que estou na página de detalhamento de uma operação
// QUANDO: clico na aba "Dados"
// E: Seleciono a opção "Proposta"
// ENTAO: devem ser exibidas os campos definidos para esse tela

// Definição de campos AQUI

//

describe('Verifica Campos Aba "PROPOSTA"', () => {
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

    // Validar "Edição de Dados - PROPOSTA'

    it('Verifica Campos Aba "PROPOSTA"', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

        // Clica aba dados/proposta
        cy.get('#dados-operacao-tab').click();
        cy.get('#btn-tab-dados-proposta').click();
        // Captura print para evidencia
        cy.screenshot('05-Aba Dados_Proposta',{overwrite: true});

        // Valida se os campos da aba proposta estão presentes

        // Data do aceite
        cy.get(':nth-child(1) > .d-flex > .text-secondary')
        .contains("Data do aceite");

        // Tabela
        cy.get('.col > .d-flex > .text-secondary')
        .contains("Tabela");

        // Negociador
        cy.get('.justify-content-between > :nth-child(3) > .d-flex > .text-secondary')
        .contains("Negociador");

        // Valor a vista
        cy.get('.col-12 > .text-3')
        .contains("Valor a vista");

        // Intermediário
        cy.get(':nth-child(1) > .background-2 > :nth-child(1) > .text-label')
        .contains("Intermediário");

        // Patrono
        cy.get(':nth-child(2) > .background-2 > :nth-child(1) > .text-label')
        .contains("Patrono");

        // Nome do intermediário
        cy.get(':nth-child(1) > .background-2 > .border-0 > .text-label')
        .contains("Nome do intermediário");

        // Nome do patrono
        cy.get(':nth-child(2) > .background-2 > .border-0 > .text-label')        
        .contains("Nome do patrono");

        // Pagamento
        cy.get('.col-12 > .table-responsive > .table > thead > tr > :nth-child(1)')
        .contains("Pagamento");

        // Valor
        cy.get('.col-12 > .table-responsive > .table > thead > tr > :nth-child(2)')
        .contains("Valor");

        // Data
        cy.get('.col-12 > .table-responsive > .table > thead > tr > :nth-child(3)')
        .contains("Data");

    });

});