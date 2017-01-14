import { WishPage } from './app.po';

describe('wish App', function() {
  let page: WishPage;

  beforeEach(() => {
    page = new WishPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
