describe('Task 2 - Assertions, Aliases & Commands', () => {

  beforeEach(() => {
    cy.login()
  })


  it('Assertion - visible element', () => {
    cy.get('.inventory_list').should('be.visible')
  })

  it('Assertion - text check', () => {
    cy.get('.title').should('have.text', 'Products')
  })

  it('Assertion - attribute check', () => {
    cy.get('.shopping_cart_link')
      .should('have.attr', 'id')
  })



  it('Negative Assertion', () => {
    cy.get('.login-button').should('not.exist') 
    
  })


  it('Alias Example', () => {
    cy.get('.shopping_cart_link').as('cart')

    cy.get('@cart').click()

    cy.url().should('include', 'cart')
  })

})