// DADO: que estou na página de detalhamento de uma operação
// QUANDO: clico na aba "Todos os arquivos"
// ENTAO: devo ser redirecionado para tela de upload de arquivos
// E: devem ser exibidas as opções de upload
// E: devem ser exibidos os arquivos já anexados

// Definição de campos AQUI

// btn "Adicionar arquivos"
// campo para seleção do tipo de arquivo a ser anexado
// campo para status, quando tipo = CND´s
// Colunas: TIPO, DATA, AÇÕES

        describe('Validar aba "Todos os arquivos"', () => {
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

    it('Validar aba "Todos os arquivos"', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

        // acessa aba "Todos os arquivos"
        cy.get('#todos-arquivos-tab').click();

        // verificar se os campos estão disponíveis

        // campo Adicionar arquivos
        cy.get('#btn-upload-file-input-arquivo-label').should('be.visible');

        // campo tipo de documento
        cy.get('#select-tipo-documento-upload-arquivo').should('be.visible');

        // Btn "enviar"
        cy.get('#btn-enviar-arquivo-operacao').should('be.visible');

        // Verificar as colunas do grid de anexados

        // // Nome do Documento
        // cy.get('.mt-3 > .table-responsive > .table > thead > tr > :nth-child(1)').should('be.visible');

        // Tipo
        cy.get('.mt-3 > .table-responsive > .table > thead > tr > :nth-child(2)').should('be.visible');

        // Data de envio
        cy.get('.mt-3 > .table-responsive > .table > thead > tr > :nth-child(3)').should('be.visible');

        // Ação
        cy.get('[style="width: 90px;"]').should('be.visible');

        // Adicionar arquivos

        // Upload .png
        // clica no btn "Adicionar arquivo" e Realiza Upload de arquivo pré selecionado
        cy.get('#btn-upload-file-input-arquivo-label').selectFile('Teste_Upload.png');
        // seleciona o tipo de documento       
        cy.get('.row > :nth-child(2) > .form-select').select('Documento de Identificacao');
        // clica no btn "Enviar"
        cy.get('#btn-enviar-arquivo-operacao').click();

        // Upload .jpg
        // clica no btn "Adicionar arquivo" e Realiza Upload de arquivo pré selecionado
        cy.get('#btn-upload-file-input-arquivo-label').selectFile('Teste_Upload.jpg');
        // seleciona o tipo de documento       
        cy.get('.row > :nth-child(2) > .form-select').select('Comprovante de Endereço');
        // clica no btn "Enviar"
        cy.get('#btn-enviar-arquivo-operacao').click();

        // Upload .pdf
        // clica no btn "Adicionar arquivo" e Realiza Upload de arquivo pré selecionado
        cy.get('#btn-upload-file-input-arquivo-label').selectFile('Teste_Upload.pdf');
        // seleciona o tipo de documento       
        cy.get('.row > :nth-child(2) > .form-select').select('Certidão de Casamento');
        // clica no btn "Enviar"
        cy.get('#btn-enviar-arquivo-operacao').click();

        // Upload .docx
        // clica no btn "Adicionar arquivo" e Realiza Upload de arquivo pré selecionado
        cy.get('#btn-upload-file-input-arquivo-label').selectFile('Teste_Upload.docx');
        // seleciona o tipo de documento       
        cy.get('.row > :nth-child(2) > .form-select').select('Cópia Processo');
        // clica no btn "Enviar"
        cy.get('#btn-enviar-arquivo-operacao').click();

        // Upload .xlsx
        // clica no btn "Adicionar arquivo" e Realiza Upload de arquivo pré selecionado
        cy.get('#btn-upload-file-input-arquivo-label').selectFile('Teste_Upload.xlsx');
        // seleciona o tipo de documento       
        cy.get('.row > :nth-child(2) > .form-select').select('Folha de Cálculo');
        // clica no btn "Enviar"
        cy.get('#btn-enviar-arquivo-operacao').click();

        // Upload CND Negativa
        // clica no btn "Adicionar arquivo" e Realiza Upload de arquivo pré selecionado
        cy.get('#btn-upload-file-input-arquivo-label').selectFile('Teste CND Negativa.pdf');
        // seleciona o tipo de documento       
        cy.get('.row > :nth-child(2) > .form-select').select('CND Federal');
        // seleciona status CND
        cy.get('#select-status-cnd-upload-arquivo > .form-select').select('Negativa');
        // clica no btn "Enviar"
        cy.get('#btn-enviar-arquivo-operacao').click();

        // Upload CND Positiva
        // clica no btn "Adicionar arquivo" e Realiza Upload de arquivo pré selecionado
        cy.get('#btn-upload-file-input-arquivo-label').selectFile('Teste CND Positiva.pdf');
        // seleciona o tipo de documento       
        cy.get('.row > :nth-child(2) > .form-select').select('CND Estadual');
        // seleciona status CND
        cy.get('#select-status-cnd-upload-arquivo > .form-select').select('Positiva');
        // clica no btn "Enviar"
        cy.get('#btn-enviar-arquivo-operacao').click();

        // Captura print para evidencia
        cy.screenshot('15-Aba Todos Arquivos',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos

    });
});