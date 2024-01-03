describe('Default tests', () => {

it('Simulates buy a product from home page to pay', () => {
    
    cy.visit('/', {
        headers: {
            'accept': 'application/json, text/plain, */*',
            'user-agent': 'axios/0.27.2'
        }
    });
    cy.get('.ccp-controls > .btn-outline').click({force: true})
    cy.get(':nth-child(1) > .m-offer__carousel-content > div.m-offer__carousel-column > .btn').click({force: true})
    cy.get('.buttons > .btn-primary').click({force: true})
    cy.get('#basket-controls-container > .btn-primary').click({force: true})
    cy.get('.btn-outline').click({force: true})
    cy.get(':nth-child(3) > .frm__radio-label > .del-pay-frm__item-info > .del-pay-frm__item-title').click({force: true})
    cy.get('[data-id="7gpqpujuomg77aev95gbd2rb53"][data-delivery-code="ZASILKOVNA"] > .pup-points__buttons > .btn-primary').click({force: true})
    cy.get('#del-pay-frm__payment-items > :nth-child(1)').click({force: true})
})



})