describe('Login Tests', () => {

  it('Valid Login', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('standard_user')

    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    cy.url().should('include', '/inventory.html')

  })

})


it('Invalid Password Login', () => {

  cy.visit('https://www.saucedemo.com')

  cy.get('#user-name').type('standard_user')

  cy.get('#password').type('wrongpassword')

  cy.get('#login-button').click()

  cy.get('[data-test="error"]')
    .should('be.visible')

})

it('Empty Fields Login', () => {

  cy.visit('https://www.saucedemo.com')

  cy.get('#login-button').click()

  cy.get('[data-test="error"]')
    .should('be.visible')

})