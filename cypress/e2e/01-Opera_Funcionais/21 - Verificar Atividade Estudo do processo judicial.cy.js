// DADO: que estou na pagina de detalhamento de um card/precatório aba "Atividades"
// E: quero verificar a atividade "Estudo do processo judicial"
// QUANDO: clico no btn "Iniciar"

describe('Verifica Atividade Estudo do processo judicial', () => {
    beforeEach(() => {
    // Realiza o login direcionado para SSO Microsoft
    cy.origin('https://login.microsoftonline.com', () => {
        // Volta para a origem, página pjus board
        cy.visit(Cypress.env('URL_OPERA') + '/board');
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

    it('Verifica Atividade Estudo do processo judicial', () => {
        // Acessa o primeiro card dispoível no worlflow
        cy.contains('Teste-QA-Funcionais - (NAO USAR)').click();

        // Verifica se a atividade "Estudo do processo judicial" está disponível e clica
        cy.get('[style="max-width: calc(100vw - 320px);"]').should('exist')
        .contains('Estudo do processo judicial').click();

        // Inicia a atividade
        cy.get('#btn-iniciar-atividade').click();

        // Verifica os campos da atividade - Informações básicas
        cy.get('#form-finalizar-atividade-personalizada > .row.mt-3 > :nth-child(1) > .background-2').should('exist').click();
        cy.get('#accordion-dados-credito-informacoes-basicas > .accordion-body > .scroll-accordion-credito > :nth-child(2) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-informacoes-basicas > .accordion-body > .scroll-accordion-credito > :nth-child(3) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-informacoes-basicas > .accordion-body > .scroll-accordion-credito > :nth-child(4) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-informacoes-basicas > .accordion-body > .scroll-accordion-credito > :nth-child(5) > .text-label').should('exist');

        // Advogado
        cy.get(':nth-child(1) > .background-2 > :nth-child(4) > .accordion-item > .accordion-header > .accordion-button').should('exist').click();
        cy.get('#accordion-dados-credito-advogado > .accordion-body > .scroll-accordion-credito > :nth-child(2) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-advogado > .accordion-body > .scroll-accordion-credito > :nth-child(3) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-advogado > .accordion-body > .scroll-accordion-credito > :nth-child(4) > .text-label').should('exist');

        // Datas
        cy.get(':nth-child(1) > .background-2 > :nth-child(5) > .accordion-item > .accordion-header > .accordion-button').should('exist').click();;
        cy.get('#accordion-dados-credito-datas > .accordion-body > .scroll-accordion-credito > :nth-child(2) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-datas > .accordion-body > .scroll-accordion-credito > :nth-child(3) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-datas > .accordion-body > .scroll-accordion-credito > :nth-child(4) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-datas > .accordion-body > .scroll-accordion-credito > :nth-child(5) > .text-label').should('exist');

        // Outroas Informações
        cy.get('#accordion-dados-credito-datas > .accordion-body > .scroll-accordion-credito > :nth-child(3) > .text-label').should('exist').click();
        cy.get('#accordion-dados-credito-outras-informacoes > .accordion-body > .scroll-accordion-credito > :nth-child(2) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-outras-informacoes > .accordion-body > .scroll-accordion-credito > :nth-child(3) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-outras-informacoes > .accordion-body > .scroll-accordion-credito > :nth-child(3) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-outras-informacoes > .accordion-body > .scroll-accordion-credito > :nth-child(5) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-outras-informacoes > .accordion-body > .scroll-accordion-credito > :nth-child(6) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-outras-informacoes > .accordion-body > .scroll-accordion-credito > :nth-child(7) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-outras-informacoes > .accordion-body > .scroll-accordion-credito > :nth-child(8) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-outras-informacoes > .accordion-body > .scroll-accordion-credito > :nth-child(9) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-outras-informacoes > .accordion-body > .scroll-accordion-credito > :nth-child(10) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-outras-informacoes > .accordion-body > .scroll-accordion-credito > :nth-child(11) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-outras-informacoes > .accordion-body > .scroll-accordion-credito > :nth-child(12) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-outras-informacoes > .accordion-body > .scroll-accordion-credito > :nth-child(13) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-outras-informacoes > .accordion-body > .scroll-accordion-credito > :nth-child(14) > .text-label').should('exist');
        cy.get('#accordion-dados-credito-outras-informacoes > .accordion-body > .scroll-accordion-credito > :nth-child(15) > .text-label').should('exist');

        // blocos
        cy.get('#form-finalizar-atividade-personalizada > .row.mt-3 > :nth-child(2) > .background-2').should('exist');
        cy.get('#ObservacaoDeliberacaoAtuacaoCnds').type('Teste QA');
        cy.get('#DataUltimaMovimentacaoAnaliseAtivo').should('exist');

        // Verifica se btn "Reprovar" existe
        cy.get('#btn-abrir-modal-reprovar-atividade-personalizada').should('exist');

        // Captura print para evidencia
        cy.screenshot('21-Estudo processo judicial',{overwrite: true});
        cy.wait(1000); // Aguarda 1 segundos
        
        // Finaliza Atividade
        cy.get('#btn-abrir-modal-aprovar-atividade-personalizada').click();

        //Preenche modal de observação
        cy.get('#observacao-modal-aprovar-atividade-personalizada').type('Teste-QA');
        cy.get('#btn-aprovar-modal-aprovar-atividade-personalizada').click();
        cy.wait(1000); // Aguarda 1 segundos

        cy.get('#btn-abrir-modal-pular-etapa').click();
        cy.wait(1000); // Aguarda 1 segundos
        cy.get('#btn-avancar-etapa').click();

    });
});    