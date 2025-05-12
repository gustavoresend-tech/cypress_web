// DADO: que estou logado na plataforma Opera web
// E: preciso verificar as atividades disponíveis na função: Criação de Atividade
// QUANDO: entro no detalhamento de um card
// E: clico no btn "Criar Atividade"
// ENTAO: as atividades devem estar disponíveis para seleção

describe('Verifica Atividades Disponíveis (Criar Atividades)', () => {
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

    it('Verifica Atividades Disponíveis (Criar Atividades)', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();
        // Clica em "Criar Atividade"
        cy.get('#btn-link-para-criar-atividade').click();


        // Atividades disponíveis função: Criação de Atividade
        // OS comandos abaixo verificam a existencias das atividades
        // As atiidades ficam disponíveis para inserção manual
        // O nome de cada atividade e pesquisado e verificado no grid de exibição na tela de criação de atividade

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

        // Pesquisa atividade "Teste QA"
        cy.get('.col-auto > .form-control').type('Atividade Teste QA');
        cy.get(':nth-child(2) > :nth-child(1) > .form-check > .form-check-label').click();
        cy.wait(2000); // aguarda 2 segundos

        // Clica no btn "Confirmar"
        cy.get('#btn-salvar-cadastro-novas-atividades').click();
        cy.wait(2000); // aguarda 2 segundos

        // Captura print para evidencia        
        cy.screenshot('03-Atividade Teste QA',{overwrite: true});
    });
});