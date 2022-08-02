/// <reference types ='Cypress'/>

require ("cypress-xpath")

describe ('appeo-testing' , ()=>{
it('Login for Setting-Butoon' , ()=>{
    cy.viewport(1680,1000)
cy.visit('appeo.invo.zone')
cy.wait(1200)
cy.get('#user_email') .type('123@gmail.com')
cy.get('#user_password') .type(12345678)
cy.get('form > :nth-child(5) > button').click()
cy.wait(2200)
cy.get('[phx-click="dasboard"] > span').click()
cy.wait(1500)

})
//Click on Setting Button

it('Click on Setting Button' , ()=>{
cy.get('[height="20"]').click()
// cy.get('[phx-click="settings-tab]').click()
// cy.get('[phx-connected]').click()
cy.wait(2200)
})
// cy.get('#update_company_company_time_zone').click()
// cy.wait(2200)
// cy.get(':nth-child(11) > button').clear()
// cy.wait(1000)

//Fill the General Details of Company
it('Fill General details of Company' , () =>{
cy.get('#update_company_hourly_rate').clear().type('10')
cy.wait(1200)
cy.get(':nth-child(11) > button').click()
cy.wait(2200)
})
//Click on Permession Tab
it('Click on Permission Tab' ,() => {
cy.get('.ml-3')
cy.wait(1500)

cy.get(':nth-child(3) > a').click()
cy.wait(1500)
})
//Add group in Permission

it('Add Group' , () =>{
cy.get(':nth-child(1) > h2 > .btn > a').click()
cy.wait(1200)
cy.get('#role-form_name').type('Zeeshan12')
cy.get('#role-form_description').type("Zeeshan SQA Automation12")
cy.get(':nth-child(6) > .btn').click()
cy.wait(1500)
})
// cy.get(':nth-child(3) > .description_modal_body > .badge > .dropdown > .m-1').click()

//Click on Invite People
it('Verify Invite People Button' , () => {
    cy.get(':nth-child(2) > :nth-child(1) > .btn > a').click()
    cy.wait(1500)
    cy.get('#role-form_user_id').click()
    cy.wait(1200)
    cy.get('[id="role-form_user_id"]').click()
    cy.wait(2200)
})
})




