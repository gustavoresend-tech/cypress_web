
    // DADO: que estou logado na plataforma Opera web
    // E: preciso Iniciar/Aprovar atividades
    // QUANDO: entro em um card/precatório
    // ENTAO: as atividades devem estar visiveis conforme a etapa que o card se encontra
    // E: deverá ser possível iniciar e aprovar cada atividade separadamente

describe('Validar Atividades "Inicia / Aprova"', () => {

    beforeEach(() => {
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit('https://opera.hml.pjus.com.br/board');
            cy.viewport(1280, 720);
            cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}{enter}`);
            cy.get('[name="passwd"]').type(`${Cypress.env('password')}{enter}`);
            cy.get('[type="submit"]').type('{enter}');
            cy.get('#idBtn_Back').click();
            // Aguarda 3 segundos
            cy.wait(3000);
        });
    });

    it('Validar Atividades "Inicia / Aprova"', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA').click();
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
        cy.get('#atividades > .btn').click();
        // Aguarda 2 segundos
        cy.wait(2000);

        // captura estado final das atividades no card
        cy.screenshot('01-Ativ_StatusFinal',{overwrite: true});
        // Aguarda 2 segundos
        cy.wait(2000);

    });
});