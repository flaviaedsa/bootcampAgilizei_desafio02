/// <reference types="cypress" />

var Chance = require('chance');
var chance = new Chance();

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado com sucesso', () => {
        cy.visit('http://automationpractice.com/index.php')

  
        cy.get('.login').click()

        cy.get('input#email_create').type(chance.email())

        cy.get('button#SubmitCreate').click()

        // PERSONAL INFORMATION
     
        cy.get('input#id_gender2').click()
        cy.get('input#customer_firstname').type(chance.first())
        cy.get('input#customer_lastname').type(chance.last())
        cy.get('input#passwd').type(chance.string({ length: 5 }))
        cy.get('select#days').select('10', {force: true})
        cy.get('select#months').select('May', {force: true})
        cy.get('select#years').select('2000', {force: true})

        // YOUR ADDRESS
   
        cy.get('input#company').type(chance.company())
        cy.get('input#address1').type(chance.address())
        cy.get('input#address2').type(chance.address())
        cy.get('input#city').type(chance.city())
        cy.get('select#id_state').select('Florida', {force: true})
        cy.get('input#postcode').type(chance.zip())
        cy.get('textarea[id=other]').type('Test')
        cy.get('input#phone').type(chance.phone())
        cy.get('input#phone_mobile').type(chance.phone())
        cy.get('input#alias').type(chance.email())

        cy.get('button#submitAccount').click()

        cy.contains('Welcome to your account.')  
    });
});