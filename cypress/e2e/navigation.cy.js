describe('Navigation Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', '/inventory')
  })

  it('Open Cart Page', () => {
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', 'cart')
  })

  it('Visit Two Pages', () => {
    cy.get('.shopping_cart_link').click()
    cy.contains('Your Cart').should('be.visible')

    cy.get('#continue-shopping').click()
    cy.contains('Products').should('be.visible')
  })

  it('Checkout Form Test', () => {
    cy.get('.inventory_item button').first().click()

    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()

    cy.get('#first-name').type('Mateen')
    cy.get('#last-name').type('Iqbal')
    cy.get('#postal-code').type('54000')

    cy.get('#continue').click()

    cy.contains('Checkout: Overview').should('be.visible')
  })

})