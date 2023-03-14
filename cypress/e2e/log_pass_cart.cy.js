describe('Форма логина и пароля', function () {
//1.1 Напиши проверку на позитивный кейс авторизации:
    it('Логин верный, Пароль верный', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

//1.2 Напиши автотест на проверку логики восстановления пароля:  
    it('Проверка функции восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('evgenyshandrik@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

//1.3 Напиши проверку на негативный кейс авторизации:
    it('Логин верный, пароль неверный', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('Loveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

//1.4 Напиши проверку на негативный кейс авторизации:
    it('Логин неверный, пароль верный ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('evgenyshandrik@mail.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

//1.5 Напиши проверку на негативный кейс валидации:
    it('Логин без @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('evgenyshandrikmail.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

//1.6 Напиши проверку на привидение к строчным буквам в логине:
    it('Приведение логина к нижнему регистру(баг)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
    })            
//Тест должен упасть — и это ок (то есть мы поймали баг, который допустил разработчик)
})

//Напиши один длинный автотест для https://testqastudio.me/
describe('Совершение покупки в магазине', function () {
        it('Совершение покупки в магазине', function () {
            //Открой главную страницу   https://testqastudio.me/
           cy.visit('https://testqastudio.me/');
           //Открой карточку товара «БРОММС Двухместная кровать»
           cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
           //Измени количество на 3шт. и положи в корзину
           cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click().wait(2000).click();
           cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
           //Вернись на главную
           cy.get('#cart-modal > .off-modal-layer').click();
           cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
           //Открой карточку товара «КЛЛАРИОН Низкий столик» и добавь его в корзину
           cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
           cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').wait(2000).click().wait(4000);
           //Попробуй завершить покупку, заполнив остальные шаги
           cy.get('.checkout').click();
           cy.contains('Оформение заказа').should('be.visible');
           cy.get('#billing_first_name').type('Евгений');
           cy.get('#billing_last_name').type('Шандрик');
           cy.get('#billing_address_1').wait(2000).type('ул. Советская 11');
           cy.get('#billing_city').type('Минск');
           cy.get('#billing_state').type('Минская область');
           cy.get('#billing_postcode').type('220010');
           cy.get('#billing_phone').type('80179999999');
           cy.get('#billing_email').type('evgenyshandrik@mail.ru');
           cy.get('#place_order').click();
           cy.contains('Ваш заказ принят. Благодарим вас.');                
        })
})