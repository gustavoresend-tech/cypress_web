// DADO: que estou na pagina de detalhamento de um card/precatório aba "Atividades"
// QUANDO: clico no btn "Criar atividade"
// E: seleciono a atividade "Validação de dados bancários"
// E: clico no btn "Iniciar"
// ENTAO: deve ser realizada uma validação básica de dados bancários

describe('Validar "Criar Atividades"', () => {
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
        cy.contains('Teste-QA - Validação de dados bancários').click();
        cy.wait(2000); // Aguarda 2 segundos
        // Clicar criar atividades
        cy.get('#btn-link-para-criar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        cy.get('#input-filtrar-nova-atividade').type('Validação de dados bancários');
        cy.wait(1000); // Aguarda 1 segundos
        cy.get(':nth-child(19) > :nth-child(1) > .form-check > .form-check-label').click();
        cy.wait(1000); // Aguarda 1 segundos
        cy.get('#btn-salvar-cadastro-novas-atividades').click();
        cy.wait(3000); // Aguarda 1 segundos
        // clicar em "Validação de dados bancários"
        cy.get('#atividades').contains('Documentos preliminares').click();

        // clica no btn "Iniciar"
        cy.get('#btn-iniciar-atividade').click();
        // Verifica existência dos campos | ENVIO, STATUS, RETORNO
        cy.get('#atividades > .card > :nth-child(3) > :nth-child(1) > div > :nth-child(1)')
        .contains("ENVIO");
        cy.get(':nth-child(2) > [style="min-width: 200px"] > :nth-child(1)')
        .contains("STATUS");
        cy.get('.card > :nth-child(3) > .col > .m-0')
        .contains("RETORNO");
        // Finaliza Atividade
        cy.get('#btn-finalizar-atividade').click();
        //Preenche modal de observação
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('08-Conferencia final',{overwrite: true});
        cy.wait(2000); // Aguarda 1 segundos
    });
});