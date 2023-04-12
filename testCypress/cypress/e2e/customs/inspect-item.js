/// <reference types="cypress" />

describe("Inspect Automation Test Store items using chain of commands",() =>{

  it("click on the item using item header", () => {
    cy.visit('https://www.automationteststore.com/')
    cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
  })

  it("click on the item using item text", () => {
    cy.visit('https://www.automationteststore.com/')
    cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
  })


})

