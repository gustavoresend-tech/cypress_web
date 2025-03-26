    
    // DADO: que estou na pagina de detalhamento de um precatório/lead
    // QUANDO: clico na opção "Dados"
    // ENTAO: devem ser exibidas as abas: Titular | Proposta | Crédito
    // E: os campos de cada aba devem ser exibidos
    // E: deve ser possível editar os dados
    // E: deve ser possivel salvar os dados editados

describe('Validar "Edição de Dados"', () => {
    beforeEach(() => {
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Aguarda 3 segundos
            cy.wait(3000);
            // Volta para a origem, página pjus board
            cy.visit('https://opera.hml.pjus.com.br/board');
            cy.viewport(1280, 720);
            cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}{enter}`);
            cy.get('[name="passwd"]').type(`${Cypress.env('password')}{enter}`);
            cy.get('[type="submit"]').type('{enter}');
            cy.get('#idBtn_Back').click();
        });
    });

    it('Validar "Edição de Dados - TITULAR', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA').click();
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
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').clear().type('{enter}');
        cy.contains("Campo obrigatório");
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        cy.screenshot('03-CPF_CNPJ-Campo-Obrigatorio',{overwrite: true});
        cy.wait(3000); // Aguarda 3000 milissegundos (5 segundos)
        cy.reload();
        cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();

        // Simula Campo Obrigatorio: Telefone
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(12) > .form-control').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(12) > .form-control').clear().type('{enter}');
        cy.contains("Campo obrigatório");
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(12) > .form-control').click();
        cy.screenshot('03-Telefone-Campo-Obrigatorio',{overwrite: true});
        cy.wait(3000); // Aguarda 3000 milissegundos (5 segundos)
        cy.reload();
        cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();

        // Simula Campo Inválido: CPF/CNPJ
        cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').clear().type('{enter}');
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').type('379.901.052-2{enter}');
        cy.contains("O CPF informado é inválido.");
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        cy.screenshot('03-CPF_CNPJ-Campo-Inválido',{overwrite: true});
        cy.wait(3000); // Aguarda 3000 milissegundos (5 segundos)
        cy.reload();
        cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();

        // Simula edição e gravação: Campos a
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().type('-E');
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').click();
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
    });

    // Validar "Edição de Dados - PROPOSTA'

    it('Validar "Edição de Dados - PROPOSTA', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA').click();
        // Acessa aba dados/proposta
        cy.get('#dados-operacao-tab').click();
        cy.get('#btn-tab-dados-proposta').click();
        cy.wait(3000); // Aguarda 3000 milissegundos (3 segundos)
        cy.get(':nth-child(1) > :nth-child(2) > .form-select').select('Não', { force: true });
        cy.get(':nth-child(1) > :nth-child(2) > .form-select').select('Sim', { force: true });
        cy.wait(3000); // Aguarda 3000 milissegundos (3 segundos)
        cy.get('.mt-3 > :nth-child(2) > :nth-child(2) > .form-select').select('Não', { force: true });
        cy.get('.mt-3 > :nth-child(2) > :nth-child(2) > .form-select').select('Sim', { force: true });
        cy.get('.mt-3 > :nth-child(1) > :nth-child(3) > .form-control').click().clear().type('Testado', { force: true });
        cy.get('.mt-3 > :nth-child(2) > :nth-child(3) > .form-control').click().clear().type('Testado', { force: true });
        cy.screenshot('03-Edicao_Proposta',{overwrite: true});
        cy.get('#btn-salvar-dados-editados').click();
    });

    // Validar "Edição de Dados - CRÉDITO'

    it('Validar "Edição de Dados - CRÉDITO', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA').click();
        // Acessa aba dados/proposta
        cy.get('#dados-operacao-tab').click();
        cy.get('#btn-tab-dados-proposta').click();
        cy.wait(3000); // Aguarda 3000 milissegundos (3 segundos)
        cy.get('#btn-tab-dados-credito').click();
        // Valida os campos do formulário
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').click();
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(4) > .form-control').click();
        cy.get(':nth-child(5) > .form-select').select('Municipal', { force: true });
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(6) > .form-control').click();
        cy.get(':nth-child(1) > .card > :nth-child(7) > .form-control').click();
        cy.get(':nth-child(1) > .card > :nth-child(8) > .form-control').click();
        cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(1) > :nth-child(2) > .form-control').click().clear().type('Testado', { force: true });
        cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(1) > :nth-child(3) > .form-control').click();
        cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(1) > :nth-child(4) > .form-control').click().clear().type('123456', { force: true });
        cy.screenshot('03-Edicao_Crédito',{overwrite: true});
        cy.get('#btn-salvar-dados-editados').click();
        //cy.get('#link-voltar-para-todas-etapas').click();
    });

});