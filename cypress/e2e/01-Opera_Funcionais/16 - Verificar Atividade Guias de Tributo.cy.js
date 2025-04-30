// DADO: que estou na pagina de detalhamento de um card/precatório aba "Atividades"
// E: quero pesquisar por uma atividade
// QUANDO: clico no btn "Criar atividade"
// E: seleciono o campo de pesquisa
// E: preencho o conteúdo a ser pesquisado
// E: clico na lupa para pesquisar o conteúdo
// ENTAO: as atividades com o conteúdo pesquisado devem ficar disponíveis para seleção

    describe('Verificar Atividade "Guias de Tributo"', () => {
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
    
        it('Verificar Atividade "Guias de Tributo"', () => {
            // Acessa o primeiro card dispoível no worlflow
            cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();
        
            // Verificar atividade "Guias de tributo"
            cy.get('[style="max-width: calc(100vw - 320px);"]').should('exist')
            .contains('Guias de tributo');

            // Verifica atividade "Guias de tributo"
            cy.get('[style="max-width: calc(100vw - 320px);"]').should('exist')
            .contains('tributo').click();
            cy.get('#btn-iniciar-atividade').click();

            // Captura print para evidencia
            cy.screenshot('16 - Tela Guias de Tributo',{overwrite: true});
            cy.wait(1000); // Aguarda 1 segundos

            // Verifica campo "Proposta"
            cy.get('.background-2 > .row').should('exist')
            .contains('Proposta');
            // Verifica campo "TIR"
            cy.get('.background-2 > .row').should('exist')
            .contains('TIR');
            // insere valor no campo "Valor total dos tributos (adiantamento)"
            cy.get('.row > :nth-child(4) > .form-control').clear().type('100');
            // Finaliza Atividade
            cy.get('#btn-abrir-modal-aprovar-conferencia-final').click();
            // Preenche Modal de Observação
            cy.get('#observacao-aprovar-atividade-guias-tributo').type('Teste-QA');
            cy.get('#btn-aprovar-atividade-guias-tributo').click();
            cy.wait(1000); // Aguarda 1 segundos

        });
    });    