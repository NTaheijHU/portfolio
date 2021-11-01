describe('Start Up', () => {
  it('should navigate to home page', () => {
    cy.visit('/');
  })
})

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    cy.get('a[href*="over-mij"]').first().click();

    cy.url().should('include', '/over-mij');

    cy.get('h1').contains('Over Mij');
  });

  it('should navigate to the reviews page', () => {
    cy.get('a[href*="reviews"]').first().click();

    cy.url().should('include', '/reviews');

    cy.get('h1').contains('Reviews');
  });
});

describe('Dark Mode', () => {
  it('should toggle dark mode', () => {
    cy.get('button[id*="toggle-dark"]').first().click();
    cy.get('button[id*="toggle-dark"]').first().click();

    cy.get('html').should('have.class', 'dark');
  });
});

describe('Portfolio', () => {
  it('should navigate to the portfolio page', () => {
    cy.get('a[href*="portfolio"]').first().click();

    cy.url().should('include', '/portfolio');

    cy.get('h1').contains('Portfolio');
  });

  it('should scroll to projects', () => {
    cy.scrollTo(0, 800);
  });
  
  it('should click javascript', () => {
    cy.findByText("JavaScript").first().click({force: true});

    cy.get('h3').first().contains('Codebin');
  });

  it('should click python', () => {
    cy.findByText("Python").first().click({force: true});

    cy.get('h3').first().contains('Geen projecten gevonden.');
  });
});

describe('Project', () => {
  it('should navigate to the project page', () => {
    cy.visit('/projects/codebin');

    cy.get('h1').contains('codebin');
  });

  it('should scroll to carousel', () => {
    cy.scrollTo(0, 1200);
  });

  it('should click next on carousel', () => {
    cy.get(`[aria-label="next slide / item"]`).first().click({force: true});
  });

  it('should click back on carousel', () => {
    cy.get(`[aria-label="previous slide / item"]`).first().click({force: true});
  });
});

describe('Mobile', () => {
  it('should check if the navigation is corrected', () => {
    cy.viewport('iphone-x');
    cy.get('i').first().should('have.class', 'fa-bars');
  });

  it('should open and close the navigation', () => {
    cy.viewport('iphone-x');
    cy.get('i').first().click({force: true});
    cy.get('i').first().click({force: true});
  });
});

describe('Wrap Up', () => {
  it('should navigate to home page', () => {
    cy.visit('/');
  });
})