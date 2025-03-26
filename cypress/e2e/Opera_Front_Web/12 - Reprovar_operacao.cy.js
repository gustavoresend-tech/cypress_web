    // DADO: que estou logado na plataforma Opera web PJUS
    // E: quero reprovar uma operação completa no workflow
    // QUANDO:entro no detalhamento da operação
    // E: clico no btn "Reprovar operacao"
    // E: confirmo a operacao no modal exibido
    // ENTAO: ???

    describe('Validar "Reprovar Operação"', () => {
        beforeEach(() => {
            // Realiza o login direcionado para SSO Microsoft
            cy.origin('https://login.microsoftonline.com', () => {
                // Volta para a origem, página pjus board
                cy.visit('https://opera.hml.pjus.com.br/board');
                cy.viewport(1280, 720);
                cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}{enter}`);
                cy.get('[name="passwd"]').type(`${Cypress.env('password')}{enter}`);
                cy.get('[type="submit"]').type('{enter}');
                cy.get('#idBtn_Back').click();
                // Aguarda 3 segundos
                 cy.wait(3000);

            });
        });
    
        it('Validar "Reprovar Operação"', () => {
            // Acessa o primeiro card dispoível no worlflow
            cy.contains('Teste-QA').click();
            // Clicar btn "Reprovar operacao"
            cy.get('#btn-abrir-modal-reprovar-operacao').click();
            cy.get('#observacao-reprovar-operacao').click().type('Teste reprovar operacao');
            cy.get('#btn-reprovar-operacao').click();
            cy.wait(3000); // Aguarda 3 segundos
            cy.get('#link-voltar-para-todas-etapas').click();
        });
    });    