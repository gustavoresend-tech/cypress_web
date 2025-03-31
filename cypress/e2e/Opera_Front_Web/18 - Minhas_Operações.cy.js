    // DADO: que estou logado e preciso verificar as atividades da minha responsabilidade na plataforma Opera
    // QUANDO: clico na opção "Minhas Operações"
    // ENTAO: devo visualizar as atividades iniciadas por mim na plataforma Opera
    // E: preciso ter a opção de finalizar as atividades iniciadas

describe('Validar Menu Operações', () => {
    beforeEach(() => {
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit('https://opera.hml.pjus.com.br/board');
            cy.viewport(1280, 720);
            cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}`, { force: true });
            cy.get('[type="submit"]').click();
            cy.wait(2000);
            cy.get('[name="passwd"]').type(`${Cypress.env('password')}`, { force: true });
            cy.wait(2000);
            cy.get('[type="submit"]').click();
            cy.wait(2000);
            cy.get('[id="idSIButton9"]').click();
        });

    });
    it('Validar Menu Operações', () => {
        // entrar no menu de operações
        cy.get('.mx-2').click();       
        // aguarda 1 segundo
        cy.wait(1000);
        // clica na opção "Minhas Operações"
        cy.get(':nth-child(2) > .nav-link').click();
        // aguarda 1 segundo
        cy.wait(1000);
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