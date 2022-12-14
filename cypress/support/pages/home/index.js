/// <reference types="cypress" />

const elem = require('./elements').ELEMENTS

class home{

    homePageIsVisible(){
        cy.get(elem.home_title).should('have.text', 'Products')
        //cy.get(elem.cart).should('to.exist')
    }
    
    homePageIsNotVisible(){
        cy.get(elem.home_title).should('not.to.exist')
    }

    productsAreVisible(){
        cy.get(elem.item_container).should('be.visible')
    }

    addItemToCart(){
        cy.get(elem.add_to_cart_button).click()
    }

    showCartBadge(){
        cy.get(elem.cart_badge).should('be.visible')
    }

}

export default new home()