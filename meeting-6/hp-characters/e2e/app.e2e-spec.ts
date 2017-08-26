import { HpCharactersPage } from './app.po';

describe('hp-characters App', () => {
  let page: HpCharactersPage;

  beforeEach(() => {
    page = new HpCharactersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
