/// <reference types = 'Cypress'/>

require("cypress-xpath")

describe('appeo testing', () => {
    it('Initial Test', () => {
        cy.viewport(1880, 900)
        // cy.visit('https://appeo.invo.zone')
        cy.visit('https://appeo.invo.zone')  
        cy.get(':nth-child(4) > .btn').click()
        // cy.get(':nth-child(4) > .btn').click()
        // cy.wait(2200)
        // cy.get(':nth-child(5) > .btn').click()
        // cy.get('[phx-click="task"]').click()
        // cy.wait(1500)
        // cy.get('[phx-click="contacts"]').click()
        // cy.wait(1500)
        // cy.get('[phx-click="leads"]').click()
        // cy.wait(1500)
        // cy.get('[phx-click="sales"]').click()
        // cy.wait(1500)
        // cy.get('[phx-click="post_sales"]').click()
        // cy.wait(1500)
        // cy.get('[phx-click="suppliers"]').click()
        // cy.wait(1500)
        // cy.get('[phx-click="hr"]').click()
        // cy.wait(1500)
        // cy.get('[height="20"] > path').click({force:true})
        // cy.wait(1500)
        // cy.get('.roles_m_s_first_c > :nth-child(3)').click().wait(1500)
        // cy.get('.roles_m_s_first_c > :nth-child(4)').click().wait(1500)
        // cy.contains('Subscription').click().wait(1500)
        // cy.get('label > svg > path').click().wait(1500)
        // cy.get('.m-1').click().wait(1100)
        // cy.xpath('/html/body/div/main/div/div/div[2]/div[1]/div/div/div/div[2]/div[2]/ul/li[1]/a[2]').click().wait(1100)
        // cy.get('[phx-click="contacts"]').click()
        // cy.wait(1500)

        // ////// Creating a new compnay
        // cy.contains('New Company').click()

        // ////// Company name
        // cy.get('#company_contact-form_name').type('Cyber link').wait
        // ////// Company type
        // cy.get('[name="company_contact[type]"]').select('Opel')
        // ////// Website name
        // cy.get('#company_contact-form_website').type('https://www.cyberlink.com')
        // ////// Phone Number of company
        // cy.get('#company_contact-form_phone_numbers_0_phone_number').type('042-15428795')
        // ////// Company email
        // cy.get('#company_contact-form_email').type('careers@cyberlink.com')
        // ////// Street Address
        // cy.get('#company_contact-form_street_address').type('4th-Street, A-Block Johar Town Lahore')
        // ////// Save Button
        // cy.contains('Save').click().wait(1100)
        // cy.should('contains.text', 'Company contact created successfully')


    })
})