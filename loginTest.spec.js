describe('Login', () => {
    
it.only ('login test with no real data ', () => {

        cy.visit('/', {
            headers: {
                'accept': 'application/json, text/plain, */*',
                'user-agent': 'axios/0.27.2'
            }
        });
        cy.get('.ccp-controls > .btn-outline').click({force: true})
        cy.wait(500)
        cy.get('#login').click({force: true})
        cy.get('#frm-name').type('NameExample')
        .should('have.value', 'NameExample')
        cy.get('#frm-password').type('PasswordExample')
        cy.get('.frm__row--with-buttons > .btn').click({force: true})
        
    
    
    
    
    
    
    
    
    })
    
    
    
})