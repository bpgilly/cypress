describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://www.mobilevikings.be/')
    })

    it('login', () => {
        cy.intercept('b2c', {
            body: [ {"name": "chat", "sla_duration": 2, "is_open": true, "opening_hours": [{"days": "week", "opening_at": "08:30:00", "closing_at": "16:30:00"}]},
                    {"name": "whatsapp", "uri": "https://wa.me/32456130693", "sla_duration": 20, "is_open": true, "opening_hours": [{"days": "week", "opening_at": "08:30:00", "closing_at": "22:00:00"},{"days": "weekend", "opening_at": "08:30:00", "closing_at": "22:00:00"}]}, 
                    {"name": "call", "uri": "tel:+32456191976", "is_open": true, "opening_hours": [{"days": "week", "opening_at": "08:30:00", "closing_at": "17:00:00"}]}, 
                    {"name": "messenger", "uri": "https://m.me/mobilevikings", "sla_duration": 20, "is_open": true, "opening_hours": [{"days": "week", "opening_at": "08:30:00", "closing_at": "22:00:00"}, {"days": "weekend", "opening_at": "08:30:00", "closing_at": "22:00:00"}]}, 
                    {"name": "mail", "uri": "mailto:info@mobilevikings.be", "sla_duration": 1440, "is_open": true, "opening_hours": [{"days": "all", "opening_at": "00:00:00", "closing_at": "23:59:00"}]}]
        }).as('klantendienst')

        cy.get('#btn-accept-cookies').click()
        cy.get('a').contains('ABONNEMENTEN').click()
      
        //intercept 'https://fakta.mobilevikings.be/support-channels/b2c'
    })

    it('login', () => {
        cy.intercept('reviews?limit=50', {
            body:  {"number_of_reviews": 2, "average_score": 8.38, "buckets": {"0": 445, "1": 449, "2": 533, "3": 854, "4": 4172, "5": 11521},
                    "reviews": [
                    {"name": "G.", "score": 10, "text": "super duper cooper", "date": "2021-12-27T00:00:00Z"},
                    {"name": "M.", "score": 3, "text": "Slecht bereik", "date": "2021-11-21T00:00:00Z"}]}
        }).as('reviews')

        cy.get('#btn-accept-cookies').click()
        cy.get('a').contains('ABONNEMENTEN').click()
      
        cy.wait('@reviews')
        //intercept 'https://fakta.mobilevikings.be/support-channels/b2c'
    })
})