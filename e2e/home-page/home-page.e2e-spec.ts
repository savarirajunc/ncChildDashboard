// e2e/pages/home-page/home-page.e2e-spec.ts

import { browser } from 'protractor';
import { HomePage } from './home-page.po';

describe(' Home Page', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.navigateToHome();
    });

    it('should have right title', () => {
      homePage.getPageTitle().then((title: string) => {
        expect(title).toEqual('Premium Early Childhood Development | Nidara-Children');
      });
    });

    it('Should have the page brand name', () => {
        expect(homePage.getPageBrandName()).toEqual('WELCOME TO THE NIDARA-CHILDREN');
    });

    it('Should locate the nav bar', () => {
        expect(homePage.getNavBar()).toBeDefined();
    });

    it('Should get the NC Angel wings button on the nav bar', () => {
        expect(homePage.getNCAngelwings().getText()).toEqual('NC ANGEL WINGS SYSTEM');
    });

    it('Should get the girl page button on the nav bar', () => {
      expect(homePage.getGirlPage().getText()).toEqual('GIRL');
    });

    it('Should redirect to the girl page when girl is clicked', () => {
      const girlPage = homePage.getGirlPage();
      girlPage.click();
      expect(browser.driver.getCurrentUrl()).toContain('/girl');
    });

    it('Should get the boy page button on the nav bar', () => {
      expect(homePage.getBoyPage().getText()).toEqual('BOY');
    });

    it('Should redirect to the boy page when boy is clicked', () => {
      const girlPage = homePage.getBoyPage();
      girlPage.click();
      expect(browser.driver.getCurrentUrl()).toContain('/boy');
    });

    it('Should get the stories page button on the nav bar', () => {
      expect(homePage.getStoriesPage().getText()).toEqual('STORIES');
    });

    it('Should redirect to the stories page when stories is clicked', () => {
      const girlPage = homePage.getStoriesPage();
      girlPage.click();
      expect(browser.driver.getCurrentUrl()).toContain('/stories');
    });


    it('should display show signin', () => {
      expect(homePage.getSigninPage().getText()).toEqual('SIGN IN');
    });

    it('should route to sign in page', () => {
      const signin = homePage.getSigninPage();
      signin.click();
      expect(browser.driver.getCurrentUrl()).toContain('/signin');
      expect(homePage.getSigninPageText()).toEqual('SIGN IN OR GET STARTED');
    });

});
