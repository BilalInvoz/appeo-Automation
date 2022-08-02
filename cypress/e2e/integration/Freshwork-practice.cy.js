describe('Check element get concept' , ()=>{

it('element get testing' , () =>{
// cy.visit('https://www.freshworks.com/')
// //  

// // cy.get('class="align-center"').should('be.visible')
// // .and ('contain','helo') 
// // .and('have.length,1')

// cy.get('ul.footer-nav li').should('have.length' , 24)

// cy.get('ul.footer-nav li')
// .find("a[href*='footer']")
// .should('have.length',6)
// cy.wait(2200)
cy.visit('https://www.amazon.in/')

cy.get('.nav-search-field').within(() =>{

cy.get('#twotabsearchtextbox').type('Apple Mac Book Laptop')
cy.wait(2200)

})


})
})