// DADO: que estou logado e na pagina de detalhamento de um card/precatório
// QUANDO: clico na opção "Dados"
// E: Seleciono a opção "Proposta"
// ENTAO: devem ser exibidas os campos da aba Proposta

describe('Validar Edição de Dados - PROPOSTA', () => {
    beforeEach(() => {
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit('https://opera.hml.pjus.com.br/board');
            // Configura exibição da tela de teste
            cy.viewport(1280, 720);
            // Insere e-mail e submete
            cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}`, { force: true });
            cy.get('[type="submit"]').click();
            cy.wait(2000); // aguarda 2 segundos
            // Insere e-senha e submete
            cy.get('[name="passwd"]').type(`${Cypress.env('password')}`, { force: true });
            cy.wait(2000); // aguarda 2 segundos
            cy.get('[type="submit"]').click();
            cy.wait(2000); // aguarda 2 segundos
            cy.get('[id="idSIButton9"]').click();
        });
    });

    // Validar "Edição de Dados - PROPOSTA'

    it('Validar Edição de Dados - PROPOSTA', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA - NAO USAR (Automação)').click();

        // Clica aba dados/proposta
        cy.get('#dados-operacao-tab').click();
        cy.get('#btn-tab-dados-proposta').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('09-Dados_Proposta',{overwrite: true});

        // Valida se os campos da aba proposta estão presentes

        // Data do aceite
        cy.get(':nth-child(1) > .d-flex > .text-secondary')
        .contains("Data do aceite");
        cy.wait(1000); // Aguarda 1 segundos

        // Negociador
        cy.get('.justify-content-between > :nth-child(2) > .d-flex > .text-secondary')
        .contains("Negociador");
        cy.wait(1000); // Aguarda 1 segundos

        // Valor a vista
        cy.get('.col-12 > .text-3')
        .contains("Valor a vista");
        cy.wait(1000); // Aguarda 1 segundos

        // Intermediário
        cy.get('.mt-3 > :nth-child(1) > :nth-child(2) > .text-label')
        .contains("Intermediário");
        cy.wait(1000); // Aguarda 1 segundos

        // Patrono
        cy.get('.mt-3 > :nth-child(2) > :nth-child(2) > .text-label')
        .contains("Patrono");
        cy.wait(1000); // Aguarda 1 segundos

        // Nome do intermediário
        cy.get('.mt-3 > :nth-child(1) > :nth-child(3) > .text-label')
        .contains("Nome do intermediário");
        cy.wait(1000); // Aguarda 1 segundos

        // Nome do patrono
        cy.get('.mt-3 > :nth-child(2) > :nth-child(3) > .text-label')        
        .contains("Nome do patrono");
        cy.wait(1000); // Aguarda 1 segundos


    });

});