// DADO: que estou logado e preciso verificar as atividades iniciadas por mim na plataforma Opera
// QUANDO: clico na opção "Minhas Operações"
// ENTAO: devo visualizar as minhas atividades na plataforma Opera
// E: preciso ter a opção de finalizar as atividades iniciadas

describe('Validar Tela de pesquisa ID - Resonsivo', () => {
    beforeEach(() => {
        cy.viewport(360, 640);
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit('https://opera.hml.pjus.com.br');
            // Configura exibição da tela de teste
            // Insere e-mail e submete
            cy.get('[name="loginfmt"]').type(`${Cypress.env('email')}`, { force: true });
            cy.get('[type="submit"]').click();
            cy.wait(2000); // aguarda 1 segundos
            // Insere e-senha e submete
            cy.get('[name="passwd"]').type(`${Cypress.env('password')}`, { force: true });
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[type="submit"]').click();
            cy.wait(1000); // aguarda 1 segundos
            cy.get('[id="idSIButton9"]').click();
            cy.wait(1000); // aguarda 1 segundos

        });
    });

    it('Validar Tela de pesquisa ID - (360, 640)', () => {
        // entrar no menu de pesquisa
        cy.get('.card > .btn').click();        
        cy.wait(2000); // aguarda 2 segundos

        // Pesquisa 01
        // Insere ID para pesquisa
        cy.get('#input-consultar-operacao').clear().type('5fb2a8b0-d044-45fa-837a-08dd79348c9b', { force: true });
        // clica em pesquisar
        cy.get(':nth-child(3) > .btn').click();
        // verifica se o texto "Operação Encontrada" aparece na tela
        cy.get('.mx-auto > .text-2').contains('Operação encontrada!');

        // Pesquisa 02
        // Insere ID para pesquisa
        cy.get('#input-consultar-operacao').clear().type('2452ebe3-db24-4449-5f69-08dd78597661', { force: true });
        // clica em pesquisar
        cy.get(':nth-child(3) > .btn').click();
        // verifica se o texto "Operação Encontrada" aparece na tela
        cy.get('.mx-auto > .text-2').contains('Operação encontrada!');

        // Pesquisa 03
        // Insere ID para pesquisa        
        cy.get('#input-consultar-operacao').clear().type('617dc916-636c-4cb8-0f56-08dd792eb825', { force: true });
        // clica em pesquisar
        cy.get(':nth-child(3) > .btn').click();
        // verifica se o texto "Operação Não encontrada!" aparece na tela
        cy.get('.mx-auto > .text-2').contains('Operação encontrada!');

        // Pesquisa 04 - exceção
        // Insere ID para pesquisa        
        cy.get('#input-consultar-operacao').clear().type('717dc916-636c-4cb8-0f56-08dd792eb825', { force: true });
        // clica em pesquisar
        cy.get(':nth-child(3) > .btn').click();
        // verifica se o texto "Erro ao recuperar operação: Sequence contains no elements." aparece na tela
        cy.get('.col-auto > .text-2').contains('Erro ao recuperar operação');
        cy.wait(1000); // aguarda 1 segundos

    });

});

