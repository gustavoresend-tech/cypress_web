// DADO: que estou logado e na pagina de detalhamento de um precatório/lead
// QUANDO: clico na opção "Dados"
// ENTAO: devem ser exibidas as abas: Titular | Proposta | Crédito
// E: os campos da aba Titular devem estar presentes

describe('Validar Edição de Dados - TITULAR', () => {
    beforeEach(() => {
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit('https://opera.hml.pjus.com.br/board');
            // Configura exibição da tela de teste
            cy.viewport(375, 667);
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
        cy.contains('Teste-QA - NAO USAR (Automação)').click();
        cy.screenshot('03-Tela-Inicial',{overwrite: true});

        // Clica Dados/Titular
        cy.get('#dados-operacao-tab').click();
        cy.wait(1000); // Aguarda 1 segundos
        cy.screenshot('08-Dados-Titular',{overwrite: true});

        // Valida se os campos da aba titular estão presentes

        // Titular
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .text-label')
        .contains("Titular")
        .should('be.visible');

        // CPF/CNPJ
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .text-label')
        .contains("CPF/CNPJ")
        .should('be.visible');

        // Data de nascimento
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(4) > .text-label')
        .contains("Data de nascimento")
        .should('be.visible');

        // Nome do pai
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(5) > .text-label')
        .contains("Nome do pai")
        .should('be.visible');

        // Nome do mãe
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(6) > .text-label')
        .contains("Nome do mãe")
        .should('be.visible');

        // Tipo de pessoa
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(7) > .text-label')
        .contains("Tipo de pessoa")
        .should('be.visible');

        // Estado civil
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(8) > .text-label')
        .contains("Estado civil")
        .should('be.visible');

        // Regime de bens
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(9) > .text-label')
        .contains("Regime de bens")
        .should('be.visible');

        // Cônjuge
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(10) > .text-label')
        .contains("Cônjuge")

        // Telefone
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(12) > .text-label')
        .contains("Telefone")

        // E-mail
        cy.get(':nth-child(13) > .text-label')
        .contains("E-mail")

        // Endereço
        cy.get('#tab-dados-titular > .row > :nth-child(2) > :nth-child(1) > :nth-child(2) > .text-label')
        .contains("Endereço")

        // Número
        cy.get('#tab-dados-titular > .row > :nth-child(2) > :nth-child(1) > :nth-child(3) > .text-label')
        .contains("Número")

        // Bairro
        cy.get('#tab-dados-titular > .row > :nth-child(2) > :nth-child(1) > :nth-child(4) > .text-label')
        .contains("Bairro")

        // Complemento
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(5) > .text-label')
        .contains("Complemento")

        // CEP
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(6) > .text-label')
        .contains("CEP")

        // Cidade
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(7) > .text-label')
        .contains("Cidade")

        // Estado
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(8) > .text-label')
        .contains("Estado")

        // Banco
        cy.get('#tab-dados-titular > .row > :nth-child(2) > .mt-3 > :nth-child(2) > .text-label')
        .contains("Banco")

        // Agência
        cy.get('#tab-dados-titular > .row > :nth-child(2) > .mt-3 > :nth-child(3) > .text-label')
        .contains("Agência")

        // Conta e dígito
        cy.get('#tab-dados-titular > .row > :nth-child(2) > .mt-3 > :nth-child(4) > .text-label')
        .contains("Conta e dígito")

        // // Simula Campo Obrigatorio: Titular
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        // cy.wait(1000); // Aguarda 1000 milissegundos (3 segundos)
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').clear().type('{enter}');
        // cy.contains("Campo obrigatório");
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        // cy.screenshot('03-Titular-Campo-Obrigatorio',{overwrite: true});
        // cy.wait(1000); // Aguarda 1000 milissegundos (3 segundos)
        // cy.reload();
        // cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();

        // // Simula Campo Obrigatorio: CPF/CNPJ
        // cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();
        // cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        // cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').click();
        // cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').clear().type('{enter}');
        // cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        // cy.contains("Campo obrigatório");
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        // cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        // cy.screenshot('03-CPF_CNPJ-Campo-Obrigatorio',{overwrite: true});
        // cy.wait(1000); // Aguarda 1000 milissegundos (5 segundos)
        // cy.reload();
        // cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();

        // // Simula Campo Obrigatorio: Telefone
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(12) > .form-control').click();
        // cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(12) > .form-control').clear().type('{enter}');
        // cy.contains("Campo obrigatório");
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(12) > .form-control').click();
        // cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        // cy.screenshot('03-Telefone-Campo-Obrigatorio',{overwrite: true});
        // cy.wait(1000); // Aguarda 1000 milissegundos (5 segundos)
        // cy.reload();
        // cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();
        // cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();

        // // Simula Campo Inválido: CPF/CNPJ
        // cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        // cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').click();
        // cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').clear().type('{enter}');
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').type('379.901.052-2{enter}');
        // cy.contains("O CPF informado é inválido.");
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        // cy.screenshot('03-CPF_CNPJ-Campo-Inválido',{overwrite: true});
        // cy.wait(1000); // Aguarda 1000 milissegundos (5 segundos)
        // cy.reload();
        // cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();
        // cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();

        // // Simula edição e gravação: Campos a
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        // cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().type('-E');
        // cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .form-control').click();
        // cy.wait(1000); // Aguarda 1000 milissegundos (1 segundos)
        // cy.screenshot('03-Edicao campo Titular',{overwrite: true});
        // cy.get('#btn-salvar-dados-editados').click();
        // cy.wait(1000); // Aguarda 1000 milissegundos (3 segundos)
        // cy.reload();
        // cy.get('#dados-operacao-tab > .d-flex > .ms-2').click();
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click();
        // cy.screenshot('03-Edicao Resultado campo Titular',{overwrite: true});
        // // cy.get('#btn-abrir-modal-pular-etapa').click();
        // // cy.screenshot('02-PularEtapa-Modal',{overwrite: true});
        // // cy.get('#btn-avancar-etapa').click();
        // // cy.reload();

        // // Altera nome do card
        // cy.get('#dados-operacao-tab').click();
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-Dados-Titular_OK{enter}');
        // cy.wait(2000); // Aguarda 2 segundos
        // cy.get('#atividades-tab').click();

    });
});