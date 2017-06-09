import { InitializerDemoPage } from './app.po';

describe('initializer-demo App', () => {
  let page: InitializerDemoPage;

  beforeEach(() => {
    page = new InitializerDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
