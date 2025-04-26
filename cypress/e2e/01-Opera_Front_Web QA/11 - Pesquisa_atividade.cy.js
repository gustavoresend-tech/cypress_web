// DADO: que estou na pagina de detalhamento de um card/precatório aba "Atividades"
// E: quero pesquisar por uma atividade
// QUANDO: clico no btn "Criar atividade"
// E: seleciono o campo de pesquisa
// E: preencho o conteúdo a ser pesquisado
// E: clico na lupa para pesquisar o conteúdo
// ENTAO: as atividades com o conteúdo pesquisado devem ficar disponíveis para seleção

    describe('Validar "Pesquisar Atividades"', () => {
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
    
        it('Validar "Pesquisar Atividades"', () => {
            // Acessa o primeiro card dispoível no worlflow
            cy.contains('Teste-QA - NAO USAR (Automação)').click();

            // Clicar criar atividades
            cy.get('#btn-link-para-criar-atividade').click();
            cy.get('#input-filtrar-nova-atividade').click().type('Ajuste');
            cy.wait(1000); // Aguarda 1 segundos
            // Captura print para evidencia
            cy.screenshot('11-Pesquisa_Atividades',{overwrite: true});
            cy.wait(1000); // Aguarda 1 segundos

        });
    });    