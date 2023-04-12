/// <reference types="cypress" />

describe('SignUp Page', () => {
    it('validation check', () => {
        cy.visit('http://localhost:3000/signup')
        
        //check username
        cy.get('#name').clear().type('user')
        cy.get('#email').clear().type('user@gmail.com')
        cy.get('#password').clear().type('passsword')
        cy.get('#passwordConfirmation').clear().type('passsword')
        cy.get('.MuiButtonBase-root').click()
        cy.get('#name-helper-text').contains('name must be at least 5 characters')

        //check email
        cy.get('#name').clear().type('newUser')
        cy.get('#email').clear().type('user@gmail.comuser@')
        cy.get('#password').clear().type('passsword')
        cy.get('#passwordConfirmation').clear().type('passsword')
        cy.get('.MuiButtonBase-root').click()
        cy.get('#email-helper-text').contains('Enter a valid email')

         //check email
         cy.get('#name').clear().type('newUser')
         cy.get('#email').clear().type('user@gmail.comu')
         cy.get('#password').clear().type('pass')
         cy.get('#passwordConfirmation').clear().type('passsword')
         cy.get('.MuiButtonBase-root').click()
         cy.get('#password-helper-text').contains('Password should be of minimum 5 characters length')
         cy.get('#passwordConfirmation-helper-text').contains('Passwords must match')

         //type all inputs correctly and shoud not include any validation error



    });

    it('Sign up  Using Exist Name', () => {
        cy.visit('http://localhost:3000/signup')
        cy.get('#name').clear().type('Admin')
        cy.get('#email').clear().type('new@gmail.com')
        cy.get('#password').clear().type('password')
        cy.get('#passwordConfirmation').clear().type('password')
        cy.get('.MuiButtonBase-root').click()
        cy.get('.alert').contains('User already exists')
    });

    it('Sign up  Using Exist Email', () => {
        cy.visit('http://localhost:3000/signup')
        cy.get('#name').clear().type('NewUser')
        cy.get('#email').clear().type('admin@gmail.com')
        cy.get('#password').clear().type('password')
        cy.get('#passwordConfirmation').clear().type('password')
        cy.get('.MuiButtonBase-root').click()
        cy.get('.alert').contains('User already exists')
    });

    it('Sign Up Using Correct Input tool', () => {
        cy.visit('http://localhost:3000/signup')
        cy.get('#name').clear().type('NewUser')
        cy.get('#email').clear().type('newuser1@gmail.com')
        cy.get('#password').clear().type('password')
        cy.get('#passwordConfirmation').clear().type('password')
        cy.get('.MuiButtonBase-root').click()
        cy.get('.MuiTypography-h4').contains('Welcome to your Dashboard')
    });

   
 
});