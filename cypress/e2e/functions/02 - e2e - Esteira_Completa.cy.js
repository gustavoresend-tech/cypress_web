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

        it('Valida Workflow e2e', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA-WorkFlow').click();
        cy.screenshot('02-e2e-Card_Selecionado',{overwrite: true});

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
        //cy.wait(2000); // aguarda 2 segundos

        // clicar em "Análise do processo"
        cy.contains('Pendente').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Análise do processo',{overwrite: true});

        // clicar em "Análise de compliance"
        cy.contains('Análise de compliance').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Análise de compliance',{overwrite: true});

        // clicar em "Defesa BRL"
        cy.contains('Defesa BRL').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Defesa BRL',{overwrite: true});

        // clicar em "Validação da defesa BRL"
        cy.contains('Validação da defesa BRL').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Validação da defesa BRL',{overwrite: true});

        // clicar em "Análise de documentoscopia"
        cy.contains('Análise de documentoscopia').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Análise de documentoscopia',{overwrite: true});

        // clicar em "Ajuste na escritura"
        cy.contains('Ajuste na escritura').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Ajuste na escritura',{overwrite: true});

        // clicar em "Resumo das CNDs"
        cy.contains('Resumo das CNDs').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Resumo das CNDs',{overwrite: true});

        // clicar em "Ligação de antifraude"
        cy.contains('Ligação de antifraude').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Ligação de antifraude',{overwrite: true});

        // clicar em "Ajuste nos termos"
        cy.contains('Ajuste nos termos').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Ajuste nos termos',{overwrite: true});

        // clicar em "Emissão de termos"
        cy.contains('Emissão de termos').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Emissão de termos',{overwrite: true});

        // clicar em "Emissão de atestado de capacidade"
        cy.contains('Emissão de atestado de capacidade').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Emissão de atestado de capacidade',{overwrite: true});

        // clicar em "Solicitar extrato de débito"
        cy.contains('Solicitar extrato de débito').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Solicitar extrato de débito',{overwrite: true});

        // clicar em "Emissão do certificado digital"
        cy.contains('Emissão do certificado digital').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-01-Emissão do certificado digital',{overwrite: true});

        // clicar em "Calcular valor do precatório"
        cy.contains('Calcular valor do precatório').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();

        // Entra em "Informações Básicas"

        // Seleciona campo "Desconto de Previdência"
        cy.get(':nth-child(1) > .form-select').select('Valor', { force: true });
        cy.wait(1000); // aguarda 1 segundo
        // Preenche campo "Previdência"
        cy.get('#step-informacoes-basicas-tab-pane > :nth-child(1) > :nth-child(2) > .form-control').clear().type('25000', { force: true });
        cy.wait(1000); // aguarda 1 segundo
        // Seleciona campo "Imposto de renda"
        cy.get(':nth-child(1) > :nth-child(3) > .form-select').select('RRA', { force: true });
        cy.wait(1000); // aguarda 1 segundo
        // preenche campo "Inicio Formação"
        cy.get('#DataInicioFormacao').type('2025-01-01', { force: true });
        cy.wait(1000); // aguarda 1 segundo
        // preenche o campo "Término formação"
        cy.get('#DataTerminoFormacao').type('2025-02-01', { force: true });
        cy.wait(1000); // aguarda 1 segundo
        //// preenche o campo "% honorários"
        cy.get('#step-informacoes-basicas-tab-pane > :nth-child(2) > :nth-child(5) > .form-control').clear().type('2', { force: true });
        cy.wait(1000); // aguarda 1 segundo
        // preenche o campo "Data EC-62"
        cy.get(':nth-child(3) > :nth-child(1) > .form-control').type('2025-02-02', { force: true });
        cy.wait(1000); // aguarda 1 segundo
        // preenche o campo "Valor EC-62"
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').type('198',{ force: true });
        cy.wait(1000); // aguarda 1 segundo
        // preenche o campo "Valor Penhora"
        cy.get(':nth-child(3) > :nth-child(3) > .form-control').type('101',{ force: true });
        cy.wait(1000); // aguarda 1 segundo
        // preenche o campo "Débito total do 3"
        cy.get(':nth-child(4) > :nth-child(1) > .form-control').type('105',{ force: true });
        cy.wait(1000); // aguarda 1 segundo
        // preenche o campo "Débito total do 3 retido"
        cy.get(':nth-child(4) > :nth-child(2) > .form-control').type('110',{ force: true });
        cy.wait(1000); // aguarda 1 segundo
        // preenche o campo "ISS"
        cy.get(':nth-child(4) > :nth-child(3) > .form-control').type('115',{ force: true });
        cy.wait(1000); // aguarda 1 segundo
        // preenche o campo "Outras Despesas"
        cy.get(':nth-child(4) > :nth-child(4) > .form-control').type('120',{ force: true });
        cy.wait(1000); // aguarda 1 segundo
        // clica btn "Continuar"
        cy.get('#step-informacoes-basicas-tab-pane > .float-end > .btn').click();

        // Entra em "Ofício"

        // preenche campo "Principal"
        cy.get('#step-oficio-tab-pane > :nth-child(1) > :nth-child(1) > .form-control').clear().type('120',{ force: true });
        // preenche campo "juros"
        cy.get('#step-oficio-tab-pane > :nth-child(1) > :nth-child(2) > .form-control').clear().type('10',{ force: true });
        // preenche campo "Vencimento"
        cy.get('#step-oficio-tab-pane > :nth-child(1) > :nth-child(3) > .form-control').clear().type('2050',{ force: true });
        // preenche campo "data de autuaçao"
        cy.get('#step-oficio-tab-pane > :nth-child(2) > :nth-child(1) > .form-control').type('2025-01-01', { force: true });
        // preenche campo "data de liquidação"
        cy.get('#step-oficio-tab-pane > :nth-child(2) > :nth-child(2) > .form-control').type('2025-03-01', { force: true });
        // clica btn "Continuar"
        cy.get('#step-oficio-tab-pane > .float-end > .btn-primary').click();

        // Entra em "PJUS"

        // preenche campo "Principal"
        cy.get('#step-PJUS-tab-pane > :nth-child(1) > :nth-child(1) > .form-control').clear().type('120',{ force: true });
        // preenche campo "juros"
        cy.get('#step-PJUS-tab-pane > :nth-child(1) > :nth-child(2) > .form-control').clear().type('120',{ force: true });
        // preenche campo "Vencimento"
        cy.get('#step-PJUS-tab-pane > :nth-child(1) > :nth-child(3) > .form-control').clear().type('2050',{ force: true });
        // preenche campo "data de autuaçao"
        cy.get('#step-PJUS-tab-pane > :nth-child(2) > :nth-child(1) > .form-control').type('2025-01-01', { force: true });
        // preenche campo "data de liquidação"
        cy.get('#step-PJUS-tab-pane > :nth-child(2) > :nth-child(2) > .form-control').type('2025-03-01', { force: true });
        // clica btn "Calcular"    
        cy.get('#step-PJUS-tab-pane > .float-end > .btn-primary').click();

        // clicar no btn "Reprovar atividade"
        cy.get('#btn-abrir-modal-reprovar-calculo > .d-flex > .me-2').click();
        // insere observação
        cy.get('#observacao-reprovar-atividade').type('Teste Reprovação', { force: true });
        // clica no btn "Reprovar"
        cy.get('#btn-reprovar-atividade').click();



        // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();
        // cy.screenshot('e2e-01-Calcular valor do precatório',{overwrite: true});


        // Finaliza e volta para tela principal
        cy.wait(3000);
        //cy.get('#link-voltar-para-todas-etapas').click();


        });
    });