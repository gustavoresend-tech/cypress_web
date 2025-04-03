    // DADO: que preciso simular o workflow completo de um precatório na plataforma Opera
    // E: avançar individualmente as etapas para validação do fluxo
    // QUANDO: entro no detalhamento de um card
    // E: aprovo as atividades da etapa: Parecer do cedente
    // ENTAO: o card deve se mover para a etapa: Conferência final

    describe('Validar etapa: "Parecer do cedente"', () => {
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

        it('Validar etapa: "Parecer do cedente"', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA-Parecer do cedente').click();
        cy.screenshot('07-Etapa-Parecer de cedente_INICIO',{overwrite: true});

        // APROVACAO ATIVIDADES DA ETAPA: "Parecer do cedente"

        // clicar em "Parecer do cedente"
        cy.contains('Pendente').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        cy.get('#atividades > .btn').click();
        cy.wait(2000); // aguarda 2 segundos

        // Clicar Dados/Titular
        cy.get('#dados-operacao-tab').click();
        cy.wait(2000); // Aguarda 2 segundos

        // Altera nome do card
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-Conferência final{enter}');
        cy.wait(2000); // Aguarda 2 segundos
        cy.get('#atividades-tab').click();
        cy.screenshot('07-Etapa-Parecer do cedente_FIM',{overwrite: true});

        });
    });