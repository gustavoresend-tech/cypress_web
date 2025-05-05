// DADO: que estou logado na plataforma Opera web
// E: preciso Verificar a disponibilidade dos grupos e etapas
// QUANDO: entro na tela inicial
// ENTAO: os grupos de etapas devem estar visíveis
// E: as etapas devem estar visíveis

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
        cy.get('[style="background-color: rgba(159, 159, 159, 0.1)"] > .row.py-1 > .col > .text-pjus').contains('Análise preliminar');
        // Verifica as etapas do grupo
        cy.get('[style="background-color: rgba(159, 159, 159, 0.1)"] > .h-100 > :nth-child(1) > :nth-child(1) > .px-2 > .justify-content-between > :nth-child(1) > .m-0')
        .contains('Documentos preliminares');
        cy.get('[style="background-color: rgba(159, 159, 159, 0.1)"] > .h-100 > :nth-child(1) > :nth-child(2) > .px-2 > .justify-content-between > :nth-child(1) > .m-0')
        .contains('Conferência inicial');
        cy.get('[style="background-color: rgba(159, 159, 159, 0.1)"] > .h-100 > :nth-child(1) > :nth-child(3) > .px-2 > .justify-content-between > :nth-child(1) > .m-0')
        .contains('Avaliação do ativo');    

        // Verifica o grupo de Etapas: Análise definitiva
        cy.get('[style="background-color: rgba(254, 195, 60, 0.1)"] > .row > .col > .text-pjus').contains('Análise definitiva');
        // Verifica as etapas do grupo
        cy.get('[style="background-color: rgba(254, 195, 60, 0.1)"] > .h-100 > :nth-child(1) > :nth-child(1) > .px-2 > .justify-content-between > :nth-child(1) > .m-0')
        .contains('Parecer do titular');
        cy.get('[style="background-color: rgba(254, 195, 60, 0.1)"] > .h-100 > :nth-child(1) > :nth-child(2) > .px-2 > .justify-content-between > :nth-child(1) > .m-0')
        .contains('Providências jurídicas'); 

        // Verifica o grupo de Etapas: Diligências
        cy.get('[style="background-color: rgba(8, 88, 197, 0.1)"] > .row > .col').contains('Diligências');
        cy.get('[style="background-color: rgba(8, 88, 197, 0.1)"] > .h-100 > :nth-child(1) > :nth-child(1) > .px-2 > .justify-content-between > :nth-child(1) > .m-0')
        .contains('Conferência final');
        cy.get('[style="background-color: rgba(8, 88, 197, 0.1)"] > .h-100 > :nth-child(1) > :nth-child(2) > .px-2 > .justify-content-between > :nth-child(1) > .m-0')    
        .contains('Parecer jurídico'); 

        // Verifica o grupo de Etapas: Formalização
        cy.get('[style="background-color: rgba(14, 133, 87, 0.1)"] > .row > .col > .text-pjus').contains('Formalização');
        cy.get('[style="background-color: rgba(14, 133, 87, 0.1)"] > .h-100 > :nth-child(1) > :nth-child(1) > .px-2 > .justify-content-between > :nth-child(1) > .m-0')
        .contains('Confecção de documentos'); 
        cy.get('[style="background-color: rgba(14, 133, 87, 0.1)"] > .h-100 > :nth-child(1) > :nth-child(2) > .px-2 > .justify-content-between > :nth-child(1) > .m-0')
        .contains('Assinatura'); 
        cy.get('[style="background-color: rgba(14, 133, 87, 0.1)"] > .h-100 > :nth-child(1) > :nth-child(3) > .px-2 > .justify-content-between > :nth-child(1) > .m-0')
        .contains('Protocolo de cessão');
        cy.get(':nth-child(4) > .px-2 > .justify-content-between > :nth-child(1) > .m-0')
        .contains('Pagamento');

        // Captura print para evidencia
        cy.screenshot('01-Grupos e Etapas',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos


    });
});