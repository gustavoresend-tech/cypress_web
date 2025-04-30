// DADO: que estou logado e na pagina de detalhamento de um precatório/lead
// QUANDO: clico na aba "Estudo do processo"
// ENTAO: as opções descritas abaixo devem estar disponíveis
// e: para cada opções deve ser possível inserir e salvar informações, de texto e mídia


        describe('Validar aba "Estudo do processo"', () => {
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

    it('Validar aba "Estudo do processo"', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

        // acessa aba "Estudo do processo"
        cy.get('#estudo-processo-tab').click();

        // verificar se os itens do menu suspenso estão disponíveis
        cy.get('#estudo-processo > .card > .background-2').should('be.visible')
        .contains('Bloco 1: Identifica o caso e a sentença');
        cy.get('#estudo-processo > .card > .background-2').should('be.visible')
        .contains('Bloco 2: Informações para o cálculo');
        cy.get('#estudo-processo > .card > .background-2').should('be.visible')
        .contains('Bloco 3: Atuação frente às CNDs e processos ajuizados');
        cy.get('#estudo-processo > .card > .background-2').should('be.visible')
        .contains('Bloco 3.1: Necessidades do antifraude');
        cy.get('#estudo-processo > .card > .background-2').should('be.visible')
        .contains('Bloco 4: Considerações sobre estado civil');
        cy.get('#estudo-processo > .card > .background-2').should('be.visible')
        .contains('Bloco 4.1: Necessidade de atestados e termos');
        cy.get('#estudo-processo > .card > .background-2').should('be.visible')
        .contains('Bloco 5: Advogados que atuaram no feito');
        cy.get('#estudo-processo > .card > .background-2').should('be.visible')
        .contains('Bloco 5.1: Necessidade de termos do advogado');
        cy.get('#estudo-processo > .card > .background-2').should('be.visible')
        .contains('Bloco 6: Contrato de honorários e sucumbência'); 

        // Captura print para evidencia
        cy.screenshot('12-Estudo do processo',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos

    });
});