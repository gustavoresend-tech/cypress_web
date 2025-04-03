    // DADO: que preciso simular o workflow completo de um precatório na plataforma Opera
    // E: avançar individualmente as etapas para validação do fluxo
    // QUANDO: entro no detalhamento de um card
    // E: aprovo as atividades da etapa: Análise de cálculo
    // ENTAO: o processo de cálculo deve ser realizado com sucesso
    // E: o card deve se mover para a etapa: Parecer do cedente

    describe('Validar etapa: "Análise de cálculo"', () => {
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

        it('Validar etapa: "Análise de cálculo"', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA-Análise de cálculo').click();
        cy.screenshot('06-Etapa-Análise de cálculo_INICIO',{overwrite: true});

        // APROVACAO ATIVIDADES DA ETAPA: "Análise de cálculo"

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
        cy.wait(2000); // aguarda 2 segundos
        cy.screenshot('06-Etapa-Análise de cálculo_REL',{overwrite: true});

        // Clicar Dados/Titular
        cy.get('#dados-operacao-tab').click();
        cy.wait(2000); // Aguarda 2 segundos

        // Altera nome do card
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-Parecer do cedente{enter}');
        cy.wait(2000); // Aguarda 2 segundos
        cy.get('#atividades-tab').click();
        cy.screenshot('06-Etapa-Análise de cálculo_FIM',{overwrite: true});

        });
    });