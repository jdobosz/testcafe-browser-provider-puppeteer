import Page from './page-model';

fixture `e2e tests`
.page `http://www.dobosz.at`
;

const page = new Page();

test('it should render page element', async t => {
    await t
        .expect(page.Page.exists).ok();
});

test('it should render page element with resized viewport', async t => {
    await t
        .resizeWindow(320, 640)
        .expect(page.Page.exists).ok();
});

test('it should render page element and take screenshot', async t => {
    await t
        .expect(page.Page.exists).ok()
        .takeScreenshot('./test-screen.png');
});
