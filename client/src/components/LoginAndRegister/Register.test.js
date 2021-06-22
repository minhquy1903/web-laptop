import '@testing-library/jest-dom';
const { debug } = require('dotenv/lib/env-options');
const puppeteer = require('puppeteer');

test('Check validation with empty input username,password and email', async () => {
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 10,
	});
	const page = await browser.newPage();
	await page.setViewport({ width: 1240, height: 1000 });
	await page.goto('http://localhost:3000');

	await page.click('#i-user');
	await page.click('#test-Register');

	let disableBtn = await page.$('button.is-disabled');

	expect(disableBtn).not.toBeNull();

	await browser.close();
}, 50000);

test('Check validation with wrong input username,password and email', async () => {
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 10,
	});
	const page = await browser.newPage();
	await page.setViewport({ width: 1240, height: 1000 });
	await page.goto('http://localhost:3000');

	await page.click('#i-user');
	await page.click('#test-Register');

	await page.type('#username-text-register', 'quy', { delay: 50 });
	await page.type('#email-text-register', 'kol', { delay: 50 });
	await page.type('#password-text-register', '1234', { delay: 50 });

	let errorUsernameLabel = await page.$eval(
		'#error-message-username-test-register',
		(el) => el.innerHTML,
	);

	let errorEmailLabel = await page.$eval(
		'#error-message-email-test-register',
		(el) => el.innerHTML,
	);

	let errorPassLabel = await page.$eval(
		'#error-message-pass-test-register',
		(el) => el.innerHTML,
	);

	expect(errorUsernameLabel).toMatch('username phải trong 5 - 16 kí tự');
	expect(errorEmailLabel).toMatch('email của bạn không hợp lệ');
	expect(errorPassLabel).toMatch('password phải trong 5 - 24 kí tự');

	await browser.close();
}, 50000);

test('Register success', async () => {
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 10,
	});
	const page = await browser.newPage();
	await page.setViewport({ width: 1240, height: 1000 });
	await page.goto('http://localhost:3000');

	await page.click('#i-user');
	await page.click('#test-Register');

	await page.type('#username-text-register', 'minhquykool', { delay: 5 });
	await page.type('#email-text-register', 'kol@gmail.com', { delay: 5 });
	await page.type('#password-text-register', '123456', { delay: 5 });

	await page.click('.register-btn');
	await delay(2000);
	const closeForm = await page.$('.login-register-container');

	expect(closeForm).toBeNull();

	await browser.close();
}, 50000);

function delay(time) {
	return new Promise(function (resolve) {
		setTimeout(resolve, time);
	});
}
