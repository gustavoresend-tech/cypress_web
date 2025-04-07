
    // DADO: que estou logado na plataforma Opera web
    // E: preciso Iniciar/Aprovar atividades
    // QUANDO: entro em um card/precatório
    // ENTAO: as atividades devem estar visiveis conforme a etapa que o card se encontra
    // E: deverá ser possível iniciar e aprovar cada atividade separadamente

describe('Validar Atividades "Inicia / Aprova"', () => {
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
        cy.contains('Teste-QA-Atividade_Criada').click();
        // Acessa a tab "Atividades"
        cy.get('#atividades-tab > .d-flex > .ms-2').click();
        cy.screenshot('01-Ativ_Tela-Inicial',{overwrite: true});

        // Acessa, inicializa e Aprova => "Atualização do registro civil"
        cy.contains('Atualização do registro civil').click();
        cy.screenshot('01-Ativ_Iniciar',{overwrite: true});
        // Aguarda 3 segundos
        cy.wait(3000);
        cy.get('#btn-iniciar-atividade').click();
        cy.screenshot('01-Ativ_Aprovar',{overwrite: true});
        cy.get('#btn-finalizar-atividade').click();
        // Aguarda 2 segundos
        cy.wait(2000);

        // Acessa, inicializa e Aprova => "Emissão de CNDs manuais"
        cy.contains('Emissão de CNDs manuais').click();
        cy.screenshot('01-Ativ_Iniciar-02',{overwrite: true});
        // Aguarda 2 segundos
        cy.wait(2000);

        cy.get('#btn-iniciar-atividade').click();
        cy.screenshot('01-Ativ_Aprovar-02',{overwrite: true});
        cy.get('#btn-finalizar-atividade').click();
        // Aguarda 2 segundos
        cy.wait(2000);

        // Acessa, inicializa e Aprova => "Emissão de CNDs automáticas"
        cy.contains('Emissão de CNDs automáticas').click();
        cy.screenshot('01-Ativ_Iniciar-03',{overwrite: true});
        cy.get('#btn-iniciar-atividade').click();
        cy.screenshot('01-Ativ_Aprovar-03',{overwrite: true});
        cy.get('#btn-finalizar-atividade').click();
        // Aguarda 2 segundos
        cy.wait(2000);

        // Acessa, inicializa e Aprova => "Atividade Teste QA"
        cy.contains('Atividade Teste QA').click();
        cy.screenshot('01-Ativ_Iniciar-03',{overwrite: true});
        cy.get('#btn-iniciar-atividade').click();
        cy.screenshot('01-Ativ_Aprovar-03',{overwrite: true});
        cy.get('#btn-finalizar-atividade').click();
        // Aguarda 2 segundos
        cy.wait(2000);

        // Altera nome do card
        cy.get('#dados-operacao-tab').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-Conferência inicial{enter}');
        cy.wait(2000); // Aguarda 2 segundos
        cy.get('#atividades-tab').click();


        // captura estado final das atividades no card
        cy.screenshot('01-Ativ_StatusFinal',{overwrite: true});
        // Aguarda 2 segundos
        cy.wait(2000);
    });
});