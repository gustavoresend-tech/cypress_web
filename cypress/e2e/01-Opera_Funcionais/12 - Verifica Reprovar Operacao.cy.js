// DADO: que estou logado na plataforma Opera web
// E: preciso Verificar a reprovação de uma operação
// QUANDO: entro no detalhe de uma operação
// E: clico no botão de reprovação
// ENTAO: a operação deve ser reprovada
// E: a operação deve ser retirada da esteira

describe('Verifica Reprovação de Operação', () => {
    Cypress.config('pageLoadTimeout', 15000);
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
            cy.wait(1000); // aguarda 1 segundos
            // Insere e-senha e submete
            cy.get('#i0118').type(`${Cypress.env('password')}`, { force: true });
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[type="submit"]').click();
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[id="idSIButton9"]').click();
        });
    });

    it('Verifica Reprovação de Operação', () => {

    // Acessa o primeiro card dispoível no worlflow
    cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

    // Clina no botão de reprovação
    cy.get('#btn-abrir-modal-reprovar-operacao').click();
    // Preenche o modal de observação    
    cy.get('#observacao-reprovar-operacao').type('Teste-QA');
    // Captura print para evidencia
    cy.screenshot('10-Reprovação de Operação',{overwrite: true});
    cy.wait(1000); // Aguarda 1 segundos
    // Clica no botão de reprovação
    cy.get('#btn-reprovar-operacao').click();
    cy.wait(1000); // Aguarda 1 segundos
        
    });
});