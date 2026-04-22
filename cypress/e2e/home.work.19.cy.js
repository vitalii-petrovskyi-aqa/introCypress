import GarageSteps from '../support/steps/GarageSteps'; 
import ExpensesSteps from '../support/steps/ExpensesSteps'; 
import { beforeEach } from 'mocha';
import { afterEach } from 'mocha';

describe('Add a new car - Positive', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.header_right > .btn').click()
    cy.get('input[name="email"]').type(Cypress.env('USERNAME'));
    cy.get('input[name="password"]').type(Cypress.env('PASSWORD'));
    cy.get('.modal-footer > .btn-primary').click();
  });

  it('Add a new car - Audi', () => {
    GarageSteps.addCar('Audi', 'R8', 0)
  });

  it('Add a new car - BMW', () => {
    GarageSteps.addCar('BMW', '3', 1)
  });
  it('Add a new car - Ford', () => {
    GarageSteps.addCar('Ford', 'Focus', 999999)
  });

  it('Add a new car - Porsche', () => {
    GarageSteps.addCar('Porsche', 'Cayenne', 100)
  });

  it('Add a new car - Fiat', () => {
    GarageSteps.addCar('Fiat', 'Scudo', 100)
  });

  afterEach(() => {
    GarageSteps.deleteCar()
  })
});

describe('Add a new car - Mileage. Negative', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.header_right > .btn').click()
    cy.get('input[name="email"]').type(Cypress.env('USERNAME'));
    cy.get('input[name="password"]').type(Cypress.env('PASSWORD'));
    cy.get('.modal-footer > .btn-primary').click(); 
    cy.get('.panel-page_heading > .btn').click(); 
  });


  it('Empty field', () => {
    GarageSteps.enterMileageField()
    GarageSteps.errorMileageFieldisVisible('Mileage cost required')
  })

  it('The value is greater than the permissible value', () => {
    GarageSteps.enterMileageField(9999999)
    GarageSteps.errorMileageFieldisVisible('Mileage has to be from 0 to 999999')
  })

});

describe('Fuel expenses - Positive', () => {
  before(() => {
    cy.visit('/');
    cy.get('.header_right > .btn').click()
    cy.get('input[name="email"]').type(Cypress.env('USERNAME'));
    cy.get('input[name="password"]').type(Cypress.env('PASSWORD'));
    cy.get('.modal-footer > .btn-primary').click();
    GarageSteps.addCar('Audi', 'TT', 100)
  });

  it('Add fuel expensesi', () => {
    ExpensesSteps.addFuelExpense('50050', '50', '100')
  });

  afterEach(() => {
    ExpensesSteps.deleteCostingResult()
    cy.visit('/panel/garage')
    GarageSteps.deleteCar()
  })
});

describe('Fuel expenses - Negative', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('.header_right > .btn').click()
      cy.get('input[name="email"]').type(Cypress.env('USERNAME'));
      cy.get('input[name="password"]').type(Cypress.env('PASSWORD'));
      cy.get('.modal-footer > .btn-primary').click();
      GarageSteps.addCar('Audi', 'TT', '100')
    });
  
    it('Mileage. Empty field', () => {
      ExpensesSteps.enterMileageField()
      ExpensesSteps.errorFieldisVisible('Mileage required')
    });

    it('Number of liters. Empty field', () => {
      ExpensesSteps.enterNumberOfLiters()
      ExpensesSteps.errorFieldisVisible('Liters required')
    });

    it('Number of liters. Empty field', () => {
      ExpensesSteps.enterTotalCost()
      ExpensesSteps.errorFieldisVisible('Total cost required')
    });

    afterEach(() => {
      ExpensesSteps.closeMenu()
      cy.visit('/panel/garage')
      GarageSteps.deleteCar()
    })

  });