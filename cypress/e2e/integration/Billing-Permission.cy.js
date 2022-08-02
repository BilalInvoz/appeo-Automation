/// <reference types = 'Cypress'/>

require('cypress-xpath')

describe ('appeo-automation' , () =>{

    it('Login Module-Setting Button' , () =>{
        cy.viewport(1680,1000)
        cy.visit('https://appeo.invo.zone/')
        cy.wait(1200)
        cy.get('#user_email') .type('123@gmail.com')
        cy.get('#user_password') .type(12345678)
        cy.get('form > :nth-child(5) > button').click()
        cy.wait(2200)
        cy.get('[phx-click="dasboard"] > span').click()
        cy.wait(1500)
        cy.get('[height="20"]').click()
        cy.wait(2200)
    })
    //Click on Billing
it('Biiling Funtion' , () =>{
    cy.get(':nth-child(4) > a').click()
    cy.wait(2200)
    cy.get('#create_billing_card_holder_name').type('Zeeshan SQA')
    cy.get('#create_billing_number').type(4242424242424243)
    cy.get('#create_billing_cvc').type(123)
    cy.get('#create_billing_year').type(22)
    cy.get('#create_billing_month').type(11)
    cy.wait(1500)
    //Billing Address
    cy.get('#create_billing_billing_address_country').type('Pakistan')
    cy.get('#create_billing_billing_address_city').type('Faisalabad')
    cy.get('#create_billing_billing_address_address').type('Samundri Road FSD')
    cy.get('#create_billing_billing_address_state').type('Punjab')
    cy.get('#create_billing_billing_address_postal_address').type(38000)
    cy.get('#create_billing_billing_address_vat_number').type(123)
    cy.get('.capitalize').click()
    cy.wait(2200)
})
//Upgrade Subscription
it('Upgrade Subscription', () =>{
    // cy.get('.roles_m_s_first_c > :nth-child(5)').click()
    cy.get(':nth-child(5) > a').click()
    cy.wait(2000)
    cy.get(':nth-child(4) > .block').click()
    // cy.get(':nth-child(2) > .block').click()
    cy.wait(2200)

})


})