// DADO: que estou logado na página raiz https://opera.hml.pjus.com.br/
// E: preciso verificar as atividades iniciadas por mim na plataforma Opera
// QUANDO: clico na opção "Minhas Operações"
// ENTAO: devo visualizar as minhas atividades na plataforma Opera
// E: preciso ter a opção de finalizar as atividades iniciadas

describe('Validar Menu Operações', () => {
    Cypress.config('pageLoadTimeout', 15000);
    beforeEach(() => {
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit('https://opera.qa.pjus.com.br/board');
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
    it('Validar Menu Operações', () => {
        // entrar no menu de operações
        cy.get('.mx-2').click();       
        cy.wait(1000); // aguarda 1 segundo
        // clica na opção "Minhas Operações"
        cy.get(':nth-child(2) > .nav-link').click();
        cy.wait(5000); // aguarda 5 segundos

        // aguarda todos elementos da página carregarem
        cy.window().its('document').should('have.property', 'readyState', 'complete');
        // verifica se a url da página carregada esta conforme esperado
        cy.url().should('contain', 'https://opera.hml.pjus.com.br/board/operador');
        // aguarda 1 segundo
        cy.wait(1000);
        // Captura print para evidencia
        cy.screenshot('18-Minhas_Operacoes',{overwrite: true});
        // aguarda 1 segundo
        cy.wait(1000);

        // entrar no menu de operações
        cy.get('.mx-2').click();       
        // aguarda 1 segundo
        cy.wait(1000);
        // clica na opção "Todas Operações"
        cy.get(':nth-child(1) > .nav-link').click();
        // aguarda 1 segundo
        cy.wait(1000);
    
    });
});