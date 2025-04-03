    // DADO: que preciso simular o workflow completo de um precatório na plataforma Opera
    // E: avançar individualmente as etapas para validação do fluxo
    // QUANDO: entro no detalhamento de um card
    // E: aprovo as atividades da etapa: Providências
    // ENTAO: o card deve se mover para a etapa: Análise de cálculo

    describe('Validar etapa: "Providências"', () => {
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

        it('Validar etapa: "Providências"', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA-Providências').click();
        cy.screenshot('05-Etapa-Providências_INICIO',{overwrite: true});

        // APROVACAO ATIVIDADES DA ETAPA: "Providências"

                // clicar em "Ajuste na escritura"
                cy.contains('Ajuste na escritura').click();
                // clica no btn "Iniciar"
                cy.get('#btn-iniciar-atividade').click();
                // clica no btn "Finalizar"
                cy.get('#btn-finalizar-atividade').click();
                cy.wait(2000); // aguarda 2 segundos
        
                // clicar em "Resumo das CNDs"
                cy.contains('Resumo das CNDs').click();
                // clica no btn "Iniciar"
                cy.get('#btn-iniciar-atividade').click();
                // clica no btn "Finalizar"
                cy.get('#btn-finalizar-atividade').click();
                cy.wait(2000); // aguarda 2 segundos
        
                // clicar em "Ligação de antifraude"
                cy.contains('Ligação de antifraude').click();
                // clica no btn "Iniciar"
                cy.get('#btn-iniciar-atividade').click();
                // clica no btn "Finalizar"
                cy.get('#btn-finalizar-atividade').click();
                cy.wait(2000); // aguarda 2 segundos
        
                // clicar em "Ajuste nos termos"
                cy.contains('Ajuste nos termos').click();
                // clica no btn "Iniciar"
                cy.get('#btn-iniciar-atividade').click();
                // clica no btn "Finalizar"
                cy.get('#btn-finalizar-atividade').click();
                cy.wait(2000); // aguarda 2 segundos
        
                // clicar em "Emissão de termos"
                cy.contains('Emissão de termos').click();
                // clica no btn "Iniciar"
                cy.get('#btn-iniciar-atividade').click();
                // clica no btn "Finalizar"
                cy.get('#btn-finalizar-atividade').click();
                cy.wait(2000); // aguarda 2 segundos
        
                // clicar em "Emissão de atestado de capacidade"
                cy.contains('Emissão de atestado de capacidade').click();
                // clica no btn "Iniciar"
                cy.get('#btn-iniciar-atividade').click();
                // clica no btn "Finalizar"
                cy.get('#btn-finalizar-atividade').click();
                cy.wait(2000); // aguarda 2 segundos
        
                // clicar em "Solicitar extrato de débito"
                cy.contains('Solicitar extrato de débito').click();
                // clica no btn "Iniciar"
                cy.get('#btn-iniciar-atividade').click();
                // clica no btn "Finalizar"
                cy.get('#btn-finalizar-atividade').click();
                cy.wait(2000); // aguarda 2 segundos
        
                // clicar em "Emissão do certificado digital"
                cy.contains('Emissão do certificado digital').click();
                // clica no btn "Iniciar"
                cy.get('#btn-iniciar-atividade').click();
                // clica no btn "Finalizar"
                cy.get('#btn-finalizar-atividade').click();
                cy.wait(2000); // aguarda 2 segundos       


        // Clicar Dados/Titular
        cy.get('#dados-operacao-tab').click();
        cy.wait(2000); // Aguarda 2 segundos

        // Altera nome do card
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-Análise de cálculo{enter}');
        cy.wait(2000); // Aguarda 2 segundos
        cy.get('#atividades-tab').click();
        cy.screenshot('05-Etapa-Providências_FIM',{overwrite: true});

        });
    });