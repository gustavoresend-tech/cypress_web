// DADO: que estou logado e preciso verificar as atividades iniciadas por mim na plataforma Opera
// QUANDO: clico na opção "Minhas Operações"
// ENTAO: devo visualizar as minhas atividades na plataforma Opera
// E: preciso ter a opção de finalizar as atividades iniciadas

describe('Validar Tela de pesquisa ID - Resonsivo', () => {
    beforeEach(() => {
        cy.viewport(375, 667);
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit('https://opera.hml.pjus.com.br');
            // Configura exibição da tela de teste
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

    it('Validar Tela de pesquisa ID - Resonsivo 04', () => {
        // entrar no menu de pesquisa
        cy.get('.card > .btn').click();        
        cy.wait(2000); // aguarda 2 segundos
    });

});