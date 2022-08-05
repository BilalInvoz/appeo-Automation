/// <reference types = 'Cypress' />

import {login} from '../../support/Pages/appeo-contact-company'

const Login = new login()
require('cypress-xpath')
//Login Function before all test cases
before('Login_TC' ,()=>{
    cy.viewport(1800,1000)
    cy.visit('https://appeo.invo.zone/')
    cy.wait(2200)

Login.login_username('123@gmail.com',12345678)
Login.login_button()
cy.wait(2200)
})
//Contacts Tab 
describe('Appeo_Contacts_Tab', ()=>{

it('Contacts_Button_Module' , ()=>{

    cy.wait(3000)
    Login.contacts_button()
    cy.wait(3000)
Login.contacts_contacts_button()
cy.wait(2200)
// Login.contacts_new_contact_click()
// cy.wait(2200)
} )
    it.skip('Create_New_Contact' ,()=>{
    Login.contacts_create_new_contact()
    cy.wait(3000)
    })
//Search Field
    it('Search_Field' , () =>{

    Login.search_field()
    cy.wait(2200)

    })
// CheckBox Select
    it('Contacts_CheckBox_ClickOn' , ()=>{

         Login.contacts_CheckBox_ClickOn()
        cy.wait(2200)
     })
//Duplicate Button
    it('Duplicate_Button_ClickOn' , ()=>{

        Login.contacts_DuplicateButton_ClickOn()
        cy.wait(3000)
})

//CheckBox Select again select
    it('Contacts_CheckBox_ClickOn' , ()=>{

         Login.contacts_CheckBox_ClickOn()
        cy.wait(2200)
     })
//Delete Button
    it.skip('Contacts_Delete_Button' , ()=>{

        Login.contacts_DeleteButton_ClickOn()
        cy.wait(3000)
    })

//Menu Button (Click)
it('Menu_Button_ClickOn' , ()=>{
    Login.contacts_MenuButton_ClickOn_Fun()
    cy.wait(2200)
})
//Menu Button DropDown Delete Button
// cy.log(message)

})