import { NrtPage } from './app.po';

describe('nrt App', () => {
  let page: NrtPage;

  beforeEach(() => {
    page = new NrtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
