// DADO: que estou na pagina de detalhamento de uma operação
// E: preciso verificar a atividade: Análise do ativo - Advogados
// QUANDO: clico na respectiva atividade
// E: clico no btn "Iniciar" exibido
// ENTAO: a atividade deve ser iniciada
// E: os campos exibidos conforme definição
// E: os btn´s "Finalizar" e "Reprovar" DEVEM ser exibidos
// E: a atividade precisa ser finaliza com sucesso

// Definição de campos AQUI

//


    describe('Verifica atividade Análise do ativo - Advogados', () => {
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
    
        it('Verifica atividade Análise do ativo - Advogados', () => {
            // Acessa o primeiro card dispoível no worlflow
            cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

            // ADVOGADOS

            // Verifica se a atividade "Advogados" está disponível e clica
            cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
            .contains('Advogados').click();
            cy.get('#btn-iniciar-atividade').click();

            // Verificar os campos - Bloco 1
            cy.get('.col-auto > .background-2').should('be.visible')
            .contains('Preencha os campos abaixo');

            // Verifica btn´s SIM e NÃO
            cy.get('[for="ExibirBlocoNecessidadeTermosAdvogadoNao"]').should('be.visible');
            cy.get('[for="ExibirBlocoNecessidadeTermosAdvogadoSim"]').should('be.visible').click();

            // Verificar os campos - Bloco 5
            cy.get('.background-2 > :nth-child(1) > .accordion > .accordion-item > .accordion-header > .accordion-button').should('be.visible');

            // Verificar os campos - Bloco 5.1
            cy.get('#div-bloco-NecessidadeTermosAdvogados > .accordion > .accordion-item > .accordion-header > .accordion-button').should('be.visible');

            // Verificar os campos - Bloco 6
            cy.get(':nth-child(3) > .accordion > .accordion-item > .accordion-header > .accordion-button').should('be.visible');

            // Verifica btn´s REPROVAR e FINALIZAR
            cy.get('#btn-abrir-modal-reprovar-atividade-personalizada').should('be.visible');
            cy.get('#btn-abrir-modal-aprovar-atividade-personalizada').should('be.visible');

            // FINALIZAR
            cy.get('#btn-abrir-modal-aprovar-atividade-personalizada').click();
            cy.get('#observacao-modal-aprovar-atividade-personalizada').type('Teste-QA');
            cy.get('#btn-aprovar-modal-aprovar-atividade-personalizada').click();

            // Captura print para evidencia
            cy.screenshot('09-Atividade Análise do ativo - Advogados',{overwrite: true});
            cy.wait(1000); // Aguarda 1 segundos

        });
    });    