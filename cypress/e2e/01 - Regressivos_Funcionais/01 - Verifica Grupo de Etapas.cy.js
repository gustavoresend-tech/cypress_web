// DADO: que estou logado na plataforma Opera
// E: preciso verificar o layout de apresentação dos grupos de etapas e etapas
// QUANDO: entro na tela inicial
// ENTAO: os grupos de etapas devem estar visíveis
// E: as etapas devem estar visíveis dentro dos grupos

// Grupo de Etapa	            Descrição da Etapa

// Análise preliminar	        Documentos preliminares
// Análise preliminar	        Conferência inicial
// Análise preliminar	        Avaliação do ativo
// Diligências	                Providências jurídicas
// Diligências	                Parecer do titular
// Análise definitiva	        Conferência final
// Análise definitiva	        Parecer jurídico
// Formalização	                Confecção de documentos
// Formalização	                Assinatura
// Formalização	                Protocolo de cessão
// Formalização	                Pagamento


describe('Verifica Grupo de Etapas e Etapas', () => {
    Cypress.config('pageLoadTimeout', 15000);
    beforeEach(() => {
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit(Cypress.env('URL_OPERA') + '/board');
            // Configura exibição da tela de teste
            cy.viewport(1280, 720);
            // Insere e-mail e submete
            cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}`, { force: true });
            cy.get('[type="submit"]').click();
            cy.wait(2000); // aguarda 2 segundos
            // Insere e-senha e submete
            cy.get('#i0118').type(`${Cypress.env('password')}`, { force: true });
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[type="submit"]').click();
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[id="idSIButton9"]').click();
        });
    });

    it('Verifica Grupo de Etapas e Etapas', () => {

        // Verifica o grupo de Etapas: Análise preliminar
        cy.get('[style="background-color: rgba(159, 159, 159, 0.1)"] > .row.py-1 > .col > .text-pjus').should('exist')
        .contains('Análise preliminar');
        // Verifica as etapas do grupo
        cy.get('[style="background-color: rgba(159, 159, 159, 0.1)"] > .h-100 > :nth-child(1) > :nth-child(1) > .px-2 > .justify-content-between > :nth-child(1) > .m-0').should('exist')
        .contains('Documentos preliminares');
        cy.get('[style="background-color: rgba(159, 159, 159, 0.1)"] > .h-100 > :nth-child(1) > :nth-child(2) > .px-2 > .justify-content-between > :nth-child(1) > .m-0').should('exist')
        .contains('Conferência inicial');
        cy.get('[style="background-color: rgba(159, 159, 159, 0.1)"] > .h-100 > :nth-child(1) > :nth-child(3) > .px-2 > .justify-content-between > :nth-child(1) > .m-0').should('exist')
        .contains('Avaliação do ativo');    

        // Verifica o grupo de Etapas: Diligências
        cy.get('[style="background-color: rgba(8, 88, 197, 0.1)"] > .row > .col > .text-pjus').should('exist')
        .contains('Diligências');
        // Verifica as etapas do grupo
        cy.get('[style="background-color: rgba(8, 88, 197, 0.1)"] > .h-100').should('exist')
        .contains('Parecer do titular');
        cy.get('[style="background-color: rgba(8, 88, 197, 0.1)"] > .h-100').should('exist')
        .contains('Providências jurídicas');

        // Verifica o grupo de Etapas: Análise definitiva
        cy.get('[style="background-color: rgba(254, 195, 60, 0.1)"] > .row > .col > .text-pjus').should('exist')
        .contains('Análise definitiva');
        cy.get('[style="background-color: rgba(254, 195, 60, 0.1)"] > .h-100').should('exist')
        .contains('Conferência final');
        cy.get('[style="background-color: rgba(254, 195, 60, 0.1)"] > .h-100').should('exist')
        .contains('Parecer jurídico'); 

        // Verifica o grupo de Etapas: Formalização
        cy.get('[style="background-color: rgba(14, 133, 87, 0.1)"] > .row > .col > .text-pjus').should('exist')
        .contains('Formalização');
        cy.get('[style="background-color: rgba(14, 133, 87, 0.1)"] > .h-100').should('exist')
        .contains('Confecção de documentos'); 
        cy.get('[style="background-color: rgba(14, 133, 87, 0.1)"] > .h-100').should('exist')
        .contains('Assinatura'); 
        cy.get('[style="background-color: rgba(14, 133, 87, 0.1)"] > .h-100').should('exist')
        .contains('Protocolo de cessão');
        cy.get('[style="background-color: rgba(14, 133, 87, 0.1)"] > .h-100').should('exist')
        .contains('Pagamento');

        // Captura print para evidencia
        cy.screenshot('01-Grupos e Etapas',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos


    });
});