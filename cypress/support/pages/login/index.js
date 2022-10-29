const elem = require('./elements').ELEMENTS

class login{

    validateLoginPage(){
        cy.get(elem.username).should('be.visible')
    }

    typeCredentials(){
        cy.get(elem.username).type('standard_user').should('have.value', 'standard_user')
        cy.get(elem.password).type('secret_sauce').should('have.value', 'secret_sauce')
    }
    
    typeCredentialsAndLogin(){
        this.typeCredentials()
        cy.get(elem.loginButton).click()
    }

    typeCredentialsError(){
        cy.get(elem.username).type('standard_use').should('have.value', 'standard_use')
        cy.get(elem.password).type('secret_sauc').should('have.value', 'secret_sauc')
    }
    
    typeCredentialsAndLoginError(){
        this.typeCredentialsError()
        cy.get(elem.loginButton).click()
    }
}

export default new login()