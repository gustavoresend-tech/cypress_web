// DADO: que estou logado e na pagina de detalhamento de um precatório/lead
// QUANDO: clico na opção "Dados"
// ENTAO: devem ser exibidas as abas: Titular | Proposta | Crédito
// E: os campos da aba Proposta devem estar visíveis
// E: deve ser possível editar os dados
// E: deve ser possível salvar os dados editados

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
        cy.contains('Teste-QA-Titular_OK').click();
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

        // Altera nome do card
        cy.get('#dados-operacao-tab').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-Proposta_OK{enter}');
        cy.wait(2000); // Aguarda 2 segundos
        cy.get('#atividades-tab').click();

    });

});