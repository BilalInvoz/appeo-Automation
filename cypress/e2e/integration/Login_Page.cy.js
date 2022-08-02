/// <reference types = 'Cypress'/>

require ("cypress-xpath")

describe('appeo testing', () =>{
it('Login Test', () =>{
cy.viewport(1680,1050)

//Enter Valid username and password
cy.visit('https://appeo.invo.zone/')
cy.get('#user_email').type('123@gmail.com')
cy.get('#user_password').type('12345678')
cy.get('form > :nth-child(5) > button').click()
cy.wait(2200)
cy.get('.m-1 > span').click()
//cy.get('[data-csrf="FBwaZlwnGWUVLX8OIRQNeA4BUzYTNTg2nyEQ3BNUgX9FsbXMBJdrEdAO"]').click()
cy.get('[data-to="/users/log_out"]').click()
cy.wait(2200)

//Invalid username and password
cy.visit('https://appeo.invo.zone/users/log_in')
cy.get('#user_email').type('1@gmail.com')
cy.get('#user_password').type('125678')
//cy.get('form > :nth-child(5) > button').click()
cy.get('form > :nth-child(5) > button').click()
cy.wait(2200)

//Empty Username and Password 
cy.visit('https://appeo.invo.zone/users/log_in')
cy.get('#user_email')
cy.get('#user_password')
cy.get('form > :nth-child(5) > button').click()
cy.wait(2200)

//Invalid Username and Valid Password
cy.get('#user_email').type('1@gmail.com')
cy.get('#user_password').type('12345678')
cy.get('form > :nth-child(5) > button').click()
cy.wait(2200)
cy.visit('https://appeo.invo.zone/users/log_in')
cy.wait(1500)

//Valid Username and Invalid Password
cy.get('#user_email').type('123@gmail.com')
cy.get('#user_password').type('1257655678')
cy.get('form > :nth-child(5) > button').click()
cy.wait(2200)

//Log In with Google Account
cy.get(':nth-child(4) > .btn > a').click()
cy.wait(2200)
cy.get('.m-1 > span').click()
cy.get('[data-to="/users/log_out"]').click()
cy.wait(2200)
// cy.get('#update_company_hourly_rate') .type('10')
cy.get(':nth-child(11) > button').click()
cy.wait(2200)


})


})
