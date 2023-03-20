describe('Express testing', () => {
    it('Checks on localhost:5500', () => {
      cy.visit('http://localhost:5500');
    });
  
    it('Visits github pages deployment', () => {
      cy.visit('https://matodorovic.github.io/esc-cypress/');
    });
  
    it('Goes to challenges by clicking on Play on-site', () => {
      cy.visit('https://matodorovic.github.io/esc-cypress/');
      cy.get('.main-menu:nth-child(2) a').first().click();
      cy.url().should('include', '/challenges');
    });

    it('Visits The story sites on github pages', () => {
      cy.visit('https://matodorovic.github.io/esc-cypress/about.html');
    });

    it ('Goes to contact page', () => {
      cy.visit('https://matodorovic.github.io/esc-cypress/contact.html');
      cy.contains('type').click();
      cy.url().should('include', '/contact.html');
    });

  });