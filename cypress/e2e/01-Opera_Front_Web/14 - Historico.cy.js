// DADO: que estou logado na pagina de detalhamento de um card/precatório
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
        cy.contains('Teste-QA - NAO USAR (Automação)').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Clicar na aba "Histórico"
        cy.get('#historico-operacao-tab').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('14-Histórico',{overwrite: true});      

    });
});