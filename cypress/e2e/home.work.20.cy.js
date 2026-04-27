import GarageSteps from "../support/steps/GarageSteps";

describe('Add a new car', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.header_right > .btn').click()
    cy.get('input[name="email"]').type(Cypress.env('USERNAME'));
    cy.get('input[name="password"]').type(Cypress.env('PASSWORD'));
    cy.get('.modal-footer > .btn-primary').click();
  });

  it('Add a new car - Audi', () => {
    // carBrandId = {"1": "Audi", "2": "BMW", "3": "Ford", "4": "Porsche", "5": "Fiat"}
    // carModelId = {"6": "3", "7": "5", "8": "X5", "9": "X6", "10": "Z3"}
    const carToAdd = {
      brand: 'BMW',
      model: 'Z3',
      brandId: 2,
      modelId: 10,
      mileage: 0
    };

    GarageSteps.checkAddCarReq(carToAdd.brandId, carToAdd.modelId, carToAdd.mileage)
    GarageSteps.addCar(carToAdd.brand, carToAdd.model, carToAdd.mileage)
  });

});