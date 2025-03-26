    
    // DADO: que estou na pagina de detalhamento de um precatório/lead aba "Atividades"
    // QUANDO: clico no btn "Criar atividade"
    // E: seleciono uma atividade disponível
    // E: clico no btn "Confirmar"
    // ENTAO: as atividades selecionadas devem ser inseridas no grid de atividades do card

    describe('Validar "Criar Atividades"', () => {
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

    it('Validar "Criar Atividades', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA').click();
        cy.wait(2000); // Aguarda 2 segundos
        // Clicar criar atividades
        cy.get('#atividades-tab').click();
        cy.wait(2000); // Aguarda 2 segundos
        cy.get('#btn-link-para-criar-atividade').click();
        cy.wait(2000); // Aguarda 2 segundos
        cy.screenshot('07-Criar_Atividades',{overwrite: true});
        cy.contains('teste').click();
        cy.screenshot('07-Atividade_QA',{overwrite: true});
        cy.wait(2000); // Aguarda 2 segundos   
        cy.get('#btn-salvar-cadastro-novas-atividades').click();
        cy.screenshot('07-Atividade_inserida',{overwrite: true});
        cy.wait(2000); // Aguarda 2 segundos

    });
});