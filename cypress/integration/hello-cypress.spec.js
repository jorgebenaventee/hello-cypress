describe('First test', () => {
    it('should visit the app', () => {
        cy.visit('http://localhost:3030');
    });

    it('input should have focus', () => {
        cy.focused().should('have.class', 'new-todo');
    });
});