/// <reference types="cypress" />

import login from '../../support/pages/login/index'
import home from '../../support/pages/home/index'

describe('Página de Login', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    context('Login com sucesso', () => {
        
        it('Dado que o usuário entra na página da aplicação', () => {
            login.validateLoginPage()
        });
    
        it('E digita credenciais corretas no formulário', () => {
            login.typeCredentials()
        });
    
        it('E clica no botão de "Login"', () => {
            login.typeCredentialsAndLogin()
        });
    
        it('Então a página principal (Home) deve aparecer', () => {
            login.typeCredentialsAndLogin()
            home.homePageIsVisible()
        });

    });

    context('Login sem sucesso', () => {
        
        it('Dado que o usuário entra na página da aplicação', () => {
            login.validateLoginPage()
        });
    
        it('E digita credenciais erradas no formulário', () => {
            login.typeCredentialsError()
        });
    
        it('E clica no botão de "Login"', () => {
            login.typeCredentialsAndLoginError()
        });
    
        it('Então a página principal (Home) não deve aparecer', () => {
            login.typeCredentialsAndLoginError()
            home.homePageIsNotVisible()
        });

    });

    context('Logoff', () => {
    
        it('Dado que o usuário esteja logado na apliação', () => {

        });

        it('E clica no botão menu hambúrguer no canto superior esquerdo da tela', () => {

        });

        it('Quando clicar no botão "Logoff"', () => {
            
        });

        it('Então ele deverá voltar para a página de login', () => {
            
        });

    });
});
