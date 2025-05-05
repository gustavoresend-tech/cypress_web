// DADO: que estou logado na plataforma Opera web
// E: preciso Verifica os Detalhes da operação de um card
// QUANDO: entro na tela inicial
// E: Acesso um card / Operação
// ENTAO: os campos relacionados devem estar disponíveis

describe('Verifica Detalhes da operação', () => {
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

    it('Verifica Detalhes da operação', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

        // Detalhes da Operação
        cy.get('.breadcrumb > .active').should('be.visible');

        // ABAS
        cy.get('#atividades-tab').should('be.visible');
        cy.get('#dados-operacao-tab').should('be.visible');
        cy.get('#estudo-processo-tab').should('be.visible');
        cy.get('#todos-arquivos-tab').should('be.visible');

        // CARD
        cy.get('.sidebar-detalhes-operacao > .card').should('be.visible');
        // Etapa
        cy.get('.p-2 > .text-3').should('be.visible');
        // Nome do card
        cy.get('.g-2 > .col > .text-3').should('be.visible');
        // data
        cy.get('.ds-badge > .d-flex').should('be.visible');
        // proposta
        cy.get('.background-2 > .text-3').should('be.visible');

        // BTN´S AÇÃO
        // Todas etapas
        cy.get('#link-voltar-para-todas-etapas').should('be.visible');
        // Reprovar
        cy.get('#btn-abrir-modal-reprovar-operacao').should('be.visible');
        // Criar atividade
        cy.get('#btn-link-para-criar-atividade').should('be.visible');
        // Pular Etapas
        cy.get('#btn-abrir-modal-pular-etapa').should('be.visible');
        // Menu operações
        cy.get('.row > :nth-child(1) > .btn > .d-flex').should('be.visible');

        // COLUNAS
        // Atividades
        cy.get('#atividades > .table-responsive > .table > thead > tr > :nth-child(1)').should('be.visible');

        // Criação
        cy.get('#atividades > .table-responsive > .table > thead > tr > :nth-child(2)').should('be.visible');

        // Status
        cy.get('#atividades > .table-responsive > .table > thead > tr > :nth-child(3)').should('be.visible');

        // Responsável
        cy.get('#atividades > .table-responsive > .table > thead > tr > :nth-child(4)').should('be.visible');

        // Captura print para evidencia
        cy.screenshot('02-Detalhes-Operacao',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos

            // Captura print para evidencia
    cy.screenshot('01-Grupos e Etapas',{overwrite: true});
    cy.wait(1000); // Aguarda 1 segundos


    });
});