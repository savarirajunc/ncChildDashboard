// e2e/pages/home-page/home-page.po.ts

import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class HomePage {

    navigateToHome(): promise.Promise<any> {
        return browser.get('/Home');
    }
    getPageTitle() {
      return browser.getTitle();
    }

    getPageBrandName(): promise.Promise<string> {
        return element(by.css('app-main-website #layout-container .banner-content h4')).getText();
    }

    getNavBar(): ElementFinder {
        return element(by.tagName('app-main-menu #web nav'));
    }

    getNCAngelwings(): ElementFinder {
        return this.getNavBar().all(by.css('a')).get(0);
    }

    getGirlPage(): ElementFinder {
      return this.getNavBar().element(by.css('[href="/girl"]'));
    }

    getBoyPage(): ElementFinder {
      return this.getNavBar().element(by.css('[href="/boy"]'));
    }

    getStoriesPage(): ElementFinder {
      return this.getNavBar().element(by.css('[href="/stories"]'));
    }

    // getDropdownMenuTwo(): ElementFinder {
    //   return element(by.tagName('app-main-menu #first-dropdown .two li'));
    // }

    // getPersonalizedPage(): ElementFinder {
    //   return this.getDropdownMenuTwo().element(by.css('[href="/personalized-learning"]'));
    // }

   /*  SiginIn - component unit test cases
  ----------------------------------------------------- */

  getSigninPage(): ElementFinder {
    return element(by.css('[href="/signin"]'));
  }

  getSigninPageText(): promise.Promise<string> {
    return element(by.css('app-sign-in h3')).getText();
  }

}
