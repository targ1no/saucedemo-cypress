/// <reference types="cypress" />

import login from '../../support/pages/login'
import home from '../../support/pages/home'
import cart from '../../support/pages/cart'

describe('Página do carrinho', () => {

    beforeEach(() => {
        cy.visit('/')
        login.validateLoginPage()
        login.typeCredentialsAndLogin()
    });
    
    context('Removendo item do carrinho', () => {
        
        it('Dado que o usuário esteja na página do carrinho', () => {
            home.addItemToCart()
            cart.navigateToCart()
            cart.cartPageValidate()
        });

        it('E clica em "REMOVE"', () => {
            home.addItemToCart()
            cart.navigateToCart()
            cart.removeFromCart()
        });

        it.only('Então o item deverá ter sido removido', () => {
            home.addItemToCart()
            cart.navigateToCart()
            cart.removeFromCart()
            cart.validateRemovedItemFromCart()
        });

    });

});