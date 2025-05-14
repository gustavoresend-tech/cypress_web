// DADO: que estou na pagina de detalhamento de uma operação
// E: preciso verificar a atividade: Estudo do processo judicial
// QUANDO: clico na respectiva atividade
// E: clico no btn "Iniciar" exibido
// ENTAO: a atividade deve ser iniciada
// E: os campos exibidos conforme definição
// E: os btn´s "Finalizar" e "Reprovar" DEVEM ser exibidos
// E: a atividade precisa ser finaliza com sucesso

// Definição de campos AQUI

//


    describe('Verifica Atividade Análise do ativo - Estudo do processo judicial', () => {
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
    
        it('Verifica Atividade Análise do ativo - Estudo do processo judicial', () => {
            // Acessa o primeiro card dispoível no worlflow
            cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();


            // Estudo do processo judicial

            // Verifica se a atividade Estudo do processo judicial" está disponível e clica
            cy.get('[style="max-width: calc(100vw - 320px);"]').should('exist')
            .contains('Estudo do processo judicial').click();
            cy.get('#btn-iniciar-atividade').click();

            // Verificar os campos - Bloco 1
            cy.get('#form-finalizar-atividade-personalizada > .row.mt-3 > :nth-child(1)').should('be.visible');
            // Bloco informações basicas
            cy.get(':nth-child(1) > .background-2 > :nth-child(3) > .accordion-item > .accordion-header > .accordion-button').should('exist');
            // Bloco advogados
            cy.get(':nth-child(1) > .background-2 > :nth-child(4) > .accordion-item > .accordion-header > .accordion-button').should('exist');
            // Bloco Datas
            cy.get(':nth-child(1) > .background-2 > :nth-child(5) > .accordion-item > .accordion-header > .accordion-button').should('exist');
            // Bloco Outras Informações
            cy.get(':nth-child(1) > .background-2 > :nth-child(6) > .accordion-item > .accordion-header > .accordion-button').should('exist');

            // Verificar os campos - Bloco 2
            cy.get('.row.mt-3 > :nth-child(2) > .background-2').should('be.visible')

            // Identifica o caso e a sentença
            cy.get(':nth-child(2) > .accordion > .accordion-item > .accordion-header > .accordion-button').should('exist');

            // Informações para o cálculo
            cy.get(':nth-child(6) > .accordion > .accordion-item > .accordion-header > .accordion-button').should('exist');

            // FINALIZAR
            cy.get('#btn-abrir-modal-aprovar-atividade-personalizada').click();
            cy.get('#observacao-modal-aprovar-atividade-personalizada').type('Teste-QA');
            cy.get('#btn-aprovar-modal-aprovar-atividade-personalizada').click();

            // Captura print para evidencia
            cy.screenshot('10-Análise do ativo - Estudo do processo judicial',{overwrite: true});
            cy.wait(1000); // Aguarda 1 segundos

        });
    });    