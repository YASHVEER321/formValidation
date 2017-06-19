import { FormValidationPage } from './app.po';

describe('form-validation App', function() {
  let page: FormValidationPage;

  beforeEach(() => {
    page = new FormValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
