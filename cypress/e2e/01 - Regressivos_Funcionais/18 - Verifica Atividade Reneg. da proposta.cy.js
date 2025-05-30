// DADO: que estou na pagina de detalhamento de uma operação
// E: preciso verificar a atividade: Renegociação da proposta
// QUANDO: clico na respectiva atividade
// E: clico no btn "Iniciar" exibido
// ENTAO: a atividade deve ser iniciada
// E: os campos exibidos conforme definição
// E: os btn´s "Finalizar" e "Reprovar" DEVEM ser exibidos
// E: a atividade precisa ser finaliza com sucesso

    describe('Verifica Atividade "Renegociação da proposta"', () => {
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
    
        it('Verifica Atividade "Renegociação da proposta"', () => {
            // Acessa o primeiro card dispoível no worlflow
            cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();
        
            // Verifica atividade "Renegociação da proposta"
            cy.get('[style="max-width: calc(100vw - 320px);"]').should('exist')
            .contains('Renegociação da proposta').click();
            cy.get('#btn-iniciar-atividade').click();

            // Captura print para evidencia
            cy.screenshot('18-Renegociação da proposta',{overwrite: true});
            cy.wait(1000); // Aguarda 1 segundos

            // Tratamento atividade "Renegociação da proposta"

            // Verifica existência dos campos | Proposta feita pelo negociador, TIR
            cy.get('#atividades > .card > :nth-child(3) > :nth-child(1)').should('exist')
            .contains('Proposta feita pelo negociador');

            cy.get('#atividades > .card > :nth-child(3) > :nth-child(1)').should('exist')
            .contains('TIR');

            // Verifica existência dos campos com valores
            cy.get(':nth-child(3) > .background-2 > .text-bold').should('exist');
            cy.get(':nth-child(3) > .background-2 > .text-secondary').should('exist');

            // Verifica informações Oficio e Cálculo PJUS
            cy.get('.background-2 > .row').should('exist');
            cy.get('.background-2 > .row > :nth-child(1)').should('exist')
            .contains('Ofício');
            cy.get('.background-2 > .row > :nth-child(2)').should('exist')
            .contains('PJUS');

            // Verirfica btn´s de valor futuro
            cy.get('[for="CalcularValorFuturoSim"]').should('exist')
            .click();
            cy.get('[for="CalcularValorFuturoNao"]').should('exist')
            .click();

            // Verifica btn reprovar
            cy.get('#btn-abrir-modal-reprovar-recalculo').should('exist');

            cy.get(':nth-child(3) > .background-2 > .text-bold')
            .invoke('text')
            .should('not.be.empty')
            .then((valor) => {
              cy.get('#input-ValorProposta').type(valor);
            });

            // Insere arquivo obrigatorio
            cy.get('#btn-upload-file-input-arquivo-comprovante-negociacao-label').selectFile('Teste_Upload.pdf');
            // Clica em finlizar
            cy.get('#btn-abrir-modal-finalizar-recalculo').click();

            // Verifica modal de observação "Atenção"
            cy.get('.modal-content > .modal-body').should('exist');

            // clica no btn "Adicionar arquivo" e Realiza Upload de arquivo pré selecionado
            cy.get('#btn-upload-file-input-arquivo-justificativa-label').selectFile('Teste_Upload.pdf');
            cy.get('#observacao-aprovar-atividade-recalculo').type('Teste-QA');
            cy.wait(2000); // Aguarda 2 segundos

            // Clicar em "Finalizar atividade"
            cy.get('#btn-aprovar-atividade-recalculo').click();
            cy.wait(2000); // Aguarda 2 segundos


        });
    });    