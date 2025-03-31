    // DADO: que preciso acessar a plataforma Opera web PJUS
    // QUANDO: acesso o link: https://opera.hml.pjus.com.br/board 
    // E: a pagina for direcionada para o login Microsoft
    // E: o email correto for inserido
    // E: a senha correta for inserida
    // ENTAO: o acesso deve ser realizado com sucesso
    // E: a página inicial exibida conforme default

describe('Validar Login SSO', () => {
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
    it('Validar Login SSO', () => {
        // Verifica pagina inicial
        cy.screenshot('00-Apos_Login',{overwrite: true});
        //cy.url().should('contain', '/opera.hml.pjus.com.br/board');
        cy.wait(1000);
    });
});