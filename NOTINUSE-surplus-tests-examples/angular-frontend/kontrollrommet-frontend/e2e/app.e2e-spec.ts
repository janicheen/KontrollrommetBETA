import { KontrollrommetFrontendPage } from './app.po';

describe('kontrollrommet-frontend App', () => {
  let page: KontrollrommetFrontendPage;

  beforeEach(() => {
    page = new KontrollrommetFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
