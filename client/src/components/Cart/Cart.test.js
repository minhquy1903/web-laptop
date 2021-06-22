import '@testing-library/jest-dom';
const { debug } = require('dotenv/lib/env-options');
const puppeteer = require('puppeteer');

test('Add product to cart', async () => {
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 10,
	});
	const page = await browser.newPage();
	await page.setViewport({ width: 1240, height: 1000 });
	await page.goto('http://localhost:3000');

	await page.click('button.add-to-cart-btn');
	await page.click('button.add-to-cart-btn');

	await page.click('#i-cart');
	// await page.waitForNavigation();
	//await delay(3000);
	const item = await page.$$eval('.cart__list >.item', (li) => li.length);

	expect(item).toBe(2);

	//page.waitFor
	//await delay(3000);
	await browser.close();
}, 50000);

function delay(time) {
	return new Promise(function (resolve) {
		setTimeout(resolve, time);
	});
}
