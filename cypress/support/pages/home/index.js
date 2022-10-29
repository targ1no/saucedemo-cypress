const elem = require('./elements').ELEMENTS

class home{

    homePageIsVisible(){
        cy.get(elem.cart).should('to.exist')
    }
    
    homePageIsNotVisible(){
        cy.get(elem.cart).should('not.to.exist')
    }
}

export default new home()