describe('Тестирование контента CV на GitHub', function () {
    
    it('Переход на сайт-визитку Тарасова Николая', function () {
        cy.visit('https://greasemonkey-nt.github.io/');
        cy.contains('QA-Engineer').should('be.visible');
        cy.contains('Николай Тарасов').should('be.visible');
        cy.end();
         })
    it('Тест кнопки на сайте-визитке', function () {
        cy.visit('https://greasemonkey-nt.github.io/');
        cy.contains('Нажми').should('be.visible');
        cy.get('button').click();
        cy.end();
         })
    it('Переход на github c репозиториями', function () {
        cy.visit('https://greasemonkey-nt.github.io/');
        cy.contains('QA-Engineer').should('be.visible');
        cy.contains('Николай Тарасов').should('be.visible');
        cy.get('[href="https://github.com/greasemonkey-nt"] > .bx').click();
        cy.end();
         })





        })