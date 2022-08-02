import * as contact_company from './Selectors/selector-for-contact-company'

export class login {
login_username(name , password){

cy.get(contact_company. login_username) .type(name)
cy.get(contact_company. login_password) .type(password)

}
login_button(){

cy.get(contact_company.login_button).click()

}



}
