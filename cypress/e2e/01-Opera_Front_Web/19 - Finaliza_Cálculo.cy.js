// DADO: que estou logado precisando simular o calculo de um precatório na plataforma Opera
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
            cy.wait(2000); // Aguarda 1 segundos
            // Insere e-senha e submete
            cy.get('[name="passwd"]').type(`${Cypress.env('password')}`, { force: true });
            cy.wait(2000); // Aguarda 1 segundos
            cy.get('[type="submit"]').click();
            cy.wait(2000); // Aguarda 1 segundos
            cy.get('[id="idSIButton9"]').click();
            });    
        });

        // INICIO DOS TESTES

        it('Validar Cálculo Precatório', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA-Analise de calculo').click();
        cy.screenshot('16-Card_Selecionado',{overwrite: true});


        // INICIA PROCESSO DE MONTAGEM DO CÁLCULO

        // clicar em "Calcular valor do precatório"
        cy.contains('Calcular valor do precatório').click();

        // INFORMAÇÕES BÁSICAS

        // NEGOCIADOR
        
        // Coluna Negociador - Verifica existência dos campos
        cy.get(':nth-child(1) > .tabela-calculo > .bg-white > .position-relative > .text-center > .text-2')
        .contains("Negociador");

        // verifica se o campo "Desconto de Previdência" existe
        cy.get(':nth-child(1) > .tabela-calculo > .p-1 > :nth-child(1) > .label')
        .contains("Desconto de Previdência");

        // verifica se o campo existe: "Imposto de renda";
        cy.get(':nth-child(1) > .tabela-calculo > .p-1 > :nth-child(3) > .label')
        .contains("Imposto de renda");

        // verifica se o campo existe: "Valor Imposto de renda";
        cy.get('#CalculoProposta-div-ValorIr > .label')
        .contains("Valor imposto de renda");

        // verifica se o campo existe: "Percentual Imposto de renda";
        cy.get('#CalculoProposta-div-PercentualIr > .label')
        .contains("Percentual imposto de renda");

        // verifica se o campo existe: "Início formação";
        cy.get('#CalculoProposta-div-DataInicioFormacao > .label')
        .contains("Início formação");

        // verifica se o campo existe: "Término formação";
        cy.get('#CalculoProposta-div-DataTerminoFormacao > .label')
        .contains("Término formação");
        
        // verifica se o campo existe: "Data EC-62"
        cy.get(':nth-child(1) > .tabela-calculo > .p-1 > :nth-child(9) > .label')
        .contains("Data EC-62");

        // verifica se o campo existe: "Valor EC-62"
        cy.get(':nth-child(1) > .tabela-calculo > .p-1 > :nth-child(10) > .label')
        .contains("Valor EC-62");

        // verifica se o campo existe: "Penhora"
        cy.get(':nth-child(1) > .tabela-calculo > .p-1 > :nth-child(11) > .label')
        .contains("Valor Penhora");

        // verifica se o campo existe: "Debito Total do 3"
        cy.get(':nth-child(1) > .tabela-calculo > .p-1 > :nth-child(12) > .label')
        .contains("Debito Total do 3");

        // verifica se o campo existe: "Debito Total do 3 retido"
        cy.get(':nth-child(1) > .tabela-calculo > .p-1 > :nth-child(13) > .label')
        .contains("Debito Total do 3 retido");

        // verifica se o campo existe: "ISS"
        cy.get(':nth-child(1) > .tabela-calculo > .p-1 > :nth-child(14) > .label')
        .contains("ISS");

        // verifica se o campo existe: "Outras Despesas"
        cy.get(':nth-child(1) > .tabela-calculo > .p-1 > :nth-child(15) > .label')
        .contains("Outras despesas");

        // verifica se o campo existe: "Principal"
        cy.get(':nth-child(1) > .tabela-calculo > .p-1 > :nth-child(16) > .label')
        .contains("Principal");

        // verifica se o campo existe: "Juros"
        cy.get(':nth-child(1) > .tabela-calculo > .p-1 > :nth-child(17) > .label')
        .contains("Juros");

        // verifica se o campo existe: "Vencimento"
        cy.get(':nth-child(1) > .tabela-calculo > .p-1 > :nth-child(18) > .label')
        .contains("Vencimento");

        // verifica se o campo existe: "Data de autuação"
        cy.get(':nth-child(1) > .tabela-calculo > .p-1 > :nth-child(19) > .label')
        .contains("Data de autuação");

        // verifica se o campo existe: "Data de"
        cy.get(':nth-child(1) > .tabela-calculo > .p-1 > :nth-child(20) > .label')
        .contains("Data de");

        // OFICIO - Imposto RRA

        // Coluna Oficio - Verifica existência dos campos e realiza o preenchimento
        cy.get(':nth-child(2) > .tabela-calculo > .bg-white > .position-relative > .text-center > .text-2')
        .contains("Ofício");        

        // Seleciona campo "Desconto de Previdência"
        cy.get('#CalculoOficio-TipoPrevidencia').select('Percentual', { force: true });        

        // Preenche campo " Valor Previdência"
        cy.get('#CalculoOficio-ValorPrevidencia').clear().type('0', { force: true });        

        // Seleciona campo "Imposto de renda"
        cy.get('#CalculoOficio-TipoIr').select('RRA', { force: true });
        
        // Seleciona campo "Valor Imposto de renda"
        //cy.get('#CalculoOficio-ValorIr').clear().type('0', { force: true });
        
        // Seleciona campo "Percentual Imposto de renda"
        //cy.get('#CalculoOficio-PercentualIr').clear().type('0', { force: true });

        // preenche campo "Inicio Formação"
        cy.get('#CalculoOficio-DataInicioFormacao').type('2021-01-01', { force: true });        

        // preenche o campo "Término formação"
        cy.get('#CalculoOficio-DataTerminoFormacao').type('2021-01-01', { force: true });        

        // preenche o campo "% honorários"
        cy.get('#CalculoOficio-HonorariosContratuais').clear().type('30', { force: true });        

        // preenche o campo "Data EC-62"
        cy.get('#CalculoOficio-DataPrioridade').type('2021-01-01', { force: true });

        // preenche o campo "Valor EC-62"
        cy.get('#CalculoOficio-ValorPrioridade').clear().type('0',{ force: true });        

        // preenche o campo "Valor Penhora"
        cy.get('#CalculoOficio-ValorPenhora').clear().type('0',{ force: true });        

        // preenche o campo "Débito total do 3"
        cy.get('#CalculoOficio-DebitoTotalDo3').clear().type('0',{ force: true });        
        
        // preenche o campo "Débito total do 3 retido"
        cy.get('#CalculoOficio-DebitoTotalDo3').clear().type('0',{ force: true });        

        // preenche o campo "ISS"
        cy.get('#CalculoOficio-IssValor').clear().type('0',{ force: true });

        // preenche o campo "Outras Despesas"
        cy.get('#CalculoOficio-OutrasDespesas').clear().type('0',{ force: true });

        // preenche o campo "Principal"
        cy.get('#CalculoOficio-ValorPrincipal').clear().type('150000',{ force: true });

        // preenche o campo "Juros"
        cy.get('#CalculoOficio-ValorJuros').clear().type('25000',{ force: true });

        // preenche o campo "Vencimento"
        cy.get('#CalculoOficio-AnoVencimento').clear().type('2026',{ force: true });

        // preenche o campo "Data de autuação"
        cy.get('#CalculoOficio-DataAutuacao').type('2021-01-01', { force: true });

        // preenche o campo "Data de liquidação"
        cy.get('#CalculoOficio-DataLiquidacao').type('2021-01-01', { force: true });


        // Cálculo PJUS - Imposto RRA

        // Coluna Oficio - Verifica existência dos campos e realiza o preenchimento
        cy.get(':nth-child(3) > .tabela-calculo > .bg-white > .position-relative > .text-center > .text-2')
        .contains("PJUS");

        // Seleciona campo "Desconto de Previdência"
        cy.get('#CalculoPjus-TipoPrevidencia').select('Percentual', { force: true });        

        // Preenche campo " Valor Previdência"
        cy.get('#CalculoPjus-ValorPrevidencia').clear().type('0', { force: true });        

        // Seleciona campo "Imposto de renda"
        cy.get('#CalculoPjus-TipoIr').select('RRA', { force: true });
        
        // Seleciona campo "Valor Imposto de renda"
        //cy.get('#CalculoOficio-ValorIr').clear().type('0', { force: true });
        
        // Seleciona campo "Percentual Imposto de renda"
        //cy.get('#CalculoOficio-PercentualIr').clear().type('0', { force: true });

        // preenche campo "Inicio Formação"
        cy.get('#CalculoPjus-DataInicioFormacao').type('2021-01-01', { force: true });        

        // preenche o campo "Término formação"
        cy.get('#CalculoPjus-DataTerminoFormacao').type('2021-01-01', { force: true });        

        // preenche o campo "% honorários"
        cy.get('#CalculoPjus-HonorariosContratuais').clear().type('30', { force: true });        

        // preenche o campo "Data EC-62"
        cy.get('#CalculoPjus-DataPrioridade').type('2021-01-01', { force: true });

        // preenche o campo "Valor EC-62"
        cy.get('#CalculoPjus-ValorPrioridade').clear().type('0',{ force: true });        

        // preenche o campo "Valor Penhora"
        cy.get('#CalculoPjus-ValorPenhora').clear().type('0',{ force: true });        

        // preenche o campo "Débito total do 3"
        cy.get('#CalculoPjus-DebitoTotalDo3').clear().type('0',{ force: true });        
        
        // preenche o campo "Débito total do 3 retido"
        cy.get('#CalculoPjus-DebitoTotalDo3').clear().type('0',{ force: true });        

        // preenche o campo "ISS"
        cy.get('#CalculoPjus-IssValor').clear().type('0',{ force: true });

        // preenche o campo "Outras Despesas"
        cy.get('#CalculoPjus-OutrasDespesas').clear().type('0',{ force: true });

        // preenche o campo "Principal"
        cy.get('#CalculoPjus-ValorPrincipal').clear().type('150000',{ force: true });

        // preenche o campo "Juros"
        cy.get('#CalculoPjus-ValorJuros').clear().type('25000',{ force: true });

        // preenche o campo "Vencimento"
        cy.get('#CalculoPjus-AnoVencimento').clear().type('2026',{ force: true });

        // preenche o campo "Data de autuação"
        cy.get('#CalculoPjus-DataAutuacao').type('2021-01-01', { force: true });

        // preenche o campo "Data de liquidação"
        cy.get('#CalculoPjus-DataLiquidacao').type('2021-01-01', { force: true });
        cy.screenshot('16-PJUS', {overwrite: true});

        // AJUSTE PARA AGUARDAR MOTOR DE CALCULO

        // Clica "Calcular"
        // cy.get('.formValidator > .justify-content-end > .col-auto > .btn').click();
        // cy.wait(5000); // aguarda 5 segundos

        // // // clicar btn "Finalizar"
        // // cy.get('#btn-aprovar-atividade').click();
        // // cy.wait(1000); // aguarda 1 segundos
        // // cy.get('#calculo-operacao-tab').click();
        // // cy.wait(1000); // aguarda 1 segundos
        // // cy.screenshot('16-Calculo', {overwrite: true});

    });
});