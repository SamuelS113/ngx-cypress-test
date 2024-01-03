describe('Register', () => {
    
    it.only ('Trying to register with more characters   ', () => {
    
            cy.visit('https://www.czc.cz/registrace/nova', {
                headers: {
                    'accept': 'application/json, text/plain, */*',
                    'user-agent': 'axios/0.27.2'
                }
            });
            cy.get('.ccp-controls > .btn-outline').click({force: true}) //Cookies accept
            
            const longChaining = 'a'.repeat(100);//type char 'a' 100 times

            cy.get('#frm-surname').click()
            .type(longChaining)
            .invoke('val')
            .should('have.length', 100)
        
            cy.contains('maximální povolená délka je 25 znaků').should('exist') //Control of user text
        
        
        
        
        
        })
        
        
        
    })