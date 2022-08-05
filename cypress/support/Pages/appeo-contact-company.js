import * as contact_company from './Selectors/selector-for-contact-company'

export class login {
    //Login username and password
login_username(name , password){

cy.get(contact_company. login_username) .type(name)
cy.get(contact_company. login_password) .type(password)

}
//Login button
login_button(){

cy.get(contact_company.login_button).click()

}
//Contact button
contacts_button(){

    cy.get(contact_company.contacts_button).click()

}
contacts_contacts_button(){

    cy.get(contact_company.contacts_Contacts_Button).click()
}

// contacts_new_contact_click(){

//     cy.get (contact_company.contacts_AddContact_Click).click()
// }
contacts_create_new_contact(){

    cy.get(contact_company.contacts_AddContact_FirstName).type('Rashid2')
    cy.get(contact_company.contacts_AddContact_LastName).type('Shahzad2')
    cy.get(contact_company.contacts_AddContact_Company_Dropdown).select('Invovo')
    cy.get(contact_company.contacts_AddContact_Website).type('Invov.com')
    cy.get(contact_company.contacts_AddContact_Phone_Number).type('03217556292')
    cy.get(contact_company.contacts_AddContact_PhoneNumber_AddNewButton).click()
    cy.get(contact_company.contacts_AddContact_PhoneNumber_AddNewNumber)
    .type('03468080809')
    cy.get(contact_company.contact_AddContact_PhoneNumber_DeleteNumber).click()
    cy.get(contact_company.contacts_AddContact_EmailAddress).type('rashid22@gmail.com')
    cy.get(contact_company.contacts_AddContact_AdditionalEmailAddress)
    .type('rashid1231@gmail.com')
    cy.get(contact_company.contacts_AddContact_AdditonalEmailAddress_AddNewButton).click()
    cy.get(contact_company.contacts_AddContact_AdditionalEmailAddress_AddNewEmail).type('Rashid2@gmail.com')
    cy.get(contact_company.contacts_AddContact_AdditionalEmailAddress_DeleteButton).click()
    cy.get(contact_company.contacts_AddContact_SaveButton).click()
    
}
//Search Field Function
search_field(){

    cy.get(contact_company.contacts_SearchField_ClickOn).type('Rashid2')
}
//select checkbox
contacts_CheckBox_ClickOn(){
    cy.get(contact_company.contacts_CheckBox_ClickOn).click()
}
//Contacts Duplicate Button
contacts_DuplicateButton_ClickOn(){
    cy.get(contact_company.contacts_DuplicateButton_ClickOn).click()
}
//Contacts Delete Button
contacts_DeleteButton_ClickOn(){
    cy.get(contact_company.contacts_DeleteButton_ClickOn).click()
}
//Menu Button (Dropdown)
contacts_MenuButton_ClickOn_Fun(){
    cy.get(contact_company.contacts_MenuButton_ClickOn).click()
}
//Menu Button (DropDown_Delete)
contacts_MenuButton_DropDown_Delete(){
    cy.get(contact_company.contacts_MenuButton_DropDown_Delete).find ('li phx-click="delete"') .click()
}
// my_test_anchor_link(){
//     // cy.get('div.dropdown > ul.dropdown-content > ')
//     cy.log('rwarasd sd asd')
// }
// class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-80"

}
