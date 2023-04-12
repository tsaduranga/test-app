/// <reference types="cypress" />

describe('Login Page', () => {
    it('Login Form both Wrong email and Password', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('#email').clear().type('wrong@gmail.com')
        cy.get('#password').clear().type('wrong')
        cy.get('.MuiButtonBase-root').click()
        cy.get('.alert').contains('Invalid email or password')
    });

    it('Login Form correct email and wrong Password', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('#email').clear().type('admin@gmail.com')
        cy.get('#password').clear().type('wrong')
        cy.get('.MuiButtonBase-root').click()
        cy.get('.alert').contains('Invalid email or password')
    });

    it('Login Form wrong email and correct Password', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('#email').clear().type('wrong@gmail.com')
        cy.get('#password').clear().type('12345')
        cy.get('.MuiButtonBase-root').click()
        cy.get('.alert').contains('Invalid email or password')
    });

    it('Login Form both correct email and  Password', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('#email').clear().type('admin@gmail.com')
        cy.get('#password').clear().type('12345')
        cy.get('.MuiButtonBase-root').click()
        cy.get('.MuiTypography-h4').contains('Welcome to your Dashboard')

    });

    // ss
 
});