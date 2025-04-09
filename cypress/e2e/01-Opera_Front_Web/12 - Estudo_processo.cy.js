// DADO: que estou logado e na pagina de detalhamento de um precatório/lead
// QUANDO: clico na aba "Estudo do processo"
// ENTAO: as opções descritas abaixo devem estar disponíveis
// e: para cada opções deve ser possível inserir e salvar informações, de texto e mídia

// PROVIDÊNCIA: CEDENTE;
// PROVIDÊNCIA: PATRONOS DA CAUSA;
// PROVIDÊNCIA: CÁLCULO;
// PROVIDÊNCIA: FORMALIZAÇÃO;
// PROVIDÊNCIA: COPIAS;
// PROVIDÊNCIA: OUTRAS;
// SINTESE PROCESSUAL;
// ULTIMAS MOVIMENTAÇÕES;
// ANALISE DOCUMENTAL;
// ANALISE DE CEDETES (CND);
// DADOS DO CALCULO

        describe('Validar "Estudo do processo"', () => {
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

    it('Validar "Estudo do processo"', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Pesquisa-Atividade_OK').click();
        cy.screenshot('04-Tela-Inicial',{overwrite: true});
 
        // Clicar Estudo do processo e postar
        cy.get('#estudo-processo-tab').click();
        cy.wait(1000); // Aguarda 1 segundo

        // verificar se os itens do menu suspenso estão disponíveis
        cy.contains('PROVIDÊNCIA: CEDENTE').click();
        //cy.get('#comentario-ProvidenciaCedente_ifr').type('TESTANDO{enter}',{force: true});
        cy.get('#accordion-estudo-processso-ProvidenciaCedente > .accordion-body > .form-estudo-processo > .position-relative > .position-absolute > .row > :nth-child(2) > .btn').click();
        cy.get('#feedback-save-ProvidenciaCedente').contains('Alterações salvas com sucesso.');

        cy.contains('PROVIDÊNCIA: PATRONOS DA CAUSA').click();
        cy.get('#accordion-estudo-processso-ProvidenciaPatronosDaCausa > .accordion-body > .form-estudo-processo > .position-relative > .position-absolute > .row > :nth-child(2) > .btn').click();
        cy.get('#feedback-save-ProvidenciaPatronosDaCausa').contains('Alterações salvas com sucesso.');

        cy.contains('PROVIDÊNCIA: CÁLCULO').click();
        cy.get('#accordion-estudo-processso-ProvidenciaCalculo > .accordion-body > .form-estudo-processo > .position-relative > .position-absolute > .row > :nth-child(2) > .btn').click();
        cy.get('#feedback-save-ProvidenciaCalculo').contains('Alterações salvas com sucesso.');

        cy.contains('PROVIDÊNCIA: FORMALIZAÇÃO').click();
        cy.get('#accordion-estudo-processso-ProvidenciaFormalizacao > .accordion-body > .form-estudo-processo > .position-relative > .position-absolute > .row > :nth-child(2) > .btn').click();
        cy.get('#feedback-save-ProvidenciaFormalizacao').contains('Alterações salvas com sucesso.');

        cy.contains('PROVIDÊNCIA: CÓPIAS').click();
        cy.get('#accordion-estudo-processso-ProvidenciaCopias > .accordion-body > .form-estudo-processo > .position-relative > .position-absolute > .row > :nth-child(2) > .btn').click();
        cy.get('#feedback-save-ProvidenciaCopias').contains('Alterações salvas com sucesso.');

        cy.contains('PROVIDÊNCIA: OUTRAS').click();
        cy.get('#accordion-estudo-processso-ProvidenciaOutras > .accordion-body > .form-estudo-processo > .position-relative > .position-absolute > .row > :nth-child(2) > .btn').click();
        cy.get('#feedback-save-ProvidenciaOutras').contains('Alterações salvas com sucesso.');

        cy.contains('SÍNTESE PROCESSUAL').click();
        cy.get('#accordion-estudo-processso-SinteseProcessual > .accordion-body > .form-estudo-processo > .position-relative > .position-absolute > .row > :nth-child(2) > .btn').click();
        cy.get('#feedback-save-SinteseProcessual').contains('Alterações salvas com sucesso.');

        cy.contains('ÚLTIMAS MOVIMENTAÇÕES').click();
        cy.get('#accordion-estudo-processso-UltimasMovimentacoes > .accordion-body > .form-estudo-processo > .position-relative > .position-absolute > .row > :nth-child(2) > .btn').click();
        cy.get('#feedback-save-UltimasMovimentacoes').contains('Alterações salvas com sucesso.');

        cy.contains('ANÁLISE DOCUMENTAL').click();
        cy.get('#accordion-estudo-processso-AnaliseDocumental > .accordion-body > .form-estudo-processo > .position-relative > .position-absolute > .row > :nth-child(2) > .btn').click();
        cy.get('#feedback-save-AnaliseDocumental').contains('Alterações salvas com sucesso.');

        cy.contains('ANÁLISE DO CEDENTE (CND)').click();
        cy.get('#accordion-estudo-processso-AnaliseCedenteCND > .accordion-body > .form-estudo-processo > .position-relative > .position-absolute > .row > :nth-child(2) > .btn').click();
        cy.get('#feedback-save-AnaliseCedenteCND').contains('Alterações salvas com sucesso.');

        cy.contains('DADOS DO CÁLCULO').click();
        cy.get('#accordion-estudo-processso-DadosCalculo > .accordion-body > .form-estudo-processo > .position-relative > .position-absolute > .row > :nth-child(2) > .btn').click();
        //cy.get('#comentario-DadosCalculo_ifr').type('TESTANDO{enter}',{force: true});
        cy.get('#feedback-save-DadosCalculo').contains('Alterações salvas com sucesso.');

        // Altera nome do card
        cy.get('#dados-operacao-tab').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-Estudo-Processo_OK{enter}');
        cy.wait(2000); // Aguarda 2 segundos
        cy.get('#atividades-tab').click();


    });
});