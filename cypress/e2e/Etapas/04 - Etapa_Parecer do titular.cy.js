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
            cy.visit(Cypress.env('URL_OPERA') + '/board');
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
        cy.contains('Teste-QA-Workflow').click();
        cy.screenshot('07-Etapa-Parecer de cedente_INICIO',{overwrite: true});

        // APROVACAO ATIVIDADES DA ETAPA: "Parecer do titular"

        // // clicar em "Validação bancária"
        // cy.contains('Validação bancária').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // Verifica existência dos campos | ENVIO, STATUS, RETORNO
        // cy.get('#atividades > .card > :nth-child(3) > :nth-child(1) > div > :nth-child(1)')
        // .contains("ENVIO");
        // cy.get(':nth-child(2) > [style="min-width: 200px"] > :nth-child(1)')
        // .contains("STATUS");
        // cy.get('.card > :nth-child(3) > .col > .m-0')
        // .contains("RETORNO");
        // // Finaliza Atividade
        // cy.get('#btn-finalizar-atividade').click();
        // //Preenche modal de observação
        // cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        // cy.get('#btn-aprovar-atividade').click();
        // cy.wait(1000); // Aguarda 1 segundos
        // // Captura print para evidencia
        // cy.screenshot('04 -Análise de compliance',{overwrite: true});
        // cy.wait(1000); // Aguarda 1 segundos

        // clicar em "Compliance interno"
        cy.contains('Compliance interno').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();

        // clicar em "Compliance externo"
        cy.contains('Compliance externo').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();


        // clicar em "Documentoscopia"
        cy.contains('Documentoscopia').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();

        });
    });