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
};

export default MainPageSteps;