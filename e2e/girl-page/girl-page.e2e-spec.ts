// e2e/pages/home-page/home-page.e2e-spec.ts

import { browser } from 'protractor';
import { GirlPage } from './girl-page.po';

describe(' Girl Page', () => {
    const girlpage = new GirlPage();

    beforeEach(() => {
      girlpage.navigateToGirlPage();
    });

    it('should have girl page title', () => {
      girlpage.getGirlPageTitle().then((title: string) => {
        expect(title).toEqual('Girl | Nidara-Children');
      });
    });
});
