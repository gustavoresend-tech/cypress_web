// DADO: que estou na pagina de detalhamento de uma operação
// E: preciso verificar a atividade da etapa: Conferência inicial
// QUANDO: clico nas respectivas atividades
// E: clico no btn "Iniciar" exibido
// ENTAO: a atividade deve ser iniciada
// E: os btn´s "Finalizar" e "Reprovar" DEVEM ser exibidos
// E: a atividade precisa ser finaliza com sucesso

    describe('Verifica Etapa Conferência Inicial', () => {
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
    
        it('Verifica Etapa Conferência Inicial', () => {
            // Acessa o primeiro card dispoível no worlflow
            cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();
            
            // Verifica se a atividade "Atualização do registro civil" está disponível e Inicia
            cy.get('[style="max-width: calc(100vw - 320px);"]').should('exist')
            .contains('Atualização do registro civil').click();
            cy.get('#btn-link-voltar-para-listagem-atividades > .d-flex > ds-icon').click();
            cy.wait(1000); // aguarda 1 segundos

            // Verifica se a atividade "Conferência inicial" está disponível e Inicia
            cy.get('[style="max-width: calc(100vw - 320px);"]').should('exist')
            .contains('Conferência inicial').click();

            cy.get('#btn-iniciar-atividade').click();
            cy.get('#btn-finalizar-atividade').click();
            cy.get('#observacao-aprovar-atividade').type('Teste-QA');
            cy.get('#btn-aprovar-atividade').click();
            
            // // Verifica se a atividade "Emissão de CNDs" está disponível e Inicia
            // cy.get('[style="max-width: calc(100vw - 320px);"]').should('exist')
            // .contains('Emissão de CNDs').click();
            // cy.get('#btn-iniciar-atividade').click();
            // cy.get('#btn-finalizar-atividade').click();
            // cy.get('#observacao-aprovar-atividade').type('Teste-QA');
            // cy.get('#btn-aprovar-atividade').click();

            cy.get('#btn-abrir-modal-pular-etapa').click();
            cy.wait(1000); // Aguarda 1 segundos
            cy.get('#btn-avancar-etapa').click();   

            // Captura print para evidencia
            cy.screenshot('08-Etapa Conferência Inicial',{overwrite: true});
            cy.wait(1000); // Aguarda 1 segundos

        });
    });    