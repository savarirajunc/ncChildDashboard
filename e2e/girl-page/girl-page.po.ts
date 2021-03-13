// e2e/pages/home-page/home-page.po.ts

import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class GirlPage {

    navigateToGirlPage(): promise.Promise<any> {
        return browser.get('/girl');
    }
    getGirlPageTitle() {
      return browser.getTitle();
    }
    getPageText(): promise.Promise<string> {
      return element(by.css('app-girl h4')).getText();
    }

}
