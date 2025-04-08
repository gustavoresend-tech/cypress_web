    // DADO: que estou logado na plataforma
    // E: preciso validar a opção "Pular etapa"
    // QUANDO: acesso o detalhamento do cliente / lead
    // E: clico no btn "Pular Etapa"
    // ENTAO: uma tela de confirmação deve ser exibida com os btn´s "Avançar" / "Cancelar"
    // E: o cliente / lead deve ter novas atividades inseridas
    // E: o cliente deve ser direcionado para proxima etapa do workflow


// Login SSO Microsoft
describe('Validar "ir para etapa final"', () => {
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

    Cypress._.times(1, () => {
    it('Validar "ir para etapa final"', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA - Cypress').click();

        // Clicar "Pular Etapas"
        // Aqui o cliente / lead saira da primeira etapa para última "Pagamento"

        // Vai para etapa: Conferencia inicial
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Analise do processo
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Analise do cedente
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Providencias
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Analise de calculo
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Parecer do cedente
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Conferencia final
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Parecer juridico
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Validaçao da operação
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Confecçao do documento
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Assinatura
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Conferencia do translado
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Protocolo de cessao
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Validacoes finais
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Vai para etapa: Pagamento
        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.get('#btn-avancar-etapa').click();

        // Altera nome do card
        cy.get('#dados-operacao-tab').click();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').click().clear();
        cy.get('#tab-dados-titular > .row > :nth-child(1) > .card > :nth-child(2) > .form-control').type('Teste-QA-Pagamento{enter}');
        cy.wait(2000); // Aguarda 2 segundos
        cy.get('#atividades-tab').click();

    });
    });
});