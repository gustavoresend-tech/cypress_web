    // DADO: que preciso simular o workflow completo de um precatório na plataforma Opera
    // E: avançar individualmente as etapas para validação do fluxo
    // QUANDO: entro no detalhamento de um card
    // E: aprovo as atividades da etapa: Pagamento
    // ENTAO: o card deve ser finalizado


    describe('Validar etapa: "Pagamento"', () => {
        beforeEach(() => {
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit('https://opera.hml.pjus.com.br/board');
            // Configura exibição da tela de teste
            cy.viewport(1280, 800);
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

        // INICIO DOS TESTES

        it('Validar etapa: "Pagamento', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA-Pagamento').click();
        cy.screenshot('16-Teste-QA-Pagamento_INICIO',{overwrite: true});

        // APROVACAO ATIVIDADES DA ETAPA: "Pagamento"

        // clicar em "Pagamento das guias de débito do cedente"
        cy.contains('Pagamento das guias de débito do cedente').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();

        // clicar em "Pagamento do cedente"
        cy.contains('Pagamento do cedente').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();

        // Clicar Dados/Titular
        cy.get('#dados-operacao-tab').click();
        cy.wait(2000); // Aguarda 2 segundos

        // Altera nome do card
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-FINALIZADO{enter}');
        cy.wait(2000); // Aguarda 2 segundos
        cy.get('#atividades-tab').click();
        cy.screenshot('16-Teste-QA-Pagamento_FIM',{overwrite: true});

        });
    });