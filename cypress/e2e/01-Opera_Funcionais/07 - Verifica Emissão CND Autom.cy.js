// DADO: que estou na pagina de detalhamento de um card/precatório aba "Atividades"
// E: quero pesquisar por uma atividade
// QUANDO: clico no btn "Criar atividade"
// E: seleciono o campo de pesquisa
// E: preencho o conteúdo a ser pesquisado
// E: clico na lupa para pesquisar o conteúdo
// ENTAO: as atividades com o conteúdo pesquisado devem ficar disponíveis para seleção

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
            cy.get('[name="passwd"]').type(`${Cypress.env('password')}`, { force: true });
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

            // Iniciar atividades
            cy.get('#btn-iniciar-atividade').click();


            // Verifica se os campos: ENVIO, STATUS, RETORNO estão disponíveis
            cy.get('#atividades > .card').should('be.visible')
            .contains('ENVIO');
            cy.get('#atividades > .card').should('be.visible')
            .contains('STATUS');
            cy.get('#atividades > .card').should('be.visible')
            .contains('RETORNO');

            // Captura print para evidencia
            cy.screenshot('07-Verifica Emissão CND AUTOM',{overwrite: true});
            cy.wait(1000); // Aguarda 1 segundos

        });
    });    