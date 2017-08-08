import { Tab1Page } from './app.po';

describe('tab1 App', () => {
  let page: Tab1Page;

  beforeEach(() => {
    page = new Tab1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
