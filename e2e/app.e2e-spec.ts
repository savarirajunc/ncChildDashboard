import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('nidara-admin App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('HELLO & WELCOME !');
  });
});
