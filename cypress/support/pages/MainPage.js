class MainPage {
  aboutHeaderBtn = '[appscrollto="aboutSection"]';
  contactsHeaderBtn = '[appscrollto="contactsSection"]';
  guestLogInHeaderBtn = '.header_right > .header-link';
  signInHeaderBtn = '.header_right > .btn';
  facebookSelector = '[href="https://www.facebook.com/Hillel.IT.School"]';
  facebookLink = 'https://www.facebook.com/Hillel.IT.School';
  telegramSelector = '[href="https://t.me/ithillel_kyiv"]';
  telegramLink = 'https://t.me/ithillel_kyiv';
  youtubeSelector =
    '[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]';
  youtubeLink =
    'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1';
  instagramSelector = '[href="https://www.instagram.com/hillel_itschool/"]';
  instagramLink = 'https://www.instagram.com/hillel_itschool/';
  linkedinSelector = '[href="https://www.linkedin.com/school/ithillel/"]';
  linkedinLink = 'https://www.linkedin.com/school/ithillel/';
  ithillelLogoSelector = '.display-4';
  ithillelLogoLink = 'https://ithillel.ua';
  mailtoSelector = '.h4';
  mailtoMail = 'mailto:developer@ithillel.ua';

  getAboutHeaderBtn() {
    return cy.get(this.aboutHeaderBtn);
  }
  getContactsHeaderBtn() {
    return cy.get(this.contactsHeaderBtn);
  }
  getGuestLogInHeaderBtn() {
    return cy.get(this.guestLogInHeaderBtn);
  }
  getSignInHeaderBtnn() {
    return cy.get(this.signInHeaderBtn);
  }
  getFacebookSelector() {
    return cy.get(this.facebookSelector);
  }
  getFacebookLink() {
    return cy.get(this.facebookLink);
  }
  getTelegramSelector() {
    return cy.get(this.telegramSelector);
  }
  getTelegramLink() {
    return cy.get(this.telegramLink);
  }
  getYoutubeSelector() {
    return this.youtubeSelector;
  }
  getYoutubeLink() {
    return cy.get(this.youtubeLink);
  }
  getInstagramSelector() {
    return cy.get(this.instagramSelector);
  }
  getInstagramLink() {
    return cy.get(this.instagramLink);
  }
  getLinkedinSelector() {
    return cy.get(this.linkedinSelector);
  }
  getLinkedinLink() {
    return cy.get(this.linkedinLink);
  }
  getIthillelLogoSelector() {
    return cy.get(this.ithillelLogoSelector);
  }
  getIthillelLogoLink() {
    return cy.get(this.ithillelLogoLink);
  }
  getMailtoMailSelector() {
    return cy.get(this.mailtoSelector);
  }
  getMailtoMail() {
    return cy.get(this.mailtoMail);
  }
}

const mainePage = new MainPage();
export default mainePage;