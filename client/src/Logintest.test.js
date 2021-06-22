import '@testing-library/jest-dom';
const { debug } = require('dotenv/lib/env-options');
const puppeteer = require('puppeteer');

test('Check validation with empty input username and password', async () => {
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 10,
	});
	const page = await browser.newPage();
	await page.setViewport({ width: 1240, height: 1000 });
	await page.goto('http://localhost:3000');
	//await page.screenshot({ path: 'example.png' });

	// await page.evaluate(() => {
	// 	document.querySelector('button.add-to-cart-btn').click();
	// });
	await page.click('#i-user');

	//await page.type('#user_name_text_login', 'minhnhat', { delay: 100 });
	//await page.type('#pass_word_text', '123456', { delay: 100 });

	//await delay(3000);
	await page.click('.login-btn');
	let errorLabel = await page.$eval('.error-message', (el) => el.innerHTML);

	expect(errorLabel).toMatch('Username or password is incorrect');

	//document.querySelector('.error-message').innerHTML;
	// expect(
	// 	getByTestId(document.documentElement, 'error-message'),
	// ).toBeInTheDocument();

	// let errorLabel = await page //document.querySelector('.error-message').innerHTML;

	// await Promise.all(
	// 	//page.waitForNavigation(),
	// 	/*await*/ page.click('.login-btn'),
	// 	page.on('dialog', async (dialog) => {
	// 		await dialog.accept();
	// 	}),
	// );

	//jest.setTimeout(6000);

	await browser.close();
});

test('Check validation with wrong username and password', async () => {
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 10,
	});
	const page = await browser.newPage();
	await page.setViewport({ width: 1240, height: 1000 });
	await page.goto('http://localhost:3000');

	await page.click('#i-user');

	await page.type('#user_name_text_login', 'minhnhat1', { delay: 30 });
	await page.type('#pass_word_text', '123456', { delay: 30 });

	//await delay(3000);
	await page.click('.login-btn', { delay: 100 });
	let errorLabel = await page.$eval('.error-message', (el) => el.innerHTML);

	expect(errorLabel).toMatch('Username or password is incorrect');

	await browser.close();
}, 50000);

test('Login success', async () => {
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 10,
	});
	const page = await browser.newPage();
	await page.setViewport({ width: 1240, height: 1000 });
	await page.goto('http://localhost:3000');

	await page.click('#i-user');

	await page.type('#user_name_text_login', 'minhnhat', { delay: 30 });
	await page.type('#pass_word_text', '123456', { delay: 30 });

	//await delay(3000);
	await page.click('.login-btn');
	//let errorLabel = await page.$eval('.error-message', (el) => el.innerHTML);

	let loginForm = await page.$('.error-message');

	expect(loginForm).toBeNull(); //toMatch('Username or password is incorrect');

	await browser.close();
}, 30000);

// function delay(time) {
// 	return new Promise(function (resolve) {
// 		setTimeout(resolve, time);
// 	});
// }
