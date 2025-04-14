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

    it('Validar Upload de arquivo', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA - NAO USAR (Automação)').click();

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

        // // Altera nome do card
        // cy.get('#dados-operacao-tab').click();
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
        // cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-Upload-arq_OK{enter}');
        // cy.wait(2000); // Aguarda 2 segundos
        // cy.get('#atividades-tab').click();

    });
});