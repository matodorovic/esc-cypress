describe('Express testing', () => {
    it('Checks on localhost:5500', () => {
      cy.visit('http://localhost:5500');
    });
  
    it('Visits github pages deployment', () => {
      cy.visit('https://solidtop.github.io/esc-hacker-escape-rooms/');
    });
  
    it('Goes to challenges by clicking on Play on-site', () => {
      cy.visit('https://solidtop.github.io/esc-hacker-escape-rooms/');
      cy.get('.main-menu:nth-child(2) a').first().click();
      cy.url().should('include', '/challenges');
    });

    it('Visits The story sites on github pages', () => {
      cy.visit('https://solidtop.github.io/esc-hacker-escape-rooms/about.html');
    });

    it ('Goes to contact page', () => {
      cy.visit('https://solidtop.github.io/esc-hacker-escape-rooms/contact.html');
      cy.contains('type').click();
      cy.url().should('include', '/contact.html');
    });

  });