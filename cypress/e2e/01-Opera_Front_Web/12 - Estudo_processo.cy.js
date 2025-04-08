        
    // DADO: que estou na pagina de detalhamento de um precatório/lead
    // QUANDO: clico na aba "Estudo do processo"
    // E: Clico no Btn "Escrever memória"
    // E: insiro dados/informações
    // ENTAO: quando clico em postar o conteúdo inserido deverá ser salvo e guardado em memória

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
        cy.contains('Teste-QA').click();
        cy.screenshot('04-Tela-Inicial',{overwrite: true});
 
        // Clicar Estudo do processo e postar
        cy.get('#estudo-processo-tab').click();
        cy.wait(3000); // Aguarda 5000 milissegundos (5 segundos)
        cy.screenshot('04-Memoria_Vazia',{overwrite: true});
        cy.get('#btn-abrir-editor-estudo-processo').click();
        cy.screenshot('04-Editor',{overwrite: true});
        cy.get('#btn-postar-estudo-processo').click();
        cy.wait(3000); // Aguarda 5000 milissegundos (5 segundos)
        cy.screenshot('04-Memoria_apos_postagem',{overwrite: true});
        cy.get('#link-voltar-para-todas-etapas').click();
    });
});