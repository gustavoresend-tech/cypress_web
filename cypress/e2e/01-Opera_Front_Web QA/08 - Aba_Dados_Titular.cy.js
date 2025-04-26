// DADO: que estou logado e na pagina de detalhamento de um card/precatório
// QUANDO: clico na opção "Dados"
// E: Seleciono a opção "Titular"
// ENTAO: devem ser exibidas os campos da aba Titular

describe('Validar Edição de Dados - TITULAR', () => {
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

    it('Validar Edição de Dados - TITULAR', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA - NAO USAR (Automação)').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia        
        cy.screenshot('08-Tela-Inicial',{overwrite: true});

        // Clica Dados/Titular
        cy.get('#dados-operacao-tab').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia        
        cy.screenshot('08-Dados-Titular',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos

        // Valida se os campos da aba titular estão presentes

        // Titular
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .text-label')
        .contains("Titular")
        .should('be.visible');
        cy.wait(1000); // Aguarda 1 segundos

        // CPF/CNPJ
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(3) > .text-label')
        .contains("CPF/CNPJ")
        .should('be.visible');
        cy.wait(1000); // Aguarda 1 segundos
        
        // Data de nascimento
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(4) > .text-label')
        .contains("Data de nascimento")
        .should('be.visible');
        cy.wait(1000); // Aguarda 1 segundos
        
        // Nome do pai
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(5) > .text-label')
        .contains("Nome do pai")
        .should('be.visible');
        cy.wait(1000); // Aguarda 1 segundos
        
        // Nome do mãe
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(6) > .text-label')
        .contains("Nome do mãe")
        .should('be.visible');
        cy.wait(1000); // Aguarda 1 segundos
        
        // Tipo de pessoa
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(7) > .text-label')
        .contains("Tipo de pessoa")
        .should('be.visible');
        cy.wait(1000); // Aguarda 1 segundos
        
        // Estado civil
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(8) > .text-label')
        .contains("Estado civil")
        .should('be.visible');
        cy.wait(1000); // Aguarda 1 segundos
        
        // Regime de bens
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(9) > .text-label')
        .contains("Regime de bens")
        .should('be.visible');
        cy.wait(1000); // Aguarda 1 segundos
        
        // Cônjuge
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(10) > .text-label')
        .contains("Cônjuge")
        cy.wait(1000); // Aguarda 1 segundos
        
        // Telefone
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(12) > .text-label')
        .contains("Telefone")
        cy.wait(1000); // Aguarda 1 segundos
        
        // E-mail
        cy.get(':nth-child(13) > .text-label')
        .contains("E-mail")
        cy.wait(1000); // Aguarda 1 segundos
        
        // Endereço
        cy.get('#tab-dados-titular > .row > :nth-child(2) > :nth-child(1) > :nth-child(2) > .text-label')
        .contains("Endereço")
        cy.wait(1000); // Aguarda 1 segundos
        
        // Número
        cy.get('#tab-dados-titular > .row > :nth-child(2) > :nth-child(1) > :nth-child(3) > .text-label')
        .contains("Número")
        cy.wait(1000); // Aguarda 1 segundos
        
        // Bairro
        cy.get('#tab-dados-titular > .row > :nth-child(2) > :nth-child(1) > :nth-child(4) > .text-label')
        .contains("Bairro")
        cy.wait(1000); // Aguarda 1 segundos
        
        // Complemento
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(5) > .text-label')
        .contains("Complemento")
        cy.wait(1000); // Aguarda 1 segundos
        
        // CEP
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(6) > .text-label')
        .contains("CEP")
        cy.wait(1000); // Aguarda 1 segundos
        
        // Cidade
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(7) > .text-label')
        .contains("Cidade")
        cy.wait(1000); // Aguarda 1 segundos
        
        // Estado
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(8) > .text-label')
        .contains("Estado")
        cy.wait(1000); // Aguarda 1 segundos
        
        // Banco
        cy.get('.mt-3 > :nth-child(2) > :nth-child(1) > .input-group-readonly-edit > .text-label')
        .contains("Banco")
        cy.wait(1000); // Aguarda 1 segundos
        
        // Código do banco
        cy.get('.mt-3 > :nth-child(2) > :nth-child(2) > .input-group-readonly-edit > .text-label')
        .contains("Código do banco")
        cy.wait(1000); // Aguarda 1 segundos
        
        // Agência
        cy.get('.mt-3 > :nth-child(3) > :nth-child(1) > .input-group-readonly-edit > .text-label')
        .contains("Agência")
        cy.wait(1000); // Aguarda 1 segundos
        
        // Digito
        cy.get('.mt-3 > :nth-child(3) > :nth-child(2) > .input-group-readonly-edit > .text-label')
        .contains("Dígito")
        cy.wait(1000); // Aguarda 1 segundos
        
        // Conta
        cy.get(':nth-child(4) > :nth-child(1) > .input-group-readonly-edit > .text-label')
        .contains("Conta")
        cy.wait(1000); // Aguarda 1 segundos
        
        // Digito
        cy.get(':nth-child(4) > :nth-child(2) > .input-group-readonly-edit > .text-label')
        .contains("Dígito")
        cy.wait(1000); // Aguarda 1 segundos
        
        // Tipo de Conta
        cy.get('.mb-4 > :nth-child(2) > .mt-3 > :nth-child(5) > .text-label')
        .contains("Tipo de conta")
        cy.wait(1000); // Aguarda 1 segundos
        
    });
});