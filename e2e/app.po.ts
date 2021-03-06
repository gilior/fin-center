import { browser, by, element } from 'protractor';

export class FinCenterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lg-root h1')).getText();
  }
}
