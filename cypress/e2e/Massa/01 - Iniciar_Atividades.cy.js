
    // DADO: que estou logado na plataforma Opera web
    // E: preciso Iniciar/Aprovar atividades
    // QUANDO: entro em um card/precatório
    // ENTAO: as atividades devem estar visiveis conforme a etapa que o card se encontra
    // E: deverá ser possível iniciar e aprovar cada atividade separadamente

describe('Validar Atividades "Iniciar"', () => {
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

    Cypress._.times(5, () => { // insira a quantidade de vezes para o loop

    it('Validar Iniciar Atividades Timeout', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA-Documentos preliminares').click();
        // Acessa a tab "Atividades"
        cy.get('#atividades-tab > .d-flex > .ms-2').click();

        // Acessa, inicializa e Aprova => "Atualização do registro civil"
        cy.contains('Atualização do registro civil').click();
        // Aguarda 3 segundos
        cy.get('#btn-iniciar-atividade').click();
        //cy.get('#btn-finalizar-atividade').click();
        cy.get('#btn-link-voltar-para-listagem-atividades > .d-flex > ds-icon').click();
        // Aguarda 2 segundos
        cy.wait(1000);

        // Acessa, inicializa e Aprova => "Emissão de CNDs manuais"
        cy.contains('Emissão de CNDs manuais').click();
        // Aguarda 2 segundos
        cy.wait(1000);

        cy.get('#btn-iniciar-atividade').click();
        cy.get('#btn-link-voltar-para-listagem-atividades > .d-flex > ds-icon').click();
        // Aguarda 2 segundos
        cy.wait(1000);

        // Acessa, inicializa e Aprova => "Emissão de CNDs automáticas"
        cy.contains('Emissão de CNDs automáticas').click();
        cy.get('#btn-iniciar-atividade').click();
        cy.get('#btn-link-voltar-para-listagem-atividades > .d-flex > ds-icon').click();
        // Aguarda 2 segundos
        cy.wait(1000);

                // Clicar "Pular Etapas" | Aqui o cliente / lead saira da primeira etapa para última "Pagamento"
                // Vai para etapa: Conferencia inicial
                cy.get('#btn-abrir-modal-pular-etapa').click();
                cy.get('#btn-avancar-etapa').click();
        
                // // Cancelar a ação no modal
                // cy.get('#btn-abrir-modal-pular-etapa').click();
                // cy.get('#btn-fechar-modal-avancar-etapa').click();
                // // Aguarda 3 segundos
        

        // captura estado final das atividades no card
        // Aguarda 2 segundos
    
    })});

});