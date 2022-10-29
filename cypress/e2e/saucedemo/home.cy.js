/// <reference types="cypress" />

import login from '../../support/pages/login'
import home from '../../support/pages/home'

describe('Página principal | Home', () => {

    beforeEach(() => {
        cy.visit('/')
        login.validateLoginPage()
        login.typeCredentialsAndLogin()
    });
    
    context('Adicionando item no carrinho', () => {
        
        it('Dado que o usuário está na página principal (Home)', () => {
            home.homePageIsVisible()
        });

        it('E consegue visualizar os produtos listados', () => {
            home.productsAreVisible()
        });

        it('Quando clicar no botão "ADD TO CART"', () => {
            home.addItemToCart()
        });

        it('Então um novo item deverá ter sido adicionado no carrinho de compras', () => {
            home.addItemToCart()
            home.showCartBadge()
        });

    });

});