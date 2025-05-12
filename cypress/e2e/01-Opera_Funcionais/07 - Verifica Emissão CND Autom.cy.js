// DADO: que estou na pagina de detalhamento de uma operação
// E: preciso verificar a atividade: Emissão CND Autom.
// QUANDO: clico na respectiva atividade
// ENTAO: a tela com detalhes da atividade dever ser exibida
// E: o btn "Iniciar" NAO dever ser exibido
// E: os campos: ENVIO, STATUS, RETORNO devem estar visíveis

    describe('Verifica Emissão CND Autom.', () => {
        beforeEach(() => {
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit(Cypress.env('URL_OPERA') + '/board');
            // Configura exibição da tela de teste
            cy.viewport(1280, 720);
            // Insere e-mail e submete
            cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}`, { force: true });
            cy.get('[type="submit"]').click();
            cy.wait(2000); // aguarda 2 segundos
            // Insere e-senha e submete
            cy.get('#i0118').type(`${Cypress.env('password')}`, { force: true });
            cy.wait(2000); // aguarda 2 segundos
            cy.get('[type="submit"]').click();
            cy.wait(2000); // aguarda 2 segundos
            cy.get('[id="idSIButton9"]').click();
            });
        });
    
        it('Verifica Emissão CND Autom.', () => {
            // Acessa o primeiro card dispoível no worlflow
            cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

            // Verifica se a atividade "Emissão CND Autom" está disponível e clica
            cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
            .contains('Emissão de CNDs automáticas').click();

            // Verifica se os campos: ENVIO, STATUS, RETORNO estão disponíveis
            cy.get('#atividades > .card').should('be.visible')
            .contains('ENVIO');
            cy.get('#atividades > .card').should('be.visible')
            .contains('STATUS');
            cy.get('#atividades > .card').should('be.visible')
            .contains('RETORNO');

            // Captura print para evidencia
            cy.screenshot('07-Atividade Emissão CND AUTOM',{overwrite: true});
            cy.wait(1000); // Aguarda 1 segundos

            // Voltar para atividades
            cy.get('#btn-link-voltar-para-listagem-atividades > .d-flex > ds-icon').click();


        });
    });    