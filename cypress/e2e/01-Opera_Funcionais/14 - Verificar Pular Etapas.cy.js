// DADO: que estou logado na plataforma precisando validar a opção "Pular etapa"
// QUANDO: acesso o detalhamento do cliente / lead
// E: clico no btn "Pular Etapa"
// E: preencho uma nota no modal exibido
// E: clico na opção avançar
// ENTAO: o cliente deve ser direcionado para próxima etapa do workflow
// E: o cliente / lead deve ter novas atividades inseridas de acordo com a etapa alcançada


        describe('Validar "Pular Etapas"', () => {
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

    it('Validar "Pular Etapas"', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

        // Clica btn "Pular Etapa"

        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.wait(1000); // Aguarda 1 segundos
        cy.get('#btn-avancar-etapa').click();

        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.wait(1000); // Aguarda 1 segundos
        cy.get('#btn-avancar-etapa').click();

        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.wait(1000); // Aguarda 1 segundos
        cy.get('#btn-avancar-etapa').click();

        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.wait(1000); // Aguarda 1 segundos
        
        // Captura print para evidencia
        cy.screenshot('14-Pular_Etapas',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos
        cy.get('#btn-avancar-etapa').click();

    });
});