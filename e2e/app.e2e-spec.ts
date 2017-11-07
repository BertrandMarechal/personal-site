import { BacasablePage } from './app.po';

describe('bacasable App', () => {
  let page: BacasablePage;

  beforeEach(() => {
    page = new BacasablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
