// DADO: que estou na pagina de detalhamento de um card/precatório aba "Atividades"
// E: quero pesquisar por uma atividade
// QUANDO: clico no btn "Criar atividade"
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

            // Conferência do ofício requisitório

            // Verifica se a atividade Estudo do processo judicial" está disponível e clica
            cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
            .contains('Conferência do ofício requisitório').click();
            cy.get('#btn-iniciar-atividade').click();

            // Verificar os campos - Bloco 1
            cy.get('.row.mt-3 > :nth-child(1) > .background-2').should('be.visible');
            // Bloco informações basicas
            cy.get(':nth-child(1) > .background-2 > :nth-child(3) > .accordion-item > .accordion-header > .accordion-button').should('be.visible');
            // Bloco advogados
            cy.get(':nth-child(1) > .background-2 > :nth-child(4) > .accordion-item > .accordion-header > .accordion-button').should('be.visible');
            // Bloco Datas
            cy.get(':nth-child(1) > .background-2 > :nth-child(5) > .accordion-item > .accordion-header > .accordion-button').should('be.visible');
            // Bloco Outras Informações
            cy.get(':nth-child(1) > .background-2 > :nth-child(6) > .accordion-item > .accordion-header > .accordion-button').should('be.visible');

            // Verificar os campos - Bloco 2
            cy.get('.row.mt-3 > :nth-child(2) > .background-2').should('be.visible');
            cy.get('[for="ProcessoSegredoJusticaSim"]').should('be.visible');
            cy.get('[for="ProcessoSegredoJusticaNao"]').should('be.visible');
            cy.get('#ParticularidadesTribunal').should('be.visible').type('Teste-QA');

            // FINALIZAR
            cy.get('#btn-abrir-modal-aprovar-atividade-personalizada').click();
            cy.get('#observacao-modal-aprovar-atividade-personalizada').type('Teste-QA');
            cy.get('#btn-aprovar-modal-aprovar-atividade-personalizada').click();

            // Captura print para evidencia
            cy.screenshot('09-Verificar Campos Ativ. Espec. parte 01',{overwrite: true});
            cy.wait(1000); // Aguarda 1 segundos

        });
    });    