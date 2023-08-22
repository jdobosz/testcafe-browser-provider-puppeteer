import Page from './page-model';

fixture`e2e tests`.page`https://www.google.com/`;

const page = new Page();

test('it should render title element', async (t) => {
  await t.expect(page.Title.exists).ok();
});

test('title element should be equal to Google', async (t) => {
  await t.expect(page.Title.textContent).eql('Google');
});
