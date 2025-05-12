// DADO: que estou na página de detalhamento de uma operação
// QUANDO: clico na aba "Dados"
// E: Seleciono a opção "Titular"
// ENTAO: devem ser exibidas os campos definidos para esse tela

// Definição de campos AQUI

//


describe('Verifica Campos Aba "TITULAR"', () => {
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
            cy.wait(2000); // aguarda 2 segundos
            cy.get('[type="submit"]').click();
            cy.wait(2000); // aguarda 2 segundos
            cy.get('[id="idSIButton9"]').click();
        });
    });

    it('Verifica Campos Aba "TITULAR"', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();
        cy.wait(1000); // Aguarda 1 segundos

        // Clica Dados/Titular
        cy.get('#dados-operacao-tab').click();
        cy.wait(1000); // Aguarda 1 segundos
        // Captura print para evidencia        
        cy.screenshot('04-Aba Dados_Titular',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos

        // Valida se os campos da aba titular estão presentes

        // GRUPO INFORMAÇÕES PESSOAIS

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

        // GRUPO CONTATO
        
        // Telefone
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(12) > .text-label')
        .contains("Telefone")
        
        // E-mail
        cy.get(':nth-child(13) > .text-label')
        .contains("E-mail")

        // GRUPO ENDERECO
        
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

        // GRUPO DADOS BANCARIOS
        
        // Banco
        cy.get('.mt-3 > :nth-child(2) > :nth-child(1) > .input-group-readonly-edit > .text-label')
        .contains("Banco")
        
        // Código do banco
        cy.get('.mt-3 > :nth-child(2) > :nth-child(2) > .input-group-readonly-edit > .text-label')
        .contains("Código do banco")
        
        // Agência
        cy.get('.mt-3 > :nth-child(3) > :nth-child(1) > .input-group-readonly-edit > .text-label')
        .contains("Agência")
        
        // Digito
        cy.get('.mt-3 > :nth-child(3) > :nth-child(2) > .input-group-readonly-edit > .text-label')
        .contains("Dígito")
        
        // Conta
        cy.get(':nth-child(4) > :nth-child(1) > .input-group-readonly-edit > .text-label')
        .contains("Conta")
        
        // Digito
        cy.get(':nth-child(4) > :nth-child(2) > .input-group-readonly-edit > .text-label')
        .contains("Dígito")
        
        // Tipo de Conta
        cy.get('.mb-4 > :nth-child(2) > .mt-3 > :nth-child(5) > .text-label')
        .contains("Tipo de conta")
        
    });
});