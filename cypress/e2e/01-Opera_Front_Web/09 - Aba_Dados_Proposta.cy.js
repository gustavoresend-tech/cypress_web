// DADO: que estou logado e na pagina de detalhamento de um card/precatório
// QUANDO: clico na opção "Dados"
// E: Seleciono a opção "Proposta"
// ENTAO: devem ser exibidas os campos da aba Proposta

describe('Validar Edição de Dados - PROPOSTA', () => {
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

    // Validar "Edição de Dados - PROPOSTA'

    it('Validar Edição de Dados - PROPOSTA', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA - NAO USAR (Automação)').click();

        // Clica aba dados/proposta
        cy.get('#dados-operacao-tab').click();
        cy.get('#btn-tab-dados-proposta').click();
        cy.wait(1000); // Aguarda 1 segundos
        cy.screenshot('09-Dados_Proposta',{overwrite: true});

        // Valida se os campos da aba proposta estão presentes

        // Data do aceite
        cy.get(':nth-child(1) > .d-flex > .text-secondary')
        .contains("Data do aceite");

        // Negociador
        cy.get('.justify-content-between > :nth-child(2) > .d-flex > .text-secondary')
        .contains("Negociador");
        
        // Valor a vista
        cy.get('.col-12 > .text-3')
        .contains("Valor a vista");

        // Intermediário
        cy.get('.mt-3 > :nth-child(1) > :nth-child(2) > .text-label')
        .contains("Intermediário");

        // Patrono
        cy.get('.mt-3 > :nth-child(2) > :nth-child(2) > .text-label')
        .contains("Patrono");

        // Nome do intermediário
        cy.get('.mt-3 > :nth-child(1) > :nth-child(3) > .text-label')
        .contains("Nome do intermediário");

        // Nome do patrono
        cy.get('.mt-3 > :nth-child(2) > :nth-child(3) > .text-label')        
        .contains("Nome do patrono");

        // // Pagamento
        // cy.get('.col-12 > .table-responsive > .table > thead > tr > :nth-child(1)')
        // .contains("Pagamento");

        // // Valor
        // cy.get('.col-12 > .table-responsive > .table > thead > tr > :nth-child(2)')
        // .contains("Valor");

        // // Data
        // cy.get('.col-12 > .table-responsive > .table > thead > tr > :nth-child(3)')
        // .contains("Data");

        // cy.get(':nth-child(1) > :nth-child(2) > .form-select').select('Não', { force: true });
        // cy.get(':nth-child(1) > :nth-child(2) > .form-select').select('Sim', { force: true });
        // cy.wait(1000); // Aguarda 1000 milissegundos (3 segundos)
        // cy.get('.mt-3 > :nth-child(2) > :nth-child(2) > .form-select').select('Não', { force: true });
        // cy.get('.mt-3 > :nth-child(2) > :nth-child(2) > .form-select').select('Sim', { force: true });
        // cy.get('.mt-3 > :nth-child(1) > :nth-child(3) > .form-control').click().clear().type('Testado', { force: true });
        // cy.get('.mt-3 > :nth-child(2) > :nth-child(3) > .form-control').click().clear().type('Testado', { force: true });
        // cy.screenshot('03-Edicao_Proposta',{overwrite: true});
        // cy.get('#btn-salvar-dados-editados').click();

        // // Altera nome do card
        // cy.get('#dados-operacao-tab').click();
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-Dados-Proposta_OK{enter}');
        // cy.wait(2000); // Aguarda 2 segundos
        // cy.get('#atividades-tab').click();

    });

});