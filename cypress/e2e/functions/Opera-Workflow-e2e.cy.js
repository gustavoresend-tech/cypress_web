    // DADO: que preciso simular o workflow completo de um precatório na plataforma Opera
    // QUANDO: 
    // E: 
    // E: 
    // E: 
    // ENTAO: 
    // E: 

    describe('Validar Login SSO', () => {
        beforeEach(() => {
            // Realiza o login direcionado para SSO Microsoft
            cy.origin('https://login.microsoftonline.com', () => {
                // Volta para a origem, página pjus board
                cy.visit('https://opera.hml.pjus.com.br/board');
                cy.viewport(1280, 720);
                cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}`, { force: true });
                cy.get('[type="submit"]').click();
                cy.wait(1000);
                cy.get('[name="passwd"]').type(`${Cypress.env('password')}`, { force: true });
                cy.wait(1000);
                cy.get('[type="submit"]').click();
                cy.get('[id="idSIButton9"]').click();
            });    
        });

        it('Validar Login SSO', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA').click();
        cy.get('.card > .g-2')
        .invoke('text').then((text) => {
            cy.wrap(text).as('card');
            cy.log('@card');
            cy.contains('@card').click()
        })


        // clica em "Emissão de CNDs automáticas"
        cy.contains('Emissão de CNDs automáticas').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Aprovar"
        cy.get('#atividades > .btn').click();

        // clicar em "Emissão de CNDs manuais"
        cy.contains('Emissão de CNDs manuais').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();

        // clicar em "Atualização do registro civil"
        cy.contains('Atualização do registro civil').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();

        cy.get('#link-voltar-para-todas-etapas').click();
        cy.wait(3000);

        cy.contains('@card').click();

        });
    });