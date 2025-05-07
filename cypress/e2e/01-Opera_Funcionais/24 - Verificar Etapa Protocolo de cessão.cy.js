// DADO: que estou na pagina de detalhamento de um card/precatório aba "Atividades"
// E: quero verificar a atividade "Estudo do processo judicial"
// QUANDO: clico no btn "Iniciar"

describe('Verifica Etapa "Protocolo de cessão"', () => {
    beforeEach(() => {
    // Realiza o login direcionado para SSO Microsoft
    cy.origin('https://login.microsoftonline.com', () => {
        // Volta para a origem, página pjus board
        cy.visit(Cypress.env('URL_OPERA') + '/board');
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

    it('Verifica Etapa "Protocolo de cessão"', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

        // Verifica se a atividade "Protocolo de cessão" está disponível e clica
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Protocolo de cessão').click();
        cy.get('#btn-iniciar-atividade').click();
        cy.get('#btn-upload-file-input-arquivo-protocolo-cessao-label').selectFile('Teste_Upload.pdf');
        cy.get('.col-auto > .form-label').should('exist');
        cy.get('#btn-enviar-arquivo-protocolo-cessao').click();
        cy.get('#DataProtocolo').type('2025-01-01');
        // Verifica campos

        // Captura print para evidencia
        cy.screenshot('24-Protocolo de cessão',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos

        // Finaliza atividade
        cy.get('#btn-abrir-modal-aprovar-atividade-personalizada').click();
        cy.get('#observacao-modal-aprovar-atividade-personalizada').type('Teste-QA');
        cy.get('#btn-aprovar-modal-aprovar-atividade-personalizada').click();
        cy.wait(1000); // Aguarda 1 segundos

    });
});    