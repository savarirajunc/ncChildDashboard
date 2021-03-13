import { browser, by, element, ElementFinder } from 'protractor';


export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-main-header h4')).getText();
  }

}
