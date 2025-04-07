
    // DADO: que estou logado na plataforma opera web
    // E: preciso validar a opção "Pular etapa"
    // QUANDO: acesso o precatório/lead
    // E: clico no btn "Pular Etapa"
    // ENTAO: uma tela de confirmação deve ser exibida com os btn´s "Avançar" / "Cancelar"
    // E: o cliente deve ser direcionado para proxima etapa do workflow
    // E: o cliente / lead deve ter novas atividades inseridas relacionadas a etapa atual


describe('Validar ação "Pular Etapas"', () => {
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

    it('Validar ação "Pular Etapas"', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA - Cypress').click();
        cy.screenshot('02-Tela-Inicial',{overwrite: true});

        // Clicar "Pular Etapas" | Aqui o cliente / lead saira da primeira etapa para última "Pagamento"
        // Vai para etapa: Conferencia inicial
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.screenshot('02-PularEtapa-Modal',{overwrite: true});
        cy.get('#btn-avancar-etapa').click();
        cy.screenshot('02-PularEtapa-ok',{overwrite: true});

        // Cancelar a ação no modal
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.screenshot('02-PularEtapa-Modal-02',{overwrite: true});
        cy.get('#btn-fechar-modal-avancar-etapa').click();
        // Aguarda 3 segundos
        cy.wait(3000);
        cy.screenshot('02-PularEtapa-cancelar',{overwrite: true});
    });
});