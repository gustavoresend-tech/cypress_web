    
    // DADO: que estou na pagina de detalhamento de um precatório/lead
    // QUANDO: clico na opção "Dados"
    // ENTAO: devem ser exibidas as abas: Titular | Proposta | Crédito
    // E: os campos de cada aba devem ser exibidos
    // E: deve ser possível editar os dados
    // E: deve ser possivel salvar os dados editados

describe('Validar Edição de Dados - PROPOSTA', () => {
    beforeEach(() => {
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Aguarda 3 segundos
            cy.wait(3000);
            // Volta para a origem, página pjus board
            cy.visit('https://opera.hml.pjus.com.br/board');
            cy.viewport(1280, 720);
            cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}{enter}`);
            cy.get('[name="passwd"]').type(`${Cypress.env('password')}{enter}`);
            cy.get('[type="submit"]').type('{enter}');
            cy.get('#idBtn_Back').click();
        });
    });

    // Validar "Edição de Dados - PROPOSTA'

    it('Validar Edição de Dados - PROPOSTA', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA').click();
        // Acessa aba dados/proposta
        cy.get('#dados-operacao-tab').click();
        cy.get('#btn-tab-dados-proposta').click();
        cy.wait(3000); // Aguarda 3000 milissegundos (3 segundos)
        cy.get(':nth-child(1) > :nth-child(2) > .form-select').select('Não', { force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .form-select').select('Sim', { force: true });
        cy.wait(3000); // Aguarda 3000 milissegundos (3 segundos)
        cy.get('.mt-3 > :nth-child(2) > :nth-child(2) > .form-select').select('Não', { force: true });
        cy.get('.mt-3 > :nth-child(2) > :nth-child(2) > .form-select').select('Sim', { force: true });
        cy.get('.mt-3 > :nth-child(1) > :nth-child(3) > .form-control').click().clear().type('Testado', { force: true });
        cy.get('.mt-3 > :nth-child(2) > :nth-child(3) > .form-control').click().clear().type('Testado', { force: true });
        cy.screenshot('03-Edicao_Proposta',{overwrite: true});
        cy.get('#btn-salvar-dados-editados').click();
    });

});