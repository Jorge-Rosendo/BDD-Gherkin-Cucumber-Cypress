import { Given, When, Then } from 'cypress cucumber preprocessor/steps'

Given ("I'm on the login page", () => {
    cy.visit("https://front.serverest.dev/")
})

When ("I type my {string}, {string} and click on login button", (email, password) => {
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(password)
    cy.get('[data-testid="entrar"]').click()
})

Then ("I have a successful Login", () => {
    cy.get('h1').contains('Serverest Store')
})

Then ("I receive an error message for my login", () => {
    cy.get('.alert').contains('Email e/ou senha inválidos')
})