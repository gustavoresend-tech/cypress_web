// DADO: que estou na pagina de detalhamento de um card/precatório aba "Atividades"
// E: quero verificar a atividade "Análise do Cedente"
// QUANDO: clico no btn "Iniciar"
// E: seleciono o campo de pesquisa
// E: preencho o conteúdo a ser pesquisado
// E: clico na lupa para pesquisar o conteúdo
// ENTAO: as atividades com o conteúdo pesquisado devem ficar disponíveis para seleção

describe('Verifica Atividades Especificas.', () => {
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

    it('Verifica Atividades Especificas parte 01', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

        // Análise do Cedente

        // Verifica se a atividade "Análise do Cedente" está disponível e clica
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Análise do cedente').click();

        // Inicia a atividade
        cy.get('#btn-iniciar-atividade').click();

        // Verifica os campos da atividade
        // Verifica btn´s "NÃO"
        cy.get('[for="PossuiTributosNao"]').should('exist');
        cy.get('[for="SolicitarAtestadoCapacidadeNao"]').should('exist');
        cy.get('[for="ExibirBlocoNecessidadeAntifraudeNao"]').should('exist');
        cy.get('[for="ExibirBlocoNecessidadeTermosNao"]').should('exist');

        // Verifica e clica btn´s "SIM"
        cy.get('[for="PossuiTributosSim"]').should('exist').click();
        cy.get('[for="SolicitarAtestadoCapacidadeSim"]').should('exist').click();
        cy.get('[for="ExibirBlocoNecessidadeAntifraudeSim"]').should('exist').click();
        cy.get('[for="ExibirBlocoNecessidadeTermosSim"]').should('exist').click();

        // Verifica blocos
        cy.get('.background-2 > :nth-child(1) > .accordion > .accordion-item > .accordion-header > .accordion-button').should('exist');
        cy.get('#div-bloco-NecessidadesAntifraude > .accordion > .accordion-item > .accordion-header > .accordion-button').should('exist');
        cy.get('#div-bloco-NecessidadesAntifraude > .accordion > .accordion-item > .accordion-header > .accordion-button').should('exist');
        cy.get('#div-bloco-NecessidadeAtestadosTermos > .accordion > .accordion-item > .accordion-header > .accordion-button').should('exist');

        // Verifica se btn "Reprovar" existe
        cy.get('#btn-abrir-modal-reprovar-atividade-personalizada').should('exist');

        // Captura print para evidencia
        cy.screenshot('20-Análise do Cedente',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos
        
        // Finaliza Atividade
        cy.get('#btn-abrir-modal-aprovar-atividade-personalizada').click();

        //Preenche modal de observação
        cy.get('#observacao-modal-aprovar-atividade-personalizada').type('Teste-QA');
        cy.get('#btn-aprovar-modal-aprovar-atividade-personalizada').click();
        cy.wait(1000); // Aguarda 1 segundos


    });
});    