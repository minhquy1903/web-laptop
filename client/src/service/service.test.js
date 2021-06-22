import { formatMoney } from './service';
test(`change format price`, () => {
	const result = formatMoney(3000000);
	expect(result).toMatch('3,000,000');
});
