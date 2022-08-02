/// <reference types= 'Cypress'/>

require("cypress-xpath") 

describe ('appeo testing', () =>{

it('signup test' , () =>{
cy.viewport(1680,1050)
cy.visit('https://appeo.invo.zone/')
cy.get('[href="/users/register"]').click()

//Register Account with email
cy.get('#user_name'). type('Zeeshan')
cy.wait(500)
cy.get('#user_email'). type('zeeshan.ullah1211@gmail.com')
cy.get('#user_password'). type ('1122334455')
cy.get('#user_company_name'). type('InvoZone')
cy.get('#user_recieve_emails'). click()
cy.get('.form-control-checkbox > button'). click()
cy.wait(2200)
})


})