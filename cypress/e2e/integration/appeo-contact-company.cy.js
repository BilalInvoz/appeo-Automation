/// <reference types = 'Cypress' />

import {login} from '../../support/Pages/appeo-contact-company'

const Login = new login()
require('cypress-xpath')
describe('Contacts_Company', ()=>{
it('Login_TC' ,()=>{
    cy.viewport(1800,1000)
    cy.visit('https://appeo.invo.zone/')

Login.login_username('123@gmail.com',12345678)
Login.login_button()

} )





})