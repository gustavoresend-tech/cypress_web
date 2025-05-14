    // DADO: que preciso simular o workflow completo de um precatório na plataforma Opera
    // E: avançar individualmente as etapas para validação do fluxo
    // QUANDO: entro no detalhamento de um card
    // E: aprovo as atividades da etapa: Documentos preliminares
    // ENTAO: o card deve se mover para a etapa: Conferência inicial

    describe('Validar etapa: "Documentos preliminares"', () => {
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

        it('Validar etapa: "Documentos preliminares"', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA-Workflow').click();
        // Captura print para evidencia
        cy.screenshot('01-Etapa-Documentos preliminares_INICIO',{overwrite: true});

        // APROVAS ATIVIDADES DA ETAPA: "Documentos preliminares"

        // Acessa, inicializa e Aprova => "Atualização do registro civil"
        cy.contains('Atualização do registro civil').click();
        // Captura print para evidencia
        cy.screenshot('01-Ativ_Iniciar',{overwrite: true});
        cy.wait(2000); // Aguarda 2 segundos
        cy.get('#btn-iniciar-atividade').click();
        // Captura print para evidencia
        cy.screenshot('01-Ativ_Aprovar',{overwrite: true});
        // Finaliza Atividade
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA')
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(2000); // Aguarda 2 segundos

        // Acessa, inicializa e Aprova => "Emissão de CNDs"
        cy.contains('Emissão de CNDs').click();
        // Captura print para evidencia
        cy.screenshot('01-Ativ_Iniciar-02',{overwrite: true});
        cy.get('#btn-iniciar-atividade').click();
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA')
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(2000); // Aguarda 2 segundos
        // Captura print para evidencia
        cy.screenshot('01-Ativ_Aprovar-02',{overwrite: true});
        cy.wait(2000); // Aguarda 2 segundos

        // Acessa, inicializa e Aprova => "Emissão de CNDs automáticas"
        cy.contains('Emissão de CNDs automáticas').click();
        // Captura print para evidencia
        cy.screenshot('01-Ativ_Iniciar-03',{overwrite: true});
        cy.get('#btn-iniciar-atividade').click();
        // Captura print para evidencia
        cy.screenshot('01-Ativ_Aprovar-03',{overwrite: true});
        // Verifica existência dos campos | ENVIO, STATUS, RETORNO
        cy.get('#atividades > .card > :nth-child(3) > :nth-child(1) > div > :nth-child(1)')
        .contains("ENVIO");
        cy.get(':nth-child(2) > [style="min-width: 200px"] > :nth-child(1)')
        .contains("STATUS");
        cy.get('.card > :nth-child(3) > .col > .m-0')
        .contains("RETORNO");
        // Finaliza Atividade
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA')
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(2000); // Aguarda 2 segundos

        });
    });