/// <reference types="cypress" />

describe('Cadastro', () => {
    it('Quando eu finalizar os dados e finalizar, então o cadastro deve ser efetuado com sucesso', () => {
        cy.visit('http://automationpractice.com/index.php')

        // clica no link sign in
        cy.get('.login').click()

        // preenche o email no campo email address
        cy.get('input#email_create').type(chance.email())

        // clica no botao create an account

        // PERSONAL INFORMATION
        // seleciona a opcao title mrs

        // preenche o campo first name

        // preenche o campo last name

        // preenche o campo password

        // seleciona o campo date of birth

        // YOUR ADDRESS
        // preenche o campo company

        // preenche o campo address

        // preenche o campo address (line 2)

        // preenche o campo city

        // preenche o campo state

        // preenche o campo zip/postal code

        // preenche o campo additional information

        // preenche o campo home phone

        // preenche o campo assign an address alias for future references

        // clica no botao register

        // confirma se o registro foi feito corretamente

        
 
    });
});