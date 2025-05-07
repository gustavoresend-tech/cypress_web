// DADO: que estou na pagina de detalhamento de um card/precatório aba "Atividades"
// E: quero verificar a atividade "Estudo do processo judicial"
// QUANDO: clico no btn "Iniciar"

describe('Verifica Atividade "Parecer jurídico"', () => {
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

    it('Verifica Atividade "Parecer jurídico"', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

        // Verifica se a atividade "Parecer jurídico" está disponível e clica
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Parecer jurídico').click();
        cy.get('#btn-iniciar-atividade').click();
        // Verifica campos

        // Captura print para evidencia
        cy.screenshot('22-Conferencia final',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos

        // Finaliza atividade
        cy.get('#btn-abrir-modal-aprovar-atividade-parecer').click();
        cy.get('#btn-upload-file-input-arquivo-justificativa-label').selectFile('Teste_Upload.pdf');
        cy.get('#btn-aprovar-atividade-parecer').click();
        cy.wait(1000); // Aguarda 1 segundos
        

    });
});    