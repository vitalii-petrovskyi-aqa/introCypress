import mainePage from '../pages/MainPage';

const MainPageSteps = {
  CheckingButtonTagsInHeader() {
    mainePage.getAboutHeaderBtn();
    mainePage.getContactsHeaderBtn();
    mainePage.getGuestLogInHeaderBtn();
    mainePage.getSignInHeaderBtnn;
  },
  CheckingLinksInFooter() {
    mainePage.getFacebookSelector(); //.should('have.attr', 'href', mainePage.getFacebookLink())
    mainePage.getTelegramSelector(); //.should('have.attr', 'href', mainePage.getTelegramLink())
    mainePage.getYoutubeSelector(); //.should('have.attr', 'href', mainePage.getYoutubeLink())
    mainePage.getInstagramSelector(); //.should('have.attr', 'href', mainePage.getInstagramLink())
    mainePage.getLinkedinSelector(); //.should('have.attr', 'href', mainePage.getLinkedinLink())
    mainePage.getIthillelLogoSelector(); //.should('have.attr', 'href', mainePage.getIthillelLogoLink())
    mainePage.getMailtoMailSelector(); //.should('have.attr', 'href', mainePage.getMailtoMail())
  },

  // Registrierungsformular - Name
  RegistrationFormNameImputEmpty() {
    mainePage.getRegistrationFormName().clickElement().borderColor()
    mainePage.getRegistrationFormName().removeFocus()
  },
  RegistrationFormNameImput(value) {
    mainePage.getRegistrationFormName().enterValue(value).borderColor()
    mainePage.getRegistrationFormName().removeFocus()
  },
  RegistrationFormNameCheckValidationPositive() {
    mainePage.getRegistrationFormValidationError().checkElementAbsence()
  },
  RegistrationFormNameCheckValidationNegative(value) {
    mainePage.getRegistrationFormName().borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText(value)
  },

  // Registrierungsformular - Last name
  RegistrationFormLastNameImputEmpty() {
    mainePage.getRegistrationFormLastName().clickElement().borderColor()
    mainePage.getRegistrationFormLastName().removeFocus()
  },
  RegistrationFormLastNameImput(value) {
    mainePage.getRegistrationFormLastName().enterValue(value).borderColor()
    mainePage.getRegistrationFormLastName().removeFocus()
  },
  RegistrationFormLastNameCheckValidationPositive() {
    mainePage.getRegistrationFormValidationError().checkElementAbsence()
  },
  RegistrationFormLastNameCheckValidationNegative(value) {
    mainePage.getRegistrationFormLastName().borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText(value)
  },

  // Registrierungsformular - Email
  RegistrationFormLastEmailImputEmpty() {
    mainePage.getRegistrationFormEmail().firstFocus().borderColor()
    mainePage.getRegistrationFormEmail().removeFocus()
  },
  RegistrationFormEmailImput(value) {
    mainePage.getRegistrationFormEmail().enterValue(value).borderColor()
    mainePage.getRegistrationFormEmail().removeFocus()
  },
  RegistrationFormEmailCheckValidationPositive() {
    mainePage.getRegistrationFormValidationError().checkElementAbsence()
  },
  RegistrationFormEmailCheckValidationNegative(value) {
    mainePage.getRegistrationFormEmail().borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText(value)
  },

  // Registrierungsformular - Password 
  RegistrationFormPasswordImputEmpty() {
    mainePage.getRegistrationFormPassword().firstFocus().borderColor()
    mainePage.getRegistrationFormPassword().removeFocus()
  },
  RegistrationFormPasswordImput(value) {
    mainePage.getRegistrationFormPassword().enterValue(value).borderColor()
    mainePage.getRegistrationFormPassword().removeFocus()
  },
  RegistrationFormPasswordCheckValidationPositive() {
    mainePage.getRegistrationFormValidationError().checkElementAbsence()
  },
  RegistrationFormPasswordCheckValidationNegative(value) {
    mainePage.getRegistrationFormPassword().borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText(value)
  },
  
  // Registrierungsformular - Re Password 
  RegistrationFormRePasswordImputEmpty() {
    mainePage.getRegistrationFormRePassword().firstFocus().borderColor()
    mainePage.getRegistrationFormRePassword().removeFocus()
  },
  RegistrationFormRePasswordImput(value) {
    mainePage.getRegistrationFormRePassword().enterValue(value).borderColor()
    mainePage.getRegistrationFormRePassword().removeFocus()
  },
  RegistrationFormRePasswordCheckValidationPositive() {
    mainePage.getRegistrationFormValidationError().checkElementAbsence()
  },
  RegistrationFormRePasswordCheckValidationNegative(value) {
    mainePage.getRegistrationFormRePassword().borderColorErrore()
    mainePage.getRegistrationFormValidationError().chekingText(value)
  },



  // Registrierungsformular  
  RegistrationFormRegisterBtn() {
    mainePage.getRegistrationFormRegisterBtn().isVisible()
    mainePage.getRegistrationFormRegisterBtn().verifyIsDisabled()
    mainePage.getRegistrationFormName().enterValue('Test')
    mainePage.getRegistrationFormRegisterBtn().verifyIsDisabled()
    mainePage.getRegistrationFormLastName().enterValue('Test')
    mainePage.getRegistrationFormRegisterBtn().verifyIsDisabled()
    mainePage.getRegistrationFormEmail().enterValue('Test@gmail.com')
    mainePage.getRegistrationFormRegisterBtn().verifyIsDisabled()
    mainePage.getRegistrationFormPassword().enterValue('Test@De1j3b')
    mainePage.getRegistrationFormRegisterBtn().verifyIsDisabled()
    mainePage.getRegistrationFormRePassword().enterValue('Test@De1j3b')
    mainePage.getRegistrationFormRegisterBtn().verifyIsNotDisabled()
    mainePage.getRegistrationFormRegisterBtn().clickElement()
    mainePage.getRegistrationFormValidationErrorAfterClickingOnfRegister().chekingText('User already exists')
  },

  
  CreateNewAccount(name, lastName, mail, password) {
    mainePage.getRegistrationFormName().enterValue(name)
    mainePage.getRegistrationFormLastName().enterValue(lastName)
    mainePage.getRegistrationFormEmail().enterValue(mail)
    mainePage.getRegistrationFormPassword().enterValue(password)
    mainePage.getRegistrationFormRePassword().enterValue(password)
    mainePage.getRegistrationFormRegisterBtn().clickElement()
  }
};

export default MainPageSteps;