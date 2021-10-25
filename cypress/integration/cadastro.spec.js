/// <reference types="cypress" />

var Chance = require('chance');
var chance = new Chance();

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado com sucesso', () => {
        cy.visit('http://automationpractice.com/index.php')

        // clica no link sign in
        cy.get('.login').click()

        // preenche o email no campo email address
        cy.get('input#email_create').type(chance.email())

        // clica no botao create an account
        cy.get('button#SubmitCreate').click()

        // PERSONAL INFORMATION
        // seleciona a opcao title mrs
        cy.get('input#id_gender2').click()

        // preenche o campo first name
        cy.get('input#customer_firstname').type(chance.first())

        // preenche o campo last name
        cy.get('input#customer_lastname').type(chance.last())

        // preenche o campo password
        cy.get('input#passwd').type(chance.string({ length: 5 }))

        // seleciona o campo date of birth
        cy.get('select#days').select('10', {force: true})
        cy.get('select#months').select('May', {force: true})
        cy.get('select#years').select('2000', {force: true})

        // YOUR ADDRESS
        // preenche o campo company
        cy.get('input#company').type(chance.company())

        // preenche o campo address
        cy.get('input#address1').type(chance.address())

        // // preenche o campo address (line 2)
        cy.get('input#address2').type(chance.address())

        // preenche o campo city
        cy.get('input#city').type(chance.city())

        // preenche o campo state
        cy.get('select#id_state').select('Florida', {force: true})

        // preenche o campo zip/postal code
        cy.get('input#postcode').type(chance.zip())

        // preenche o campo additional information
        cy.get('textarea[id=other]').type('Test')

        // preenche o campo home phone
        cy.get('input#phone').type(chance.phone())

        // preenche o campo mobile phone 
        cy.get('input#phone_mobile').type(chance.phone())

        // preenche o campo assign an address alias for future references
        cy.get('input#alias').type(chance.email())

        // clica no botao register
        cy.get('button#submitAccount').click()

        // confirma se o registro foi feito corretamente
        // validar no topo do site o nome e o sobrenome

        
 
    });
});