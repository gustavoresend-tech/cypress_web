// DADO: que estou logado na plataforma Opera web
// E: preciso Iniciar/Aprovar as atividades da primeira etapa "Documentos preliminares"
// QUANDO: entro em um card/precatório
// e: acesso o detalhamento
// ENTAO: as atividades devem estar visíveis
// E: deverá ser possível iniciar e aprovar cada atividade separadamente encaminhando para a próxima etapa

describe('Validar Atividades "Grupo Pré analise"', () => {
    Cypress.config('pageLoadTimeout', 15000);
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
            cy.wait(1000); // aguarda 1 segundos
            // Insere e-senha e submete
            cy.get('[name="passwd"]').type(`${Cypress.env('password')}`, { force: true });
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[type="submit"]').click();
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[id="idSIButton9"]').click();
        });
    });

    it('Validar Atividades "Inicia / Aprova"', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA - NAO USAR (Automação)').click();
        // Captura print para evidencia
        cy.screenshot('06-Ativ_Tela-Inicial',{overwrite: true});

        // Acessa, inicializa e Aprova => "Atualização do registro civil"
        cy.contains('Atualização do registro civil').click();
        // Captura print para evidencia
        cy.screenshot('06-Ativ_Iniciar',{overwrite: true});
        cy.wait(2000); // Aguarda 2 segundos
        cy.get('#btn-iniciar-atividade').click();
        // Captura print para evidencia
        cy.screenshot('06-Ativ_Aprovar',{overwrite: true});
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(2000); // Aguarda 2 segundos

        // Acessa, inicializa e Aprova => "Emissão de CNDs manuais"
        cy.contains('Emissão de CNDs manuais').click();
        // Captura print para evidencia
        cy.screenshot('06-Ativ_Iniciar-02',{overwrite: true});
        cy.get('#btn-iniciar-atividade').click();
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(2000); // Aguarda 2 segundos
        // Captura print para evidencia
        cy.screenshot('06-Ativ_Aprovar-02',{overwrite: true});
        cy.wait(2000); // Aguarda 2 segundos

        // Acessa, inicializa e Aprova => "Emissão de CNDs automáticas"
        cy.contains('Emissão de CNDs automáticas').click();
        // Captura print para evidencia
        cy.screenshot('06-Ativ_Iniciar-03',{overwrite: true});
        cy.get('#btn-iniciar-atividade').click();
        // Captura print para evidencia
        cy.screenshot('06-Ativ_Aprovar-03',{overwrite: true});
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(2000); // Aguarda 2 segundos

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
        cy.screenshot('06-Conferência de documentos',{overwrite: true});
        
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
        cy.screenshot('06-Comitê de Deliberação',{overwrite: true});
        
        // clicar em "Análise do processo"
        cy.contains('Pendente').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('06-Análise do processo',{overwrite: true});
        
        // clicar em "Análise de compliance"
        cy.contains('Análise de compliance').click();
        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // clica no btn "Finalizar"
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('06-Análise de compliance',{overwrite: true});
       
       // clicar em "Defesa BRL"
       cy.contains('Defesa BRL').click();
       // clica no btn "Iniciar"
       cy.get('#btn-iniciar-atividade').click();
       // clica no btn "Finalizar"
       cy.get('#btn-finalizar-atividade').click();
       //Preenche modal de observação
       cy.get('#observacao-aprovar-atividade').type('Teste-QA');
       cy.get('#btn-aprovar-atividade').click();
       cy.wait(1000); // Aguarda 1 segundos
       // Captura print para evidencia
       cy.screenshot('06-Defesa BRL',{overwrite: true});        

    });
});