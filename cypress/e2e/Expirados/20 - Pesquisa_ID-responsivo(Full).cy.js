// DADO: que estou logado na plataforma Opera, na página raiz "https://opera.hml.pjus.com.br/"
// E: a resolução configurada é: 360x640
// QUANDO: clico na opção "Consultar operação por ID"
// ENTAO: devo visualizar o campo "Encontre uma operação / Pesquise por ID"
// E: a pesquisa de um ID válido deve ser realizada com sucesso

describe('Validar Tela de pesquisa ID - Responsivo', () => {
    beforeEach(() => {
        cy.viewport(360, 640);
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit('https://opera.qa.pjus.com.br');
            // Configura exibição da tela de teste
            // Insere e-mail e submete
            cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}`, { force: true });
            cy.get('[type="submit"]').click();
            cy.wait(2000); // aguarda 1 segundos
            // Insere e-senha e submete
            cy.get('[name="passwd"]').type(`${Cypress.env('password')}`, { force: true });
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[type="submit"]').click();
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[id="idSIButton9"]').click();
            cy.wait(1000); // aguarda 1 segundos

        });
    });

    it('Validar Pesquisa ID - (360, 640)', () => {
        cy.viewport(360, 640);
        cy.wait(1000); // aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('20-Menu de pesquisa',{overwrite: true});

        // entrar no menu de pesquisa
        cy.get('.card > .btn').click();        
        cy.wait(2000); // aguarda 2 segundos
    });

    it('Validar Pesquisa ID - (375, 667)', () => {
        cy.viewport(360, 640);
        cy.wait(1000); // aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('20-Menu de pesquisa',{overwrite: true});

        // entrar no menu de pesquisa
        cy.get('.card > .btn').click();        
        cy.wait(2000); // aguarda 2 segundos
    });

    it('Validar Pesquisa ID - (360, 720)', () => {
        cy.viewport(360, 640);
        cy.wait(1000); // aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('20-Menu de pesquisa',{overwrite: true});

        // entrar no menu de pesquisa
        cy.get('.card > .btn').click();        
        cy.wait(2000); // aguarda 2 segundos
    });

    it('Validar Pesquisa ID - (375, 812)', () => {
        cy.viewport(360, 640);
        cy.wait(1000); // aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('20-Menu de pesquisa',{overwrite: true});

        // entrar no menu de pesquisa
        cy.get('.card > .btn').click();        
        cy.wait(2000); // aguarda 2 segundos
    });

    it('Validar Pesquisa ID - (411, 731)', () => {
        cy.viewport(360, 640);
        cy.wait(1000); // aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('20-Menu de pesquisa',{overwrite: true});

        // entrar no menu de pesquisa
        cy.get('.card > .btn').click();        
        cy.wait(2000); // aguarda 2 segundos
    });

    it('Validar Pesquisa ID - (768, 1024)', () => {
        cy.viewport(360, 640);
        cy.wait(1000); // aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('20-Menu de pesquisa',{overwrite: true});

        // entrar no menu de pesquisa
        cy.get('.card > .btn').click();        
        cy.wait(2000); // aguarda 2 segundos
    });

    it('Validar Pesquisa ID - (1366, 768)', () => {
        cy.viewport(360, 640);
        cy.wait(1000); // aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('20-Menu de pesquisa',{overwrite: true});

        // entrar no menu de pesquisa
        cy.get('.card > .btn').click();        
        cy.wait(2000); // aguarda 2 segundos
    });

    it('Validar Pesquisa ID - (1920, 1080)', () => {
        cy.viewport(360, 640);
        cy.wait(1000); // aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('20-Menu de pesquisa',{overwrite: true});

        // entrar no menu de pesquisa
        cy.get('.card > .btn').click();        
        cy.wait(2000); // aguarda 2 segundos
    });
});

