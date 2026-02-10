describe('Angular App Loads', () => {
  it('should load the homepage', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Hello');
  });
});
