import { CommonElement } from '../utils/elements';

class MainPage {
  // HeaderBtn
  aboutHeaderBtn = '[appscrollto="aboutSection"]';
  contactsHeaderBtn = '[appscrollto="contactsSection"]';
  guestLogInHeaderBtn = '.header_right > .header-link';
  signInHeaderBtn = '.header_right > .btn';
  signInBtn = ".hero-descriptor_btn"
  registrationBtn = "div[class='modal-footer d-flex justify-content-between'] button:nth-child(1)";
  // Links
  facebookSelector = '.socials_icon.icon.icon-facebook';
  facebookLink = 'https://www.facebook.com/Hillel.IT.School';
  telegramSelector = '.socials_icon.icon.icon-telegram';
  telegramLink = 'https://t.me/ithillel_kyiv';
  youtubeSelector = '.socials_icon.icon.icon-youtube';
  youtubeLink = 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1';
  instagramSelector = '.socials_icon.icon.icon-instagram';
  instagramLink = 'https://www.instagram.com/hillel_itschool/';
  linkedinSelector = '.socials_icon.icon.icon-linkedin';
  linkedinLink = 'https://www.linkedin.com/school/ithillel/';
  ithillelLogoSelector = '.contacts_link.display-4';
  ithillelLogoLink = 'https://ithillel.ua';
  mailtoSelector = '.contacts_link.h4';
  mailtoMail = 'mailto:developer@ithillel.ua';
  //Elements registration form
  name = "#signupName"
  lastName = "#signupLastName"
  email = "#signupEmail"
  password = "#signupPassword"
  rePassword = "#signupRepeatPassword"
  registerBtn = ".modal-footer > .btn"
  errorNameCharacterLength  = "div[class='invalid-feedback'] p"
  ValidationErrorAfterClickingOnfRegister  = '.alert.alert-danger'


  getAboutHeaderBtn() {
    return new CommonElement(this.aboutHeaderBtn);
  }
  getContactsHeaderBtn() {
    return new CommonElement(this.contactsHeaderBtn);
  }
  getGuestLogInHeaderBtn() {
    return new CommonElement(this.guestLogInHeaderBtn);
  }
  getSignInHeaderBtn() {
    return new CommonElement(this.signInHeaderBtn);
  }
  getSignInBtn() {
    return new CommonElement(this.signInBtn);
  }
  getRegistrationBtn() {
    return new CommonElement(this.registrationBtn);
  }
  getFacebookSelector() {
    return new CommonElement(this.facebookSelector);
  }
  getFacebookLink() {
    return new CommonElement(this.facebookLink);
  }
  getTelegramSelector() {
    return new CommonElement(this.telegramSelector);
  }
  getTelegramLink() {
    return new CommonElement(this.telegramLink);
  }
  getYoutubeSelector() {
    return this.youtubeSelector;
  }
  getYoutubeLink() {
    return new CommonElement(this.youtubeLink);
  }
  getInstagramSelector() {
    return new CommonElement(this.instagramSelector);
  }
  getInstagramLink() {
    return new CommonElement(this.instagramLink);
  }
  getLinkedinSelector() {
    return new CommonElement(this.linkedinSelector);
  }
  getLinkedinLink() {
    return new CommonElement(this.linkedinLink);
  }
  getIthillelLogoSelector() {
    return new CommonElement(this.ithillelLogoSelector);
  }
  getIthillelLogoLink() {
    return new CommonElement(this.ithillelLogoLink);
  }
  getMailtoMailSelector() {
    return new CommonElement(this.mailtoSelector);yfgsc
  }
  getMailtoMail() {
    return new CommonElement(this.mailtoMail);
  }
  // Elements registration form
  getRegistrationFormName() {
    return new CommonElement(this.name)
  }
  getRegistrationFormLastName() {
    return new CommonElement(this.lastName)
  }
  getRegistrationFormEmail() {
    return new CommonElement(this.email)
  }
  getRegistrationFormPassword() {
    return new CommonElement(this.password)
  }
  getRegistrationFormRePassword() {
    return new CommonElement(this.rePassword)
  }
  getRegistrationFormRegisterBtn() {
    return new CommonElement(this.registerBtn)
  }
  getRegistrationFormValidationError(){
    return new CommonElement(this.errorNameCharacterLength) // ValidationErrorAfterClickingOnfRegister
  }
  getRegistrationFormValidationErrorAfterClickingOnfRegister(){
    return new CommonElement(this.ValidationErrorAfterClickingOnfRegister)
  }
  validatePasswordInput(password) {
    const message = 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
    password.borderColorErrore();
    this.getRegistrationFormValidationError().chekingText(message);
  }
  // validatePasswordInputAll(element) {
  //   this.validatePasswordInput(element.enterValue('test@de1'), message)
  //   this.validatePasswordInput(element.enterValue('Test@Denghndbsvgldy'), message)
  //   this.validatePasswordInput(element.enterValue('TEST@DE1GHJHKJLKKBHV'), message)
  //   this.validatePasswordInput(element.enterValue('Tet@De1'), message)
  //   this.validatePasswordInput(element.enterValue('Test@De1vHc3vB4h'), message)
  // }

}

const mainePage = new MainPage();
export default mainePage;