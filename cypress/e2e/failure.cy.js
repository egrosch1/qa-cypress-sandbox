describe('Angular App Loads Test Failure', () => {
  it('should load the homepage', () => {
    cy.visit('http://localhost:4200');
    cy.contains('This will fail');
  });
});
