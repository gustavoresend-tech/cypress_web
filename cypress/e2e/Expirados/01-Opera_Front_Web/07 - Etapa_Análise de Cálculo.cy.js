    // DADO: que estou logado na plataforma Opera web
    // E: preciso Iniciar/Aprovar as atividades até a etapa "Análise de cálculo"
    // QUANDO: entro em um card/precatório
    // e: acesso o detalhamento
    // ENTAO: as atividades devem estar visíveis
    // E: deverá ser possível iniciar e aprovar cada atividade separadamente encaminhando para a etapa "Análise de cálculo" 

    describe('Validar Atividades "Análise de cálculo"', () => {
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
        // Captura print para evidencia
        cy.screenshot('07-Card_Selecionado',{overwrite: true});

        // clica em "Emissão de CNDs automáticas"
        cy.contains('Emissão de CNDs automáticas').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // Verifica existência dos campos | ENVIO, STATUS, RETORNO
        cy.get('#atividades > .card > :nth-child(3) > :nth-child(1) > div > :nth-child(1)')        
        .contains("ENVIO");
        cy.get(':nth-child(2) > [style="min-width: 200px"] > :nth-child(1)')
        .contains("STATUS");
        cy.get('.card > :nth-child(3) > .col > .m-0')
        .contains("RETORNO");
        // clica no btn "Aprovar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Emissão de CNDs automáticas',{overwrite: true});

        // clicar em "Emissão de CNDs manuais"
        cy.contains('Emissão de CNDs manuais').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Emissão de CNDs manuais',{overwrite: true});

        // clicar em "Atualização do registro civil"
        cy.contains('Atualização do registro civil').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // Verifica existência dos campos | ENVIO, STATUS, RETORNO
        cy.get('#atividades > .card > :nth-child(3) > :nth-child(1) > div > :nth-child(1)')        
        .contains("ENVIO");
        cy.get(':nth-child(2) > [style="min-width: 200px"] > :nth-child(1)')
        .contains("STATUS");
        cy.get('.card > :nth-child(3) > .col > .m-0')
        .contains("RETORNO");
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Atualização do registro civil',{overwrite: true});

        // clicar em "Conferência de documentos"
        cy.contains('Conferência de documentos').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Conferência de documentos',{overwrite: true});

        // clicar em "Comitê de Deliberação"
        cy.contains('Comitê de Deliberação').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Comitê de Deliberação',{overwrite: true});

        // // clicar em "Análise do processo"
        // cy.contains('Pendente').click();
        // // clica no btn "Iniciar"
        // cy.get('#btn-iniciar-atividade').click();
        // // clica no btn "Finalizar"
        // cy.get('#btn-finalizar-atividade').click();
        // //Preenche modal de observação
        // cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        // cy.get('#btn-aprovar-atividade').click();
        // cy.wait(1000); // Aguarda 1 segundos
        // // Captura print para evidencia
        // cy.screenshot('07-Análise do processo',{overwrite: true});

        // clicar em "Compliance Interno"
        cy.contains('Compliance Interno').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // Verifica existência dos campos | ENVIO, STATUS, RETORNO
        cy.get('#atividades > .card > :nth-child(3) > :nth-child(1) > div > :nth-child(1)')        
        .contains("ENVIO");
        cy.get(':nth-child(2) > [style="min-width: 200px"] > :nth-child(1)')
        .contains("STATUS");
        cy.get('.card > :nth-child(3) > .col > .m-0')
        .contains("RETORNO");
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Compliance Interno',{overwrite: true});
       
       // clicar em "Informações para compliance"
       cy.contains('Informações para compliance').click();
       // clica no btn "Iniciar"
       cy.get('#btn-iniciar-atividade').click();
       // clica no btn "Finalizar"
       cy.get('#btn-finalizar-atividade').click();
       //Preenche modal de observação
       cy.get('#observacao-aprovar-atividade').type('Teste-QA');
       cy.get('#btn-aprovar-atividade').click();
       cy.wait(1000); // Aguarda 1 segundos
       // Captura print para evidencia
       cy.screenshot('07-Informações para compliance',{overwrite: true});
       
        // clicar em "Análise do ativo"
       cy.contains('Análise do ativo').click();
       // clica no btn "Iniciar"
       cy.get('#btn-iniciar-atividade').click();
       // clica no btn "Finalizar"
       cy.get('#btn-finalizar-atividade').click();
       //Preenche modal de observação
       cy.get('#observacao-aprovar-atividade').type('Teste-QA');
       cy.get('#btn-aprovar-atividade').click();
       cy.wait(1000); // Aguarda 1 segundos
       // Captura print para evidencia
       cy.screenshot('07-Análise do ativo',{overwrite: true});        
       
        // clicar em "Aprovacao titular"
        cy.contains('Aprovacao titular').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Aprovacao titular',{overwrite: true});
        
        // clicar em "Compliance Externo"
        cy.contains('Compliance Externo').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Compliance Externo',{overwrite: true});        

        // clicar em "Validação da defesa BRL"
        cy.contains('Validação da defesa BRL').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Validação da defesa BRL',{overwrite: true});

        // clicar em "Análise de documentoscopia"
        cy.contains('Análise de documentoscopia').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Análise de documentoscopia',{overwrite: true});

        // clicar em "Ajuste na escritura"
        cy.contains('Ajuste na escritura').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Ajuste na escritura',{overwrite: true});

        // clicar em "Informações sobre CND"
        cy.contains('sobre CND').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Informações sobre CND',{overwrite: true});

        // clicar em "Ligação de confirmação"
        cy.contains('Ligação de confirmação').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Ligação de confirmação',{overwrite: true});

        // clicar em "Ajuste nos termos"
        cy.contains('Ajuste nos termos').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Ajuste nos termos',{overwrite: true});

        // clicar em "Termos e Declarações"
        cy.contains('Termos e Declarações').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Termos e Declarações',{overwrite: true});

        // clicar em "Atestado de capacidade"
        cy.contains('Atestado de capacidade' ).click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Atestado de capacidade',{overwrite: true});

        // clicar em "Solicitar extrato de débito"
        cy.contains('Solicitar extrato de débito').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Solicitar extrato de débito',{overwrite: true});

        // clicar em "Certificado Digital"
        cy.contains('Certificado Digital').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('07-Certificado Digital',{overwrite: true});
        cy.wait(2000); // Aguarda 1 segundos

        // INICIA PROCESSO DE MONTAGEM DO CÁLCULO

        // clicar em "Calcular valor do precatório"
        cy.contains('Calcular valor do precatório').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia        
        cy.screenshot('07-Inicio atividade de calculo',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos


    });
});