describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://sacdemostorage.z6.web.core.windows.net/index.html')
    })

    it('login', () => {
        cy.get('#logout').click()
        cy.get('#username').type('admin')
        cy.get('#password').type('superduper')
        cy.get('label').contains('log in').click()
    })

    it('ShowBear', () => {
        cy.get('#logout').click()
        cy.get('#username').type('admin')
        cy.get('#password').type('superduper')
        cy.get('label').contains('log in').click()

        
        cy.get('#welcome input').should('have.value', 'Show me').click()
    })

    it('IsBearVisible', () => {
        cy.get('#logout').click()
        cy.get('#username').type('admin')
        cy.get('#password').type('superduper')
        cy.get('label').contains('log in').click()

        cy.get('#bear').should('not.be.visible')
        cy.get('#bear').should(($el) => {
            expect($el).not.to.be.visible
          })
        cy.get('#welcome input').should('have.value', 'Show me').click()
        
        cy.get('#bear').should('be.visible')
        cy.get('#bear').should(($el) => {
            expect($el).to.be.visible
          })
    })
})