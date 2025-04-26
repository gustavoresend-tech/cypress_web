// DADO: que estou logado e na pagina de detalhamento de um card/precatório
// QUANDO: clico na opção "Dados"
// E: Seleciono a opção "Crédito"
// ENTAO: devem ser exibidas os campos da aba Crédito

describe('Validar Edição de Dados - CRÉDITO', () => {
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

    // Validar "Edição de Dados - CRÉDITO'

    it('Validar Edição de Dados - CRÉDITO', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA - NAO USAR (Automação)').click();

        // Clica aba dados/proposta
        cy.get('#dados-operacao-tab').click();
        cy.get('#btn-tab-dados-proposta').click();
        cy.wait(1000); // Aguarda 1 segundos
        cy.get('#btn-tab-dados-credito').click();
        // Captura print para evidencia
        cy.screenshot('10-Dados_Credito',{overwrite: true});

        // Valida se os campos da aba proposta estão presentes

        // Informações básicas

        // Precatório
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(2) > .text-label')
        .contains("Precatório");
        cy.wait(1000); // Aguarda 1 segundos

        // Processo
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(3) > .text-label')
        .contains("Processo");
        cy.wait(1000); // Aguarda 1 segundos

        // Valor de face
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(4) > .text-label')
        .contains("Valor de face");
        cy.wait(1000); // Aguarda 1 segundos

        // Esfera
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(5) > .text-label')
        .contains("Esfera");
        cy.wait(1000); // Aguarda 1 segundos

        // Tribunal
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(6) > .text-label')
        .contains("Tribunal");
        cy.wait(1000); // Aguarda 1 segundos

        // Vencimento
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(8) > .text-label')
        .contains("Vencimento");
        cy.wait(1000); // Aguarda 1 segundos

        // Expectativa de vencimento
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(9) > .text-label')
        .contains("Expectativa de vencimento");
        cy.wait(1000); // Aguarda 1 segundos

        // Ente devedor
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(10) > .text-label')
        .contains("Ente devedor");
        cy.wait(1000); // Aguarda 1 segundos

        // Orgão devedor
        cy.get(':nth-child(1) > .card > :nth-child(11) > .text-label')
        .contains("Orgão devedor");
        cy.wait(1000); // Aguarda 1 segundos

        // // CNPJ do pagador
        // cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(12) > .text-label')
        // .contains("CNPJ do pagador");
        // cy.wait(1000); // Aguarda 1 segundos

        // // Data de autuação do precatório
        // cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(10) > .text-label')
        // .contains("Data de autuação do precatório");
        // cy.wait(1000); // Aguarda 1 segundos

        // Tipo de crédito
        cy.get('#tab-dados-credito > .row > :nth-child(1) > .card > :nth-child(13) > .text-label')
        .contains("Tipo de crédito");
        cy.wait(1000); // Aguarda 1 segundos

        // Processo originario
        cy.get(':nth-child(14) > .text-label')        
        .contains("Processo originário");
        cy.wait(1000); // Aguarda 1 segundos

        // Cessionário
        cy.get(':nth-child(15) > .text-label')
        .contains("Cessionário");
        cy.wait(1000); // Aguarda 1 segundos

        // Processo de conhecimento
        cy.get(':nth-child(16) > .text-label')
        .contains("Processo de conhecimento");
        cy.wait(1000); // Aguarda 1 segundos

        // processo de execução
        cy.get(':nth-child(17) > .text-label')
        .contains("Processo de execução");
        cy.wait(1000); // Aguarda 1 segundos

        // Advogado

        // Nome
        cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(1) > :nth-child(2) > .text-label')
        .contains("Nome");
        cy.wait(1000); // Aguarda 1 segundos

        // CPF
        cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(1) > :nth-child(3) > .text-label')
        .contains("CPF");
        cy.wait(1000); // Aguarda 1 segundos

        // OAB
        cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(1) > :nth-child(4) > .text-label')
        .contains("OAB");
        cy.wait(1000); // Aguarda 1 segundos

        // Datas

        // Distribuição
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .text-label')
        .contains("Distribuição");
        cy.wait(1000); // Aguarda 1 segundos

        // Citação
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .text-label')
        .contains("Citação");
        cy.wait(1000); // Aguarda 1 segundos

        // Trânsito em julgado
        cy.get(':nth-child(2) > :nth-child(4) > .text-label')
        .contains("Trânsito em julgado");
        cy.wait(1000); // Aguarda 1 segundos

        // Autuação do precatório
        cy.get('#tab-dados-credito > .row > :nth-child(2) > :nth-child(2) > :nth-child(5) > .text-label')
        .contains("Autuação do precatório");
        cy.wait(1000); // Aguarda 1 segundos

        // Data do protocolo
        cy.get(':nth-child(2) > :nth-child(6) > .text-label')
        .contains("Data do protocolo");
        cy.wait(1000); // Aguarda 1 segundos   

        // Data base
        cy.get(':nth-child(2) > :nth-child(7) > .text-label')
        .contains("Data base"); 
        cy.wait(1000); // Aguarda 1 segundos

        // Penhora
        cy.get(':nth-child(2) > :nth-child(8) > .text-label')
        .contains("Penhora");
        cy.wait(1000); // Aguarda 1 segundos

        // Última movimentação
        cy.get(':nth-child(2) > :nth-child(9) > .text-label')
        .contains("Última movimentação");
        cy.wait(1000); // Aguarda 1 segundos

        // Outras informações

        // Informações para recebimento
        cy.get('.mb-4 > :nth-child(2) > .text-label')
        .contains("Informações para recebimento");
        cy.wait(1000); // Aguarda 1 segundos

        // Natureza da ação
        cy.get('.mb-4 > :nth-child(3) > .text-label')
        .contains("Natureza da ação");
        cy.wait(1000); // Aguarda 1 segundos

        // Número do juízo
        cy.get('.mb-4 > :nth-child(4) > .text-label')
        .contains("Número do juízo");
        cy.wait(1000); // Aguarda 1 segundos

        // Descritivo do juízo
        cy.get('.mb-4 > :nth-child(5) > .text-label')
        .contains("Descritivo do juízo");
        cy.wait(1000); // Aguarda 1 segundos

        // Comarca/seção judiciária
        cy.get('.mb-4 > :nth-child(6) > .text-label')
        .contains("Comarca/seção judiciária");
        cy.wait(1000); // Aguarda 1 segundos

        // Classificação do titular
        cy.get('.mb-4 > :nth-child(7) > .text-label')
        .contains("Classificação do titular");
        cy.wait(1000); // Aguarda 1 segundos

        // Ação coletiva
        cy.get('.mb-4 > :nth-child(8) > .text-label')
        .contains("Ação coletiva");
        cy.wait(1000); // Aguarda 1 segundos

        // Processo DEPRE
        cy.get('.mb-4 > :nth-child(9) > .text-label')
        .contains("Processo DEPRE");
        cy.wait(1000); // Aguarda 1 segundos

        // Processo SEI
        cy.get('.mb-4 > :nth-child(10) > .text-label')
        .contains("Processo SEI");
        cy.wait(1000); // Aguarda 1 segundos

        // EC-62
        cy.get('.mb-4 > :nth-child(11) > .text-label')
        .contains("EC-62");
        cy.wait(1000); // Aguarda 1 segundos

        // Dados de acesso
        cy.get('.mb-4 > :nth-child(12) > .text-label')
        .contains("Dados de acesso");
        cy.wait(1000); // Aguarda 1 segundos

    });
});