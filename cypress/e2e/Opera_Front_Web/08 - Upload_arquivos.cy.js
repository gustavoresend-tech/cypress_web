    
    // DADO: que estou na pagina de detalhamento de um precatório/lead
    // QUANDO: clico na aba "Todos os arquivos"
    // ENTAO: deve ser aberta tela com opções para /anexar arquivos
    // E: o btn "Adicionar arquivo" deve estar presente
    // E: o lista que descreve os tipos de arquivos deve estar presente
    // E: o btn "Enviar" deve estar presente
    // E: os campos Nome do documento | Tipo | Data de Envio | Ação devem estar presentes

    describe('Validar "Upload de arquivos"', () => {
    beforeEach(() => {
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit('https://opera.hml.pjus.com.br/board');
            cy.viewport(1280, 720);
            cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}{enter}`);
            cy.get('[name="passwd"]').type(`${Cypress.env('password')}{enter}`);
            cy.get('[type="submit"]').type('{enter}');
            cy.get('#idBtn_Back').click();
        });
    });

    it('Validar Upload de arquivo', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA').click();

        // Clica na aba "Todos os arquivos"
        cy.get('#todos-arquivos-tab').click();

        // Upload .png
        // clica no btn "Adicionar arquivo" e Realiza Upload de arquivo pré selecionado
        cy.get('#btn-upload-file-inputarquivo-label').selectFile('Tela-Inicial.png');
        // seleciona o tipo de documento       
        cy.get('.row > :nth-child(2) > .form-select').select('Documento de Identificacao');
        // clica no btn "Enviar"
        cy.get('#btn-enviar-arquivo-operacao').click();

        // Upload .jpg
        // clica no btn "Adicionar arquivo" e Realiza Upload de arquivo pré selecionado
        cy.get('#btn-upload-file-inputarquivo-label').selectFile('Tela-Inicial.jpg');
        // seleciona o tipo de documento       
        cy.get('.row > :nth-child(2) > .form-select').select('Comprovante de Endereço');
        // clica no btn "Enviar"
        cy.get('#btn-enviar-arquivo-operacao').click();
        cy.screenshot('05-Upload',{overwrite: true});
    });
});