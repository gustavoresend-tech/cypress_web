// DADO: que estou na página de detalhamento de uma operação
// E: preciso executar a atividade de cálculo
// QUANDO: acesso o detalhamento de uma operação
// E: Inicio a atividade de cálculo
// E: verifico os valores preenchidos no cálculo
// E: clico na opção calcular
// ENTAO: o cálculo deve ser realizado
// E: a folha de cálculo deve ser exibida na tela


        describe('Verifica Atividade Cálculo', () => {
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

    it('Verifica Atividade Cálculo', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

        // seleciona atividade cálculo
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('be.visible')
        .contains('Cálculo').click();

        // seleciona opção Iniciar
        cy.get('#btn-iniciar-atividade').click();

        // Verifica campos da coluna Proposta
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Desconto de Previdência');

        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Previdência');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Imposto de renda');      

        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Valor imposto de renda');      

        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Percentual imposto de renda');

        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Aliquota imposto de renda');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Início formação');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Término formação');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('% Honorários do advogado');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Data EC-62');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Valor EC-62');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Valor Penhora');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Debito Total do 3');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Debito Total do 3 retido');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('ISS');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Outras despesas');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Principal');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Juros');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Vencimento');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Data de autuação');
        
        cy.get('.formValidator > .p-2 > :nth-child(1)').should('be.visible')
        .contains('Data de liquidação');

        // clica btn calcular
        cy.get('.formValidator > .justify-content-end > .col-auto > .btn').click();
        cy.wait(1000); // aguarda 1 segundo

        // Verifica campos da folha de cálculo
        
        // Ano vencimento
        cy.get('.container-fluid > :nth-child(1) > :nth-child(1) > .card').should('be.visible')
        .contains('Ano de vencimento');

        // Percentual Honorários
        cy.get('.container-fluid > :nth-child(1) > :nth-child(2) > .card').should('be.visible')
        .contains('Percentual Honorários');

        // Número de Meses
        cy.get('.container-fluid > :nth-child(1) > :nth-child(3) > .card').should('be.visible')
        .contains('Número de Meses');

        // Bloco Oficio
        cy.get('.container-fluid > :nth-child(2) > :nth-child(1) > .card').should('be.visible')
        .contains('Ofício');

        // Valor face Oficio
        cy.get(':nth-child(3) > :nth-child(1) > .card').should('exist')
        .contains('Valor');

        // Data de liquidação Oficio
        cy.get(':nth-child(3) > :nth-child(2) > .card').should('exist')
        .contains('Data de Liquidação');

        // Bloco PJUS
        cy.get('.container-fluid > :nth-child(2) > :nth-child(2) > .card').should('exist')
        .contains('Cálculo PJUS');

        // Valor face PJUS
        cy.get(':nth-child(3) > :nth-child(1) > .card').should('exist')
        .contains('Valor');

        // Data de liquidação PJUS
        cy.get(':nth-child(3) > :nth-child(2) > .card').should('exist')
        .contains('Data de Liquidação');

        // Valores barra inferior

        // Valor do cliente
        cy.get('.container-fluid > .card.mt-3 > .row > :nth-child(1)').should('exist')
        .contains('Valor do cliente');

        // Valor aquisição
        cy.get('.container-fluid > .card.mt-3 > .row > :nth-child(2)').should('exist')
        .contains('Valor aquisição');

        // Despesas cartório
        cy.get('.card.mt-3 > .row > :nth-child(3)').should('exist')
        .contains('Despesas cartório');

        // Prazo em meses
        cy.get('.card.mt-3 > .row > :nth-child(4)').should('exist')
        .contains('Prazo em meses');

        // Tabela máxima permitida
        cy.get('.row > :nth-child(5)').should('exist')
        .contains('Tabela máxima permitida');

        // Valor máximo da tabela
        cy.get('.row > :nth-child(6)').should('exist')
        .contains('Valor máximo da tabela');

        // clica btn refazer cálculo
        cy.get('.ms-auto > .btn-secondary').click();
        cy.wait(1000); // aguarda 1 segundo

        // clica btn calcular
        cy.get('.formValidator > .justify-content-end > .col-auto > .btn').click();
        cy.wait(2000); // aguarda 2 segundos

        // Captura print para evidencia
        cy.screenshot('17-Folha de Cálculo,{overwrite: true}');
        cy.wait(1000); // Aguarda 1 segundos

        // clica finalizar
        cy.get('#btn-abrir-modal-finalizar-calculo').click();
        cy.get('#observacao-aprovar-atividade').type('Teste-QA');
        cy.get('#input-calculo-CriarAtividadeRenegociacao').click();

        // Captura print para evidencia
        cy.screenshot('17-Modal Finaliza Cálculo,{overwrite: true}');
        cy.wait(1000); // Aguarda 1 segundos

        // Verificar atividade "Guias de tributo"
        cy.get('.d-flex > .text-2').should('exist')
        .contains('Tributos');

        // finalizar atividade
        cy.get('#btn-aprovar-atividade').click();
        cy.wait(1000); // aguarda 1 segundo
        
        // Captura print para evidencia
        cy.screenshot('17-Atividade Cálculo Aprovada,{overwrite: true}');
        cy.wait(1000); // Aguarda 1 segundos

            // Clica btn "Pular Etapa"            
            cy.get('#btn-abrir-modal-pular-etapa').click();
            cy.wait(1000); // Aguarda 1 segundos
            cy.get('#btn-avancar-etapa').click();
                   
            // Clica btn "Pular Etapa"            
            cy.get('#btn-abrir-modal-pular-etapa').click();
            cy.wait(1000); // Aguarda 1 segundos
            cy.get('#btn-avancar-etapa').click();       
    });
});