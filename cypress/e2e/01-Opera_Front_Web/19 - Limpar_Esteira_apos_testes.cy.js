// Após finalização dos testes automatizados, esse processo será executado para limpar a esteira / workflow da aplicação Opera

describe('Validar Atividades "Finalizar Esteira"', () => {
    Cypress.config('pageLoadTimeout', 15000);
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
            cy.wait(1000); // aguarda 1 segundos
            // Insere e-senha e submete
            cy.get('[name="passwd"]').type(`${Cypress.env('password')}`, { force: true });
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[type="submit"]').click();
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[id="idSIButton9"]').click();
        });
    });

    it('Limpeza de esteira 01"', () => {
        // Acessa o card dispoível no worlflow
        cy.contains('Teste-QA - NAO USAR (Automação)').click();
        // Vai para etapa: Conferencia inicial
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Analise do processo
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Analise do cedente
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Providencias
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Analise de calculo
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Parecer do cedente
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Conferencia final
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Parecer juridico
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Validaçao da operação
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Confecçao do documento
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Assinatura
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Conferencia do translado
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Protocolo de cessao
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Validacoes finais
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Pagamento
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Finaliza o card na esteira
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();
        
    });

    // it('Limpeza de esteira 02"', () => {
    //         // Acessa o card dispoível no worlflow
    //         cy.contains('Teste-QA-Conferência inicial').click();
    
    //         // Vai para etapa: Analise do processo
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Analise do cedente
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Providencias
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Analise de calculo
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Parecer do cedente
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Conferencia final
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Parecer juridico
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Validaçao da operação
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Confecçao do documento
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Assinatura
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Conferencia do translado
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Protocolo de cessao
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Validacoes finais
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Pagamento
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Finaliza o card na esteira
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();        
    // });

    // it('Limpeza de esteira 03"', () => {
        
    //         // Acessa o card dispoível no worlflow
    //         cy.contains('Teste-QA-Análise de cálculo').click();
    
    //         // Vai para etapa: Parecer do cedente
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Conferencia final
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Parecer juridico
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Validaçao da operação
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Confecçao do documento
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Assinatura
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Conferencia do translado
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Protocolo de cessao
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Validacoes finais
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Vai para etapa: Pagamento
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click();
    
    //         // Finaliza o card na esteira
    //         cy.get('#btn-abrir-modal-pular-etapa').click();
    //         cy.get('#btn-avancar-etapa').click(); 

    //     // Altera nome do card
    //     cy.get('#dados-operacao-tab').click();
    //     cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
    //     cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-Esteira_Finalizada{enter}');
    //     cy.wait(2000); // Aguarda 2 segundos
    //     cy.get('#atividades-tab').click();
        
    });