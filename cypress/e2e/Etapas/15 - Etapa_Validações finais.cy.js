    // DADO: que preciso simular o workflow completo de um precatório na plataforma Opera
    // E: avançar individualmente as etapas para validação do fluxo
    // QUANDO: entro no detalhamento de um card
    // E: aprovo as atividades da etapa: Validações finais
    // ENTAO: o card deve se mover para a etapa: Pagamento


    describe('Validar etapa: "Validações finais"', () => {
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

        it('Validar etapa: "Validações finais"', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA-Workflow').click();
        cy.screenshot('15-Teste-QA-Validações finais_INICIO',{overwrite: true});

        // APROVACAO ATIVIDADES DA ETAPA: "Validações finais"

        // clicar em "Validação da operação pela XP"
        cy.contains('Validação da operação pela XP').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('15-Teste-QA-Validações finais 02',{overwrite: true});
        cy.wait(2000); // Aguarda 1 segundos

        // clicar em "Envio da operação para BRL"
        cy.contains('Envio da operação para BRL').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // Verifica existência dos campos | ENVIO, STATUS, RETORNO
        cy.get('#atividades > .card > :nth-child(3) > :nth-child(1) > div > :nth-child(1)')
        .contains("ENVIO");
        cy.get(':nth-child(2) > [style="min-width: 200px"] > :nth-child(1)')
        .contains("STATUS");
        cy.get('.card > :nth-child(3) > .col > .m-0')
        .contains("RETORNO");
        // Finaliza Atividade
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('15-Teste-QA-Validações finais 03',{overwrite: true});
        cy.wait(2000); // Aguarda 1 segundos

        });
    });