// DADO: que estou na pagina de detalhamento de um card/precatório aba "Atividades"
// QUANDO: clico no btn "Criar atividade"
// E: seleciono uma atividade disponível
// E: clico no btn "Confirmar"
// ENTAO: as atividades selecionadas devem ser inseridas no grid de atividades do card/precatório

    describe('Validar "Criar Atividades"', () => {
    beforeEach(() => {
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit('https://opera.qa.pjus.com.br/board');
            // Configura exibição da tela de teste
            cy.viewport(1280, 720);
            // Insere e-mail e submete
            cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}`, { force: true });
            cy.get('[type="submit"]').click();
            cy.wait(2000); // aguarda 2 segundos
            // Insere e-senha e submete
            cy.get('[name="passwd"]').type(`${Cypress.env('password')}`, { force: true });
            cy.wait(2000); // aguarda 2 segundos
            cy.get('[type="submit"]').click();
            cy.wait(2000); // aguarda 2 segundos
            cy.get('[id="idSIButton9"]').click();
        });
    });

    it('Validar "Criar Atividades', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA - NAO USAR (Automação)').click();
        cy.wait(2000); // Aguarda 2 segundos
        // Clicar criar atividades
        cy.get('#atividades-tab').click();
        cy.wait(1000); // Aguarda 1 segundos
        cy.get('#btn-link-para-criar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('16-Criar_Atividades',{overwrite: true});
        cy.contains('Atividade Teste QA').click();
        // Captura print para evidencia
        cy.screenshot('16-Atividade_QA',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos
        cy.get('#btn-salvar-cadastro-novas-atividades').click();
        // Captura print para evidencia
        cy.screenshot('16-Atividade_inserida',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos

    });
});