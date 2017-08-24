import { VillainProjectPage } from './app.po';

describe('villain-project App', () => {
  let page: VillainProjectPage;

  beforeEach(() => {
    page = new VillainProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
