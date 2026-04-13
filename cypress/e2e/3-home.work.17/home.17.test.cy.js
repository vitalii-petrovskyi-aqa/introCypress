import MainPageSteps from '../../support/steps/MainPageSteps';

describe(`HW 17.1. Cypress inquiries`, () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it(`Checking button tags in the header `, () => {
    MainPageSteps.CheckingButtonTagsInHeader();
  });

  it('Checking links in the footer', () => {
    MainPageSteps.CheckingLinksInFooter();
  });
});