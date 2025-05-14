    // DADO: que preciso simular o workflow completo de um precatório na plataforma Opera
    // E: avançar individualmente as etapas para validação do fluxo
    // QUANDO: entro no detalhamento de um card
    // E: aprovo as atividades da etapa: Protocolo de cessão
    // ENTAO: o card deve se mover para a etapa: Validações finais


    describe('Validar etapa: "Protocolo de cessão"', () => {
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

        it('Validar etapa: "Protocolo de cessão"', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA-Workflow').click();
        cy.screenshot('14-Teste-QA-Protocolo de cessão_INICIO',{overwrite: true});

        // APROVACAO ATIVIDADES DA ETAPA: "Protocolar cessão"

        // clicar em "Protocolar cessão"
        cy.contains('Protocolar cessão').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('14-Teste-QA-Protocolo de cessão 02',{overwrite: true});
        cy.wait(2000); // Aguarda 1 segundos

        // clicar em "Verificar movimentação processual"
        cy.contains('Verificar movimentação processual').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('14-Teste-QA-Protocolo de cessão 03',{overwrite: true});
        cy.wait(2000); // Aguarda 1 segundos


        // // clicar em "Assinaturas"
        // cy.contains('Assinaturas').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();        


        });
    });