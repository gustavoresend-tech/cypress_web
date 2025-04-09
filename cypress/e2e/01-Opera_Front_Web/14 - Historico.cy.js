// DADO: que estou logado e na pagina de detalhamento de um precatório/lead
// QUANDO: clico na aba "Histórico"
// ENTAO: deve ser exibida tela com informações do histórico das ações realizadas no card até o momento
// E: as entradas devem estar separadas por data, usuário mais a atividade realizada

    describe('Validar "Histórico"', () => {
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

    it('Validar aba "Histórico', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Upload-arq_OK').click();

        // Clicar na aba "Histórico"
        cy.get('#historico-operacao-tab').click();
        cy.screenshot('06-Histórico',{overwrite: true});
        
        // Altera nome do card
        cy.get('#dados-operacao-tab').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-Historico_OK{enter}');
        cy.wait(2000); // Aguarda 2 segundos
        cy.get('#atividades-tab').click();

    });
});