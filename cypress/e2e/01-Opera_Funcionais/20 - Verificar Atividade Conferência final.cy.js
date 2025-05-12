// DADO: que estou na pagina de detalhamento de um card/precatório aba "Atividades"
// E: quero verificar a atividade "Estudo do processo judicial"
// QUANDO: clico no btn "Iniciar"

describe('Verifica Atividade Conferencia final', () => {
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

    it('Verifica Atividade Estudo do processo judicial', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

        // Verifica se a atividade "Conferência final" está disponível e clica
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('exist')
        .contains('Conferência final').click();

        // Inicia a atividade
        cy.get('#btn-iniciar-atividade').click();

        // Captura print para evidencia
        cy.screenshot('22-Conferência final',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos

        // Verifica campos
        cy.get(':nth-child(1) > .col-auto > .form-label').should('exist');
        cy.get('#PercentualComissaoPjus').clear().type('100');
        cy.get('#PercentualComissaoPjus').should('exist');

        // Verificar btn´s Não
        cy.get('[for="CartorioAlternativoNao"]').should('exist');
        cy.get('[for="PrazoAlternativoNao"]').should('exist');

        // Verificar btn´s Sim
        cy.get('[for="CartorioAlternativoSim"]').should('exist').click();
        cy.get('[for="PrazoAlternativoSim"]').should('exist').click();

        // Percentual cartório alternativo
        cy.get('#div-PercentualCartorioAlternativo > .form-label').should('exist');
        cy.get('#PercentualCartorioAlternativo').clear().type('10');     

        // Prazo em meses
        cy.get('#div-PrazoAlternativo > .form-label').should('exist');
        cy.get('#PrazoAlternativo').clear().type('10');

        // Captura print para evidencia
        cy.screenshot('22-Conferencia final',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos
        
        // Finaliza Atividade
        cy.get('#btn-abrir-modal-aprovar-conferencia-final').click();

        //Preenche modal de observação
        cy.get('.modal-content > .modal-body').should('exist');
        cy.get('#observacao-aprovar-atividade-conferencia-final').type('Teste-QA');
        cy.get('#btn-aprovar-atividade-conferencia-final').click();
        cy.wait(1000); // Aguarda 1 segundos

    });
});    