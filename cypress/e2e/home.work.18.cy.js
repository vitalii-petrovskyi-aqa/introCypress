import MainPageSteps from '../support/steps/MainPageSteps';

describe(`Registration form. Name`, () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".hero-descriptor_btn").click();
  });
  
  it('The value is valid ', () => {
    MainPageSteps.RegistrationFormNameImput('Denys')
    MainPageSteps.RegistrationFormNameCheckValidationPositive()
  })
  it('2 letters in the input field', () => {
    MainPageSteps.RegistrationFormNameImput('Tdlrfgcagwbkfmchscdp')
    MainPageSteps.RegistrationFormNameCheckValidationPositive()
  })
  it('20 letters in the input field', () => {
    MainPageSteps.RegistrationFormNameImput('dE')
    MainPageSteps.RegistrationFormNameCheckValidationPositive()
  })
  it('One letter in the input field', () => {
    MainPageSteps.RegistrationFormNameImput('E')
    MainPageSteps.RegistrationFormNameCheckValidationNegative('Name has to be from 2 to 20 characters long')
  })
  it('21 letters in the input field', () => {
    MainPageSteps.RegistrationFormNameImput('Tdlrfgcagwbkfmchscdpr')
    MainPageSteps.RegistrationFormNameCheckValidationNegative('Name has to be from 2 to 20 characters long')
  })
  it('Empty input field', () => {
    MainPageSteps.RegistrationFormNameImputEmpty()
    MainPageSteps.RegistrationFormNameCheckValidationNegative('Name required')
  })
  it('Values with a space', () => {
    MainPageSteps.RegistrationFormNameImput('De ')
    MainPageSteps.RegistrationFormNameCheckValidationNegative('Name is invalid')
  })
  it('Values with a number', () => {
    MainPageSteps.RegistrationFormNameImput('D1e')
    MainPageSteps.RegistrationFormNameCheckValidationNegative('Name is invalid')
  })
  it('Values with special character', () => {
    MainPageSteps.RegistrationFormNameImput('Lukk@')
    MainPageSteps.RegistrationFormNameCheckValidationNegative('Name is invalid')
  })
});

describe(`Registration form. Last Name`, () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".hero-descriptor_btn").click();
  });
  
  it('The value is valid', () => {
    MainPageSteps.RegistrationFormLastNameImput('Zagrebelnyi')
    MainPageSteps.RegistrationFormLastNameCheckValidationPositive()
  })
  it('2 letters in the input field', () => {
    MainPageSteps.RegistrationFormLastNameImput('Tdlrfgcagwbkfmchscdp')
    MainPageSteps.RegistrationFormLastNameCheckValidationPositive()
  })
  it('20 letters in the input field', () => {
    MainPageSteps.RegistrationFormLastNameImput('dE')
    MainPageSteps.RegistrationFormLastNameCheckValidationPositive()
  })
  it('One letter in the input field', () => {
    MainPageSteps.RegistrationFormLastNameImput('E')
    MainPageSteps.RegistrationFormLastNameCheckValidationNegative('Last name has to be from 2 to 20 characters long')
  })
  it('21 letters in the input field', () => {
    MainPageSteps.RegistrationFormLastNameImput('Tdlrfgcagwbkfmchscdpr')
    MainPageSteps.RegistrationFormLastNameCheckValidationNegative('Last name has to be from 2 to 20 characters long')
  })
  it('Empty input field', () => {
    MainPageSteps.RegistrationFormLastNameImputEmpty()
    MainPageSteps.RegistrationFormLastNameCheckValidationNegative('Last name required')
  })
  it('Values with a space', () => {
    MainPageSteps.RegistrationFormLastNameImput('De ')
    MainPageSteps.RegistrationFormLastNameCheckValidationNegative('Last name is invalid')
  })
  it('Values with a number', () => {
    MainPageSteps.RegistrationFormLastNameImput('D1e')
    MainPageSteps.RegistrationFormLastNameCheckValidationNegative('Last name is invalid')
  })
  it('Values with special character', () => {
    MainPageSteps.RegistrationFormLastNameImput('Lukk@')
    MainPageSteps.RegistrationFormLastNameCheckValidationNegative('Last name is invalid')
  })
});

describe(`Registration form. Email`, () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".hero-descriptor_btn").click();
  });

  it('The value is valid', () => {
    MainPageSteps.RegistrationFormEmailImput('denzag.user1.v3@gmail.com')
    MainPageSteps.RegistrationFormEmailCheckValidationPositive()
  })
  it('Empty input field', () => {
    MainPageSteps.RegistrationFormLastEmailImputEmpty()
    MainPageSteps.RegistrationFormEmailCheckValidationNegative('Email required')
  })
  it('Values without "at" (@)', () => {
    MainPageSteps.RegistrationFormEmailImput('denzagrebelnyigmail.com')
    MainPageSteps.RegistrationFormEmailCheckValidationNegative('Email is incorrect')
  })
  it('Values without a dot after the domain', () => {
    MainPageSteps.RegistrationFormEmailImput('denzagrebelnyi@gmailcom')
    MainPageSteps.RegistrationFormEmailCheckValidationNegative('Email is incorrect')
  })
  it('Values without a domain', () => {
    MainPageSteps.RegistrationFormEmailImput('denzagrebelnyi@.com')
    MainPageSteps.RegistrationFormEmailCheckValidationNegative('Email is incorrect')
  })
  it('Value without local part', () => {
    MainPageSteps.RegistrationFormEmailImput('@gmail.com')
    MainPageSteps.RegistrationFormEmailCheckValidationNegative('Email is incorrect')
  })
  it('Values without a top-level domain', () => {
    MainPageSteps.RegistrationFormEmailImput('denzagrebelnyi@gmail.')
    MainPageSteps.RegistrationFormEmailCheckValidationNegative('Email is incorrect')
  })
});

describe(`Registration form. Password`, () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".hero-descriptor_btn").click();
  });
  const message = 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
  it('The value is valid - 8 characters', () => {
    MainPageSteps.RegistrationFormPasswordImput('Tes@3D1d')
    MainPageSteps.RegistrationFormPasswordCheckValidationPositive()
  })
  it('The value is valid - 15 characters', () => {
    MainPageSteps.RegistrationFormPasswordImput('Test3De1vHc3vB4')
    MainPageSteps.RegistrationFormPasswordCheckValidationPositive()
  })
  it('Empty input field', () => {
    MainPageSteps.RegistrationFormPasswordImputEmpty()
    MainPageSteps.RegistrationFormPasswordCheckValidationNegative('Password required')
  })
  it('7 characters', () => {
    MainPageSteps.RegistrationFormPasswordImput('Tet1De1')
    MainPageSteps.RegistrationFormPasswordCheckValidationNegative(message)
  })
  it('16 characters', () => {
    MainPageSteps.RegistrationFormPasswordImput('Test@de1nd84bciQ')
    MainPageSteps.RegistrationFormPasswordCheckValidationNegative(message)
  })
  it('Without capital letters', () => {
    MainPageSteps.RegistrationFormPasswordImput('vfkvnv7hvn2hfk')
    MainPageSteps.RegistrationFormPasswordCheckValidationNegative(message)
  })
  it('Without owercase letters', () => {
    MainPageSteps.RegistrationFormPasswordImput('E1GHJHKJLKKB')
    MainPageSteps.RegistrationFormPasswordCheckValidationNegative(message)
  })
  it('Without numbers', () => {
    MainPageSteps.RegistrationFormPasswordImput('nkJhGfBcC')
    MainPageSteps.RegistrationFormPasswordCheckValidationNegative(message)
  })
  it('Without numbers', () => {
    MainPageSteps.RegistrationFormPasswordImput('nkJhGfBcC')
    MainPageSteps.RegistrationFormPasswordCheckValidationNegative(message)
  })
});

describe(`Registration form. Re Password`, () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".hero-descriptor_btn").click();
  });
  const message = 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
  it('The value is valid - 8 characters', () => {
    MainPageSteps.RegistrationFormPasswordImput('Tes@3D1d')
    MainPageSteps.RegistrationFormRePasswordImput('Tes@3D1d')
    MainPageSteps.RegistrationFormRePasswordCheckValidationPositive()
  })
  it('The value is valid - 15 characters', () => {
    MainPageSteps.RegistrationFormPasswordImput('Test3De1vHc3vB4')
    MainPageSteps.RegistrationFormRePasswordImput('Test3De1vHc3vB4')
    MainPageSteps.RegistrationFormRePasswordCheckValidationPositive()
  })
  it('Passwords do not match', () => {
    MainPageSteps.RegistrationFormPasswordImput('Test3De1vHc3vB4')
    MainPageSteps.RegistrationFormRePasswordImput('Test3De1v4')
    MainPageSteps.RegistrationFormRePasswordCheckValidationNegative('Passwords do not match')
  })
  it('Empty input field', () => {
    MainPageSteps.RegistrationFormRePasswordImputEmpty()
    MainPageSteps.RegistrationFormRePasswordCheckValidationNegative('Re-enter password required')
  })
  it('7 characters', () => {
    MainPageSteps.RegistrationFormRePasswordImput('Tet1De1')
    MainPageSteps.RegistrationFormRePasswordCheckValidationNegative(message)
  })
  it('16 characters', () => {
    MainPageSteps.RegistrationFormRePasswordImput('Test@de1nd84bciQ')
    MainPageSteps.RegistrationFormRePasswordCheckValidationNegative(message)
  })
  it('Without capital letters', () => {
    MainPageSteps.RegistrationFormRePasswordImput('vfkvnv7hvn2hfk')
    MainPageSteps.RegistrationFormRePasswordCheckValidationNegative(message)
  })
  it('Without owercase letters', () => {
    MainPageSteps.RegistrationFormRePasswordImput('E1GHJHKJLKKB')
    MainPageSteps.RegistrationFormRePasswordCheckValidationNegative(message)
  })
  it('Without numbers', () => {
    MainPageSteps.RegistrationFormRePasswordImput('nkJhGfBcC')
    MainPageSteps.RegistrationFormRePasswordCheckValidationNegative(message)
  })
});

describe(`Create a New Account`, () => {
  beforeEach(() => {
    cy.fixture('user').as('userData');
    cy.visit("/");
    cy.get(".hero-descriptor_btn").click();
  });

  it('Create a new account', function() {
    const user = this.userData.user1
    MainPageSteps.CreateNewAccount(user.firstName, user.lastName, user.email, user.password)
    cy.url().should("include", "/panel/garage")
  })
});

describe(`Login`, () => {
  beforeEach(() => {
    cy.fixture('user').as('userData');
  })
  it("Login", function () {
    const user = this.userData.user1
    cy.login(user.email, user.password)
  })
})