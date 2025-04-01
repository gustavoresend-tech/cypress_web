    // DADO:
    // E:
    // QUANDO:
    // E:
    // E:
    // E:
    // ENTAO:

    describe('Validar "Tela de Calculos"', () => {
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
    
        it('Validar "Tela de Cálculo"', () => {
            // Acessa o primeiro card dispoível no worlflow
            cy.contains('Teste-QA').click();
            cy.screenshot('09-Atividades selecionada',{overwrite: true});

            // Clicar aba Calculo
            cy.get('#calculo-operacao-tab').click();
            cy.wait(3000); // Aguarda 3000 milissegundos (3 segundos)
            // Verifica conteúdo da página
            //cy.get(':nth-child(2) > :nth-child(1) > .card > .row > .col > .text-2').contains('Ofício');
            //cy.wait(3000); // Aguarda 3000 milissegundos (5 segundos)
            //cy.get(':nth-child(2) > :nth-child(2) > .card > .row > .col > .text-2').contains('Cálculo PJUS');
            cy.screenshot('11-Tela_calculo',{overwrite: true});
            // cy.get(':nth-child(1) > .card > .text-4').contains('Ano de vencimento');
            // cy.get(':nth-child(3) > .card > .text-4').contains('Percentual Honorários');
            // cy.get(':nth-child(4) > .card > .text-4').contains('Número de Meses');
            // cy.get(':nth-child(5) > .card > .text-4').contains('Número de Meses RRAo');
            // cy.get(':nth-child(6) > .card > .text-4').contains('Valor de face PJUS');
            //cy.wait(3000); // Aguarda 3 segundos
        });
    });    