// DADO: que estou na pagina de detalhamento de uma operação
// E: preciso reprovar a operação
// QUANDO: clico no btn "Reprovar Operação"
// ENTAO: a operação deve ser reprovada
// E: o card relacionado deve ser retirada da esteira

describe('Verifica Fluxo de Reprovar uma Operacao', () => {
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
            cy.wait(2000); // aguarda 2 segundos
            // Insere e-senha e submete
            cy.get('#i0118').type(`${Cypress.env('password')}`, { force: true });
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[type="submit"]').click();
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[id="idSIButton9"]').click();
        });
    });

    it('Verifica Fluxo de Reprovar uma Operacao', () => {

    // Acessa o primeiro card dispoível no worlflow
    cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

    // Clina no botão de reprovação
    cy.get('#btn-abrir-modal-reprovar-operacao').click();
    // Preenche o modal de observação    
    cy.get('#observacao-reprovar-operacao').type('Teste-QA');
    // Captura print para evidencia
    cy.screenshot('12-Reprovação de Operação',{overwrite: true});
    cy.wait(1000); // Aguarda 1 segundos
    // Clica no botão de reprovação
    cy.get('#btn-reprovar-operacao').click();
    cy.wait(1000); // Aguarda 1 segundos
        
    });
});