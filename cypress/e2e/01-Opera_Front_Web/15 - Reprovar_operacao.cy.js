// DADO: que estou logado na plataforma Opera web PJUS
// E: quero reprovar uma operação completa no workflow da esteira
// QUANDO: entro no detalhamento da operação
// E: clico no btn "Reprovar operação"
// E: confirmo a operação no modal exibido
// ENTAO: o card deve ser reprovado
// E: o card não poderá mais ser processado na esteira

    describe('Validar "Reprovar Operação"', () => {
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
    
        it('Validar "Reprovar Operação"', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA - NAO USAR (Automação)').click();

        // Clicar btn "Reprovar operacao"
        cy.get('#btn-abrir-modal-reprovar-operacao').click();
        cy.get('#observacao-reprovar-operacao').click().type('Teste reprovar operacao');
        cy.screenshot('15-Reprovar_Operacao',{overwrite: true});
        cy.get('#btn-reprovar-operacao').click();
        cy.wait(1000); // Aguarda 1 segundos
        //cy.get('#link-voltar-para-todas-etapas').click();

        // // Altera nome do card
        // cy.get('#dados-operacao-tab').click();
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-Operacao-Reprovada{enter}');
        // cy.wait(2000); // Aguarda 2 segundos
        // cy.get('#atividades-tab').click();
        
        });
    });    