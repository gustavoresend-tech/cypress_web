// DADO: que estou logado e na pagina de detalhamento de um card/precatório
// QUANDO: clico na opção "Dados"
// E: Seleciono a opção "Crédito"
// ENTAO: devem ser exibidas os campos da aba Crédito

describe('Validar Edição de Dados - CRÉDITO', () => {
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

    // Validar "Edição de Dados - CRÉDITO'

    it('Validar Edição de Dados - CRÉDITO', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA - NAO USAR (Automação)').click();

        // Clica aba dados/proposta
        cy.get('#dados-operacao-tab').click();
        cy.get('#btn-tab-dados-proposta').click();
        cy.wait(1000); // Aguarda 1 segundos
        cy.get('#btn-tab-dados-credito').click();
        cy.screenshot('10-Dados_Credito',{overwrite: true});

        // Valida se os campos da aba proposta estão presentes

        // Precatório
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(2) > .text-label')
        .contains("Precatório");

        // Processo
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(3) > .text-label')
        .contains("Processo");

        // Valor de face
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(4) > .text-label')
        .contains("Valor de face");

        // Esfera
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(5) > .text-label')
        .contains("Esfera");

        // Tribunal
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(6) > .text-label')
        .contains("Tribunal");

        // Vencimento
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(7) > .text-label')
        .contains("Vencimento");

        // Ente devedor
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(8) > .text-label')
        .contains("Ente devedor");

        // Orgão devedor
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(9) > .text-label')
        .contains("Orgão devedor");

        // Data de autuação do precatório
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(10) > .text-label')
        .contains("Data de autuação do precatório");

        // Tipo de crédito
        cy.get(':nth-child(1) > .card > :nth-child(11) > .text-label')
        .contains("Tipo de crédito");

        // Data base
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(12) > .text-label')
        .contains("Data base");

        // Nome
        cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(1) > :nth-child(2) > .text-label')
        .contains("Nome");

        // CPF
        cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(1) > :nth-child(3) > .text-label')
        .contains("CPF");

        // OAB
        cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(1) > :nth-child(4) > .text-label')
        .contains("OAB");

        // Informações para recebimento
        cy.get('.mb-4 > :nth-child(2) > .text-label')
        .contains("Informações para recebimento");

        // Natureza da ação
        cy.get('.mb-4 > :nth-child(3) > .text-label')
        .contains("Natureza da ação");
        
        // Número do juízo
        cy.get('.mb-4 > :nth-child(4) > .text-label')
        .contains("Número do juízo");

        // Descritivo do juízo
        cy.get('.mb-4 > :nth-child(5) > .text-label')
        .contains("Descritivo do juízo");

        // Comarca/seção judiciária
        cy.get('.mb-4 > :nth-child(6) > .text-label')
        .contains("Comarca/seção judiciária");

        // Classificação do titular
        cy.get('.mb-4 > :nth-child(7) > .text-label')
        .contains("Classificação do titular");

        // Ação coletiva
        cy.get('.mb-4 > :nth-child(8) > .text-label')
        .contains("Ação coletiva");

        // Processo DEPRE
        cy.get('.mb-4 > :nth-child(9) > .text-label')
        .contains("Processo DEPRE");

        // Processo SEI
        cy.get('.mb-4 > :nth-child(10) > .text-label')
        .contains("Processo SEI");

        // EC-62
        cy.get('.mb-4 > :nth-child(11) > .text-label')
        .contains("EC-62");

        // Senha de acesso
        cy.get('.mb-4 > :nth-child(12) > .text-label')
        .contains("Senha de acesso");


        // // Valida os campos do formulário
        // cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        // cy.wait(1000);
        // cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').click();
        // cy.wait(1000);
        // cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(4) > .form-control').click();
        // cy.wait(1000);
        // cy.get(':nth-child(5) > .form-select').select('Municipal', { force: true });
        // cy.wait(1000);
        // cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(6) > .form-control').click();
        // cy.get(':nth-child(1) > .card > :nth-child(7) > .form-control').click();
        // cy.get(':nth-child(1) > .card > :nth-child(8) > .form-control').click();
        // cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(1) > :nth-child(2) > .form-control').click().clear().type('Testado', { force: true });
        // cy.wait(1000);
        // cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(1) > :nth-child(3) > .form-control').click();
        // cy.wait(1000);
        // cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(1) > :nth-child(4) > .form-control').click().clear().type('123456', { force: true });
        // cy.wait(1000);
        // cy.screenshot('03-Edicao_Crédito',{overwrite: true});
        // cy.get('#btn-salvar-dados-editados').click();
        // //cy.get('#link-voltar-para-todas-etapas').click();

        // // Altera nome do card
        // cy.get('#dados-operacao-tab').click();
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-Dados-Credito_OK{enter}');
        // cy.wait(2000); // Aguarda 2 segundos
        // cy.get('#atividades-tab').click();

    });
});