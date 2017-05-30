import { EantgreenhousesAppPage } from './app.po';

describe('eantgreenhouses-app App', () => {
  let page: EantgreenhousesAppPage;

  beforeEach(() => {
    page = new EantgreenhousesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
