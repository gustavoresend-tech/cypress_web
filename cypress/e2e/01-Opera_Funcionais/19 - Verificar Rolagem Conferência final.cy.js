// DADO: que estou logado na plataforma precisando operar a esteira para realização do cálculo
// QUANDO: acesso o detalhamento do cliente / lead
// E: aprovo as atividades de cada etapa
// ENTAO: a atividade "Cáclculo" deverá estar disponível na etapa " Providências jurídicas"

        describe('Validar rolagem para " Providências jurídicas"', () => {
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

    it('Validar rolagem para " Providências jurídicas"', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();


            // Verifica se a atividade "Ligação de confirmação" está disponível e clica
            cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
            .contains('Ligação de confirmação').click();
            cy.get('#btn-iniciar-atividade').click();
            // insere arquivo obrigatório
            cy.get('#btn-upload-file-input-arquivo-ligacao-confirmacao-label').selectFile('Teste_Upload.pdf');
            cy.get('#btn-enviar-arquivo-ligacao-confirmacao').click();
            // Finaliza atividade
            cy.get('#btn-abrir-modal-aprovar-atividade-personalizada').click();
            cy.get('#observacao-modal-aprovar-atividade-personalizada').type('Teste-QA');
            cy.get('#btn-aprovar-modal-aprovar-atividade-personalizada').click();

            // Verifica se a atividade "Certificado digital" está disponível e clica
            cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
            .contains('Certificado digital').click();
            cy.get('#btn-iniciar-atividade').click();
            // Finaliza atividade
            cy.get('#btn-finalizar-atividade').click();
            cy.get('#observacao-aprovar-atividade').type('Teste-QA');
            cy.get('#btn-aprovar-atividade').click();

            // Clica btn "Pular Etapa"
            cy.get('#btn-abrir-modal-pular-etapa').click();
            cy.wait(1000); // Aguarda 1 segundos
            cy.get('#btn-avancar-etapa').click();

            // Verifica se a atividade "Aprovação do titular" está disponível e Inicia
            cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
            .contains('Aprovação do titular').click();
            cy.get('#btn-iniciar-atividade').click();
            // Finaliza atividade
            cy.get('#btn-finalizar-atividade').click();
            cy.get('#observacao-aprovar-atividade').type('Teste-QA');
            cy.get('#btn-aprovar-atividade').click();

            //Verifica se a atividade "Última movimentação processual" está disponível e clica
            cy.get('[style="max-width: calc(100vw - 320px);"]').should('exist')
            .contains('Última movimentação processual').click();
            cy.get('#btn-iniciar-atividade').click();
            // insere data no campo: Data da ultima movimentação no momento do protocolo
            // Finaliza atividade
            cy.get('#btn-abrir-modal-aprovar-atividade-personalizada').click();
            cy.get('#observacao-modal-aprovar-atividade-personalizada').type('Teste-QA');
            cy.get('#btn-aprovar-modal-aprovar-atividade-personalizada').click();

            // Captura print para evidencia
            cy.screenshot('16-Rolagem Parecer do Titular',{overwrite: true});
            cy.wait(1000); // Aguarda 1 segundos           


    });
});