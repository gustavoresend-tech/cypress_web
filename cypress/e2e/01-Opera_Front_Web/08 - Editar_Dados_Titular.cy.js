// DADO: que estou logado e na pagina de detalhamento de um precatório/lead
// QUANDO: clico na opção "Dados"
// ENTAO: devem ser exibidas as abas: Titular | Proposta | Crédito
// E: os campos da aba Titular devem estar visíveis
// E: deve ser possível editar os dados
// E: deve ser possível salvar os dados editados

describe('Validar Edição de Dados - TITULAR', () => {
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

    it('Validar Edição de Dados - TITULAR', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Conferência inicial').click();
        cy.screenshot('03-Tela-Inicial',{overwrite: true});

        // Clicar Dados/Titular
        cy.get('#dados-operacao-tab').click();
        cy.wait(3000); // Aguarda 3000 milissegundos (3 segundos)
        cy.screenshot('03-Dados-Titular',{overwrite: true});

        // Simula Campo Obrigatorio: Titular
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        cy.wait(3000); // Aguarda 3000 milissegundos (3 segundos)
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').clear().type('{enter}');
        cy.contains("Campo obrigatório");
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        cy.screenshot('03-Titular-Campo-Obrigatorio',{overwrite: true});
        cy.wait(3000); // Aguarda 3000 milissegundos (3 segundos)
        cy.reload();
        cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();

        // Simula Campo Obrigatorio: CPF/CNPJ
        cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();
        cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').click();
        cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').clear().type('{enter}');
        cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        cy.contains("Campo obrigatório");
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        cy.screenshot('03-CPF_CNPJ-Campo-Obrigatorio',{overwrite: true});
        cy.wait(3000); // Aguarda 3000 milissegundos (5 segundos)
        cy.reload();
        cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();

        // Simula Campo Obrigatorio: Telefone
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(12) > .form-control').click();
        cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(12) > .form-control').clear().type('{enter}');
        cy.contains("Campo obrigatório");
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(12) > .form-control').click();
        cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        cy.screenshot('03-Telefone-Campo-Obrigatorio',{overwrite: true});
        cy.wait(3000); // Aguarda 3000 milissegundos (5 segundos)
        cy.reload();
        cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();
        cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();

        // Simula Campo Inválido: CPF/CNPJ
        cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').click();
        cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').clear().type('{enter}');
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').type('379.901.052-2{enter}');
        cy.contains("O CPF informado é inválido.");
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        cy.screenshot('03-CPF_CNPJ-Campo-Inválido',{overwrite: true});
        cy.wait(3000); // Aguarda 3000 milissegundos (5 segundos)
        cy.reload();
        cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();
        cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();

        // Simula edição e gravação: Campos a
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().type('-E');
        cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').click();
        cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        cy.screenshot('03-Edicao campo Titular',{overwrite: true});
        cy.get('#btn-salvar-dados-editados').click();
        cy.wait(3000); // Aguarda 3000 milissegundos (3 segundos)
        cy.reload();
        cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        cy.screenshot('03-Edicao Resultado campo Titular',{overwrite: true});
        // cy.get('#btn-abrir-modal-pular-etapa').click();
        // cy.screenshot('02-PularEtapa-Modal',{overwrite: true});
        // cy.get('#btn-avancar-etapa').click();
        // cy.reload();

        // Altera nome do card
        cy.get('#dados-operacao-tab').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-Titular_OK{enter}');
        cy.wait(2000); // Aguarda 2 segundos
        cy.get('#atividades-tab').click();

    });
});