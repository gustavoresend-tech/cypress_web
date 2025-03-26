    // DADO: que estou logado na plataforma Opera web PJUS
    // E: quero reprovar uma operação completa no workflow
    // QUANDO:entro no detalhamento da operação
    // E: clico no btn "Reprovar operacao"
    // E: confirmo a operacao no modal exibido
    // ENTAO: ???

    describe('Validar "Tela de Parametros"', () => {
        beforeEach(() => {
            // Realiza o login direcionado para SSO Microsoft
            cy.origin('https://login.microsoftonline.com', () => {
                // Volta para a origem, página pjus board
                cy.visit('https://opera.hml.pjus.com.br');
                cy.viewport(1280, 720);
                cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}{enter}`);
                cy.get('[name="passwd"]').type(`${Cypress.env('password')}{enter}`);
                cy.get('[type="submit"]').type('{enter}');
                cy.get('#idBtn_Back').click();
                // Aguarda 3 segundos
                 cy.wait(3000);

            });
        });
    
        it('Validar "Tela de Parametros"', () => {
            // Navega nas opçoes existentes
            cy.screenshot('10-Parametros',{overwrite: true});
            cy.get('.main-layout > :nth-child(1) > a').click();
            cy.screenshot('10-Grupos',{overwrite: true});
            cy.go('back'); // volta à página anterior
            cy.get(':nth-child(2) > a').click();
            cy.screenshot('10-Etapas',{overwrite: true});
            cy.go('back'); // volta à página anterior
            cy.get(':nth-child(3) > a').click();
            cy.screenshot('10-Atividades',{overwrite: true});
            cy.go('back'); // volta à página anterior
        });
    });    