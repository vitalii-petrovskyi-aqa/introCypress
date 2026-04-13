describe('sing up into hillel', ()=>{
    it('verify user can sing up to the system', ()=>{
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/')
        cy.get('.hero-descriptor_btn').click()
        cy.get('#signupName').type('Name')
        cy.get('#signupLastName').type('LastName')
        cy.get('#signupEmail').type('test@gmail.com')
        cy.get('#signupPassword').type('12345678@Te')
        cy.get('#signupRepeatPassword').type('12345678@Te')
        cy.get('button').contains('Register').click()
    })
})