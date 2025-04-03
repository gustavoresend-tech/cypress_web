    // DADO: que preciso simular o workflow completo de um precatório na plataforma Opera
    // E: realizar o calculo de precatorio
    // QUANDO: inicio a atividade "Calculo precatório"
    // E: preencho os campos solicitados
    // ENTAO: o calculo deve ser realizado
    // E: a folha de calculo exibida na tela

    describe('Validar Cálculo Precatório', () => {
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

        it('Validar Cálculo Precatório', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA-WorkFlow').click();
        cy.screenshot('e2e-02-Card_Selecionado',{overwrite: true});

        // clica em "Emissão de CNDs automáticas"
        cy.contains('Emissão de CNDs automáticas').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Aprovar"
        cy.get('#atividades > .btn').click();
        // captura print
        cy.screenshot('e2e-02-Emissão de CNDs automáticas',{overwrite: true});

        // clicar em "Emissão de CNDs manuais"
        cy.contains('Emissão de CNDs manuais').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Emissão de CNDs manuais',{overwrite: true});

        // clicar em "Atualização do registro civil"
        cy.contains('Atualização do registro civil').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Atualização do registro civil',{overwrite: true});

        // clicar em "Conferência de documentos"
        cy.contains('Conferência de documentos').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Conferência de documentos',{overwrite: true});

        // clicar em "Comitê de Deliberação"
        cy.contains('Comitê de Deliberação').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Comitê de Deliberação',{overwrite: true});
        //cy.wait(2000); // aguarda 2 segundos

        // clicar em "Análise do processo"
        cy.contains('Pendente').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Análise do processo',{overwrite: true});

        // clicar em "Análise de compliance"
        cy.contains('Análise de compliance').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Análise de compliance',{overwrite: true});

        // clicar em "Defesa BRL"
        cy.contains('Defesa BRL').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Defesa BRL',{overwrite: true});

        // clicar em "Validação da defesa BRL"
        cy.contains('Validação da defesa BRL').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Validação da defesa BRL',{overwrite: true});

        // clicar em "Análise de documentoscopia"
        cy.contains('Análise de documentoscopia').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Análise de documentoscopia',{overwrite: true});

        // clicar em "Ajuste na escritura"
        cy.contains('Ajuste na escritura').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Ajuste na escritura',{overwrite: true});

        // clicar em "Resumo das CNDs"
        cy.contains('Resumo das CNDs').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Resumo das CNDs',{overwrite: true});

        // clicar em "Ligação de antifraude"
        cy.contains('Ligação de antifraude').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Ligação de antifraude',{overwrite: true});

        // clicar em "Ajuste nos termos"
        cy.contains('Ajuste nos termos').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Ajuste nos termos',{overwrite: true});

        // clicar em "Emissão de termos"
        cy.contains('Emissão de termos').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Emissão de termos',{overwrite: true});

        // clicar em "Emissão de atestado de capacidade"
        cy.contains('Emissão de atestado de capacidade').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Emissão de atestado de capacidade',{overwrite: true});

        // clicar em "Solicitar extrato de débito"
        cy.contains('Solicitar extrato de débito').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Solicitar extrato de débito',{overwrite: true});

        // clicar em "Emissão do certificado digital"
        cy.contains('Emissão do certificado digital').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        cy.screenshot('e2e-02-Emissão do certificado digital',{overwrite: true});
        cy.wait(5000); // aguarda 5 segundos

        // INICIA PROCESSO DE MONTAGEM DO CÁLCULO

        // clicar em "Calcular valor do precatório"
        cy.contains('Calcular valor do precatório').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();

        // INFORMAÇÕES BÁSICAS

        // Seleciona campo "Desconto de Previdência"
        cy.get(':nth-child(1) > .form-select').select('Percentual', { force: true });        

        // Preenche campo "Previdência"
        cy.get('#step-informacoes-basicas-tab-pane > :nth-child(1) > :nth-child(2) > .form-control').clear().type('0', { force: true });        

        // Seleciona campo "Imposto de renda"
        cy.get(':nth-child(1) > :nth-child(3) > .form-select').select('RRA', { force: true });        

        // preenche campo "Inicio Formação"
        cy.get('#DataInicioFormacao').type('2021-01-01', { force: true });        

        // preenche o campo "Término formação"
        cy.get('#DataTerminoFormacao').type('2021-01-01', { force: true });        

        // preenche o campo "% honorários"
        cy.get('#step-informacoes-basicas-tab-pane > :nth-child(2) > :nth-child(5) > .form-control').clear().type('30', { force: true });        

        // preenche o campo "Data EC-62"
        // cy.get(':nth-child(3) > :nth-child(1) > .form-control').type('2021-01-01', { force: true });

        // preenche o campo "Valor EC-62"
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').clear().type('0',{ force: true });        

        // preenche o campo "Valor Penhora"
        cy.get(':nth-child(3) > :nth-child(3) > .form-control').clear().type('0',{ force: true });        

        // preenche o campo "Débito total do 3"
        cy.get(':nth-child(4) > :nth-child(1) > .form-control').clear().type('0',{ force: true });        
        
        // preenche o campo "Débito total do 3 retido"
        cy.get(':nth-child(4) > :nth-child(2) > .form-control').clear().type('0',{ force: true });        

        // preenche o campo "ISS"
        cy.get(':nth-child(4) > :nth-child(3) > .form-control').clear().type('0',{ force: true });

        // preenche o campo "Outras Despesas"
        cy.get(':nth-child(4) > :nth-child(4) > .form-control').clear().type('0',{ force: true });
        cy.screenshot('e2e-02-Informacoes_Basicas',{overwrite: true});

        // clica btn "Continuar"
        cy.get('#step-informacoes-basicas-tab-pane > .float-end > .btn').click();

        // OFICIO

        // preenche campo "Principal"
        cy.get('#step-oficio-tab-pane > :nth-child(1) > :nth-child(1) > .form-control').clear().type('150000',{ force: true });

        // preenche campo "juros"
        cy.get('#step-oficio-tab-pane > :nth-child(1) > :nth-child(2) > .form-control').clear().type('25000',{ force: true });

        // preenche campo "Vencimento"
        cy.get('#step-oficio-tab-pane > :nth-child(1) > :nth-child(3) > .form-control').clear().type('2026',{ force: true });

        // preenche campo "data de autuaçao"
        cy.get('#step-oficio-tab-pane > :nth-child(2) > :nth-child(1) > .form-control').type('2021-01-01', { force: true });

        // preenche campo "data de liquidação"
        cy.get('#step-oficio-tab-pane > :nth-child(2) > :nth-child(2) > .form-control').type('2021-01-01', { force: true });
        cy.screenshot('e2e-02-Oficio',{overwrite: true});

        // clica btn "Continuar"
        cy.get('#step-oficio-tab-pane > .float-end > .btn-primary').click();

        // PJUS

        // preenche campo "Principal"
        cy.get('#step-PJUS-tab-pane > :nth-child(1) > :nth-child(1) > .form-control').clear().type('150000',{ force: true });

        // preenche campo "juros"
        cy.get('#step-PJUS-tab-pane > :nth-child(1) > :nth-child(2) > .form-control').clear().type('25000',{ force: true });

        // preenche campo "Vencimento"
        cy.get('#step-PJUS-tab-pane > :nth-child(1) > :nth-child(3) > .form-control').clear().type('2026',{ force: true });

        // preenche campo "data de autuaçao"
        cy.get('#step-PJUS-tab-pane > :nth-child(2) > :nth-child(1) > .form-control').type('2021-01-01', { force: true });

        // preenche campo "data de liquidação"
        cy.get('#step-PJUS-tab-pane > :nth-child(2) > :nth-child(2) > .form-control').type('2021-01-01', { force: true });
        cy.screenshot('e2e-02-PJUS', {overwrite: true});

        // clica btn "Calcular"    
        cy.get('#step-PJUS-tab-pane > .float-end > .btn-primary').click();
        cy.wait(1000); // aguarda 1 segundos

        // clicar btn "Finalizar"
        cy.get('#btn-abrir-modal-finalizar-calculo').click();

        // Preenche modal "Finalizar atividade" calculo
        cy.get('#form-aprovar-atividade > .modal-body > .mt-3 > #observacao-reprovar-atividade').type('CALCULO OK', { force: true });

        // clicar btn "Finalizar"
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // aguarda 1 segundos
        cy.get('#calculo-operacao-tab').click();
        cy.wait(1000); // aguarda 1 segundos
        cy.screenshot('e2e-02-Calculo', {overwrite: true});


        });
    });