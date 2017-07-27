import { FirstNG2Page } from './app.po';

describe('first-ng2 App', () => {
  let page: FirstNG2Page;

  beforeEach(() => {
    page = new FirstNG2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
