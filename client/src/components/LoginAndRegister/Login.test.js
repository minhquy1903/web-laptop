import React from 'react';
import {
	render,
	screen,
	fireEvent,
	waitForDomChange,
	waitFor,
} from '@testing-library/react';
import Login from './Login';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

it('check input ', async () => {
	let root = render(<Login />);
	const { getByRole, getByText, debug } = root;
	const mock = jest.fn();
	//const username = document.getElementById('user_name_text_login').value;

	// function myFunction() {
	// 	document.querySelector('.login-btn').click();
	// }
	// myFunction();

	fireEvent.click(getByText('Login'));
	//await waitForDomChange();

	await waitFor(() => {
		//debug();
		expect(getByText('Username or password is incorrect')).toBeInTheDocument();
	});

	//screen.getByTestId('kool');
	//const container = getByTestId('kool');
	//getByText(container, 'Username or password is incorrect');
	//expect(screen.getByTextId('kool')).toBeInTheDocument();
	//const errorContainer = screen.getByTestId('kool');
	//expect(errorContainer).toBeInTheDocument();

	//const asd = screen.getByTestId('kool');
	//expect(asd).toBeNull();

	//expect(labelError).toMatch('Username or password is incorrect');
});
