    
    // DADO: que estou na pagina de detalhamento de um precatório/lead
    // QUANDO: clico na aba "Histórico"
    // ENTAO: deve ser exibida tela com histórico das ações realizadas no card até o momento
    // E: as entradas devem estar separadas por data

    describe('Validar "Histórico"', () => {
    beforeEach(() => {
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit('https://opera.hml.pjus.com.br/board');
            cy.viewport(1280, 720);
            cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}{enter}`);
            cy.get('[name="passwd"]').type(`${Cypress.env('password')}{enter}`);
            cy.get('[type="submit"]').type('{enter}');
            cy.get('#idBtn_Back').click();
        });
    });

    it('Validar aba "Histórico', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA').click();

        // Clicar na aba "Histórico"
        cy.get('#historico-operacao-tab').click();
        cy.screenshot('06-Histórico',{overwrite: true});        
    });
});