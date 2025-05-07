// DADO: que estou na pagina de detalhamento de um card/precatório aba "Atividades"
// E: quero pesquisar por uma atividade
// QUANDO: clico no btn "Criar atividade"
// E: seleciono o campo de pesquisa
// E: preencho o conteúdo a ser pesquisado
// E: clico na lupa para pesquisar o conteúdo
// ENTAO: as atividades com o conteúdo pesquisado devem ficar disponíveis para seleção

    describe('Verificar Atividade "Pagamento Titular"', () => {
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
    
        it('Verificar Atividade "Pagamento Titular"', () => {
            // Acessa o primeiro card dispoível no worlflow
            cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();
        
            // Verificar atividade "Pagamento Titular"
            cy.get('[style="max-width: calc(100vw - 320px);"]').should('exist')
            .contains('Pagamento do titular').click();

            // Verifica campos
            cy.get('#atividades > .card > :nth-child(3) > :nth-child(1) > div > :nth-child(1)')
            .contains("ENVIO");
            cy.get(':nth-child(2) > [style="min-width: 200px"] > :nth-child(1)')
            .contains("STATUS");
            cy.get('.card > :nth-child(3) > .col > .m-0')
            .contains("RETORNO");

            // Captura print para evidencia
            cy.screenshot('26 - Pagamento Titular',{overwrite: true});
            cy.wait(1000); // Aguarda 1 segundos

        });
    });    