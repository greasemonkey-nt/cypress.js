
describe('Поиск даты дня тестировщика', function () {
   it('Проверка, что при поиске дня тестировщика в выдаче корректная дата', function () {
        cy.visit('https://google.com');
        cy.get('#APjFqb').type('день тестировщика').type('{enter}');
        cy.contains('День тестировщика');
        cy.contains('суббота, 9 сентября');
    })
})
