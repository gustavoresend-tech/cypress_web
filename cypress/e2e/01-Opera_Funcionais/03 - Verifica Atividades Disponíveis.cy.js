// DADO: que estou logado na plataforma Opera web
// E: preciso incluir novas atividades de forma manual
// QUANDO: entro no detalhamento de um card
// E: clico no btn "Criar Atividade"
// ENTAO: as atividades devem estar disponíveis para inserção manual

describe('Verifica atividades para input manual', () => {
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
            cy.wait(1000); // aguarda 1 segundos
            // Insere e-senha e submete
            cy.get('[name="passwd"]').type(`${Cypress.env('password')}`, { force: true });
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[type="submit"]').click();
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[id="idSIButton9"]').click();
        });
    });

    it('Verifica atividades para input manual', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();
        // Clica em "Criar Atividade"
        cy.get('#btn-link-para-criar-atividade').click();


        // Atividades disponíveis para input manual
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Assinaturas no cartório');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('da proposta');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Comitê de deliberação');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Parecer jurídico');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Estudo do processo judicial');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Conferência do ofício requisitório');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Validação XP');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Compliance interno');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Aprovação do titular');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Cálculo');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Ajuste especial');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Informações para o compliance');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Escritura de cessão');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Certificado digital');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Ligação de confirmação');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Advogados');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Pagamento das guias de tributo do titular');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Validação bancária');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Comitê de Aprovação');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Compliance externo');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Análise do cedente');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Conferência final');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Atestado de capacidade');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Termos e declarações');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Documentoscopia');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Pagamento do titular');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Informações sobre CNDs');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Protocolo de cessão');
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Guias de tributo');
    });
});