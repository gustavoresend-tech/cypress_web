// DADO: que estou logado na plataforma Opera, na página raiz "https://opera.hml.pjus.com.br/"
// E: a resolução configurada é: 1920x1080
// QUANDO: clico na opção "Consultar operação por ID"
// ENTAO: devo visualizar o campo "Encontre uma operação / Pesquise por ID"
// E: a pesquisa de um ID válido deve ser realizada com sucesso

describe('Validar Tela de pesquisa ID - Responsivo', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        // Realiza o login direcionado para SSO Microsoft
        cy.origin('https://login.microsoftonline.com', () => {
            // Volta para a origem, página pjus board
            cy.visit('https://opera.hml.pjus.com.br');
            // Configura exibição da tela de teste
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

    it('Validar Pesquisa ID - (1920, 1080)', () => {
        // Captura print para evidencia
        cy.screenshot('28-Menu de pesquisa',{overwrite: true});
        
        // entrar no menu de pesquisa
        cy.get('.card > .btn').click();        
        cy.wait(2000); // aguarda 2 segundos

        // Pesquisa 01
        // Insere ID para pesquisa
        cy.get('#input-consultar-operacao').clear().type('89ff235d-02ab-4775-66e6-08dd7b5eb5b3', { force: true });
        // clica em pesquisar
        cy.get(':nth-child(3) > .btn').click();
        // verifica se o texto "Operação Encontrada" aparece na tela
        cy.get('.mx-auto > .text-2').contains('Operação encontrada!');
        // Captura print para evidencia
        cy.screenshot('28-Pesquisa 01',{overwrite: true});
        
        // Pesquisa 02
        // Insere ID para pesquisa
        cy.get('#input-consultar-operacao').clear().type('ec355c07-669f-4964-66e4-08dd7b5eb5b3', { force: true });
        // clica em pesquisar
        cy.get(':nth-child(3) > .btn').click();
        // verifica se o texto "Operação Encontrada" aparece na tela
        cy.get('.mx-auto > .text-2').contains('Operação encontrada!');
        // Captura print para evidencia
        cy.screenshot('28-Pesquisa 02',{overwrite: true});
        
        // Pesquisa 03
        // Insere ID para pesquisa        
        cy.get('#input-consultar-operacao').clear().type('beadbde2-c459-49d9-66e5-08dd7b5eb5b3', { force: true });
        // clica em pesquisar
        cy.get(':nth-child(3) > .btn').click();
        // verifica se o texto "Operação Não encontrada!" aparece na tela
        cy.get('.mx-auto > .text-2').contains('Operação encontrada!');
        // Captura print para evidencia
        cy.screenshot('28-Pesquisa 03',{overwrite: true});
        
        // Pesquisa 04 - exceção
        // Insere ID para pesquisa        
        cy.get('#input-consultar-operacao').clear().type('717dc916-636c-4cb8-0f56-08dd792eb825', { force: true });
        // clica em pesquisar
        cy.get(':nth-child(3) > .btn').click();
        // verifica se o texto "Erro ao recuperar operação: Sequence contains no elements." aparece na tela
        cy.get('.col-auto > .text-2').contains('Erro ao recuperar operação');
        cy.wait(1000); // aguarda 1 segundos
        // Captura print para evidencia
        cy.screenshot('28-Pesquisa 04',{overwrite: true});
        
    });

});