    // DADO: que preciso simular o workflow completo de um precatório na plataforma Opera
    // QUANDO: 
    // E: 
    // E: 
    // E: 
    // ENTAO: 
    // E: 

    describe('Validar Login SSO', () => {
        beforeEach(() => {
            // Realiza o login direcionado para SSO Microsoft
            cy.origin('https://login.microsoftonline.com', () => {
                // Volta para a origem, página pjus board
                cy.visit('https://opera.hml.pjus.com.br/board');
                cy.viewport(1280, 720);
                cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}`, { force: true });
                cy.get('[type="submit"]').click();
                cy.wait(1000);
                cy.get('[name="passwd"]').type(`${Cypress.env('password')}`, { force: true });
                cy.wait(1000);
                cy.get('[type="submit"]').click();
                cy.get('[id="idSIButton9"]').click();
            });    
        });

        it('Valida Workflow e2e', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA').click();
        cy.screenshot('e2e-01-Card_Selecionado',{overwrite: true});

        // cy.get('.card > .g-2')
        // .invoke('text').then((text) => {
        //     cy.wrap(text).as('card');
        //     cy.log('@card');
        //     cy.contains('@card').click()
        //})


        // clica em "Emissão de CNDs automáticas"
        cy.contains('Emissão de CNDs automáticas').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Aprovar"
        cy.get('#atividades > .btn').click();
        // captura print
        cy.screenshot('e2e-01-Emissão de CNDs automáticas',{overwrite: true});

        // clicar em "Emissão de CNDs manuais"
        cy.contains('Emissão de CNDs manuais').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Emissão de CNDs manuais',{overwrite: true});

        // clicar em "Atualização do registro civil"
        cy.contains('Atualização do registro civil').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Atualização do registro civil',{overwrite: true});

        // clicar em "Conferência de documentos"
        cy.contains('Conferência de documentos').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Conferência de documentos',{overwrite: true});

        // clicar em "Comitê de Deliberação"
        cy.contains('Comitê de Deliberação').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Comitê de Deliberação',{overwrite: true});

        // // clicar em "Análise do processo"
        // cy.contains('processo').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();
        // cy.screenshot('e2e-01-Análise do processo',{overwrite: true});

        // // clicar em "Análise de compliance"
        // cy.contains('Análise de compliance').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();
        // cy.screenshot('e2e-01-Análise de compliance',{overwrite: true});

        // // clicar em "Defesa BRL"
        // cy.contains('Defesa BRL').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();
        // cy.screenshot('e2e-01-Defesa BRL',{overwrite: true});

        // // clicar em "Validação da defesa BRL"
        // cy.contains('Validação da defesa BRL').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();
        // cy.screenshot('e2e-01-Validação da defesa BRL',{overwrite: true});

        // // clicar em "Análise de documentoscopia"
        // cy.contains('Análise de documentoscopia').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();
        // cy.screenshot('e2e-01-Análise de documentoscopia',{overwrite: true});

        // // clicar em "Ajuste na escritura"
        // cy.contains('Ajuste na escritura').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();
        // cy.screenshot('e2e-01-Ajuste na escritura',{overwrite: true});

        // // clicar em "Resumo das CNDs"
        // cy.contains('Resumo das CNDs').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();
        // cy.screenshot('e2e-01-Resumo das CNDs',{overwrite: true});

        // // clicar em "Ligação de antifraude"
        // cy.contains('Ligação de antifraude').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();
        // cy.screenshot('e2e-01-Ligação de antifraude',{overwrite: true});

        // // clicar em "Ajuste nos termos"
        // cy.contains('Ajuste nos termos').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();
        // cy.screenshot('e2e-01-Ajuste nos termos',{overwrite: true});

        // // clicar em "Emissão de termos"
        // cy.contains('Emissão de termos').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();
        // cy.screenshot('e2e-01-Emissão de termos',{overwrite: true});

        // // clicar em "Emissão de atestado de capacidade"
        // cy.contains('Emissão de atestado de capacidade').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();
        // cy.screenshot('e2e-01-Emissão de atestado de capacidade',{overwrite: true});

        // // clicar em "Solicitar extrato de débito"
        // cy.contains('Solicitar extrato de débito').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();
        // cy.screenshot('e2e-01-Solicitar extrato de débito',{overwrite: true});

        // // clicar em "Emissão do certificado digital"
        // cy.contains('Emissão do certificado digital').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();
        // cy.screenshot('e2e-01-Emissão do certificado digital',{overwrite: true});

        // Finaliza e volta para tela principal
        cy.wait(3000);
        cy.get('#link-voltar-para-todas-etapas').click();


        });
    });