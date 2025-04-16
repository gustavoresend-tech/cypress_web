// DADO: que preciso acessar a plataforma Opera web
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
            // Configura exibição da tela de teste
            cy.viewport(1280, 720);
            // Insere e-mail e submete
            cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}`, { force: true });
            cy.wait(1000); // aguarda 1 segundo
            // Captura print para evidencia
            cy.screenshot('05-Usuario_email',{overwrite: true});
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
    it('Validar Login SSO', () => {
        // Verifica pagina inicial
        // Captura print para evidencia
        cy.screenshot('05-Apos_Login',{overwrite: true});
    });
});