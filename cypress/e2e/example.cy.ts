describe('template spec', () => {
  it('Contains "Why Cypress?"', () => {
    cy.visit('/')

    // verify that the h1 element contains the expected string
    const title = 'Why Cypress?'
    const titleElement = cy.get('h1').first()
    titleElement.should('include.text', title)
  })
})