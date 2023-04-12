/// <reference types="cypress" />

describe("Test Contact Us form via webdriveUni",() =>{

  it("should be able to successful submission via contact us form", () => {
    //cy.visit('http://www.webdriveruniversity.com/')
    //cy.get('#contact-us').click()
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name="first_name"]').type('Thisaru')
    cy.get('[name="last_name"]').type('Saduranga')
    cy.get('[name="email"]').type('abc@gmail.com')
    cy.get('textarea.feedback-input').type('THis is a comment')
    cy.get('[type="submit"]').click()
  })

  it("should not be able to successful submission via contact us form as all field are required", () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name="first_name"]').type('Thisaru')
    cy.get('[name="last_name"]').type('Saduranga')
    // cy.get('[name="email"]').type('abc@gmail.com')
    cy.get('textarea.feedback-input').type('THis is a comment')
    cy.get('[type="submit"]').click()
  })

})

