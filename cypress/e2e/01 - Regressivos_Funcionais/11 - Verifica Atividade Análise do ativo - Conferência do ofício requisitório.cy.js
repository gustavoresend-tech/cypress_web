// DADO: que estou na pagina de detalhamento de uma operação
// E: preciso verificar a atividade: Análise do ativo - Conferência do ofício requisitório.cy
// QUANDO: clico na respectiva atividade
// E: clico no btn "Iniciar" exibido
// ENTAO: a atividade deve ser iniciada
// E: os campos exibidos conforme definição
// E: os btn´s "Finalizar" e "Reprovar" DEVEM ser exibidos
// E: a atividade precisa ser finaliza com sucesso

// Definição de campos AQUI

//

    describe('Verifica Atividade Análise do ativo - Conferência do ofício requisitório.cy', () => {
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
    
        it('Verifica Atividades Análise do ativo - Conferência do ofício requisitório.cy', () => {
            // Acessa o primeiro card dispoível no worlflow
            cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

            // Conferência do ofício requisitório

            // Verifica se a atividade Estudo do processo judicial" está disponível e clica
            cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
            .contains('Conferência do ofício requisitório').click();
            cy.get('#btn-iniciar-atividade').click();

            // Verificar os campos - Bloco 1
            cy.get('.row.mt-3 > :nth-child(1) > .background-2').should('be.visible');
            // Bloco informações basicas
            cy.get(':nth-child(1) > .background-2 > :nth-child(3) > .accordion-item > .accordion-header > .accordion-button').should('be.visible');
            // Bloco advogados
            cy.get(':nth-child(1) > .background-2 > :nth-child(4) > .accordion-item > .accordion-header > .accordion-button').should('be.visible');
            // Bloco Datas
            cy.get(':nth-child(1) > .background-2 > :nth-child(5) > .accordion-item > .accordion-header > .accordion-button').should('be.visible');
            // Bloco Outras Informações
            cy.get(':nth-child(1) > .background-2 > :nth-child(6) > .accordion-item > .accordion-header > .accordion-button').should('be.visible');

            // Verificar os campos - Bloco 2
            cy.get('.row.mt-3 > :nth-child(2) > .background-2').should('be.visible');
            cy.get('[for="ProcessoSegredoJusticaSim"]').should('be.visible');
            cy.get('[for="ProcessoSegredoJusticaNao"]').should('be.visible');
            cy.get('#ParticularidadesTribunal').should('be.visible').type('Teste-QA');

            // FINALIZAR
            cy.get('#btn-abrir-modal-aprovar-atividade-personalizada').click();
            cy.get('#observacao-modal-aprovar-atividade-personalizada').type('Teste-QA');
            cy.get('#btn-aprovar-modal-aprovar-atividade-personalizada').click();

            // Captura print para evidencia
            cy.screenshot('11-Análise do ativo - Conferência do ofício requisitório',{overwrite: true});
            cy.wait(1000); // Aguarda 1 segundos

        });
    });    