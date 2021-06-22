import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import LoginAndRegister from '../LoginAndRegister/LoginAndRegister';
import Dropdown from './Dropdown';
import SearchBox from './SearchBox';
import Modal from '../Modal/Modal';
import { CartContext } from '../Context/Context';

import './Header.scss';
const Header = () => {
	const [openLoginForm, setOpenLoginForm] = useState(false);
	const [login, setLogin] = useState(false);
	const [cart, setCart] = useContext(CartContext);

	useEffect(() => {
		const user = localStorage.getItem('userInformation');
		if (user !== null && user !== undefined) setLogin(true);
		const _cart = JSON.parse(localStorage.getItem('cart'));
		if (_cart !== null && _cart !== undefined) setCart(_cart);
		return () => {
			setLogin(false);
		};
	}, [setCart]);

	return (
		<div className='outer-header-container'>
			<div className='inner-header-container'>
				<header className='header'>
					<div className='left-header'>
						<Link to='/'>
							<div className='logo'>
								<img src='/images/logo.png' alt='logo' />
							</div>
						</Link>
						<Dropdown />

						<SearchBox />
					</div>
					<div className='right-header'>
						<div className='box-icon'>
							<Link to='/cart'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									id='i-cart'
									viewBox='0 0 28 28'
									fill='none'
								>
									<path
										d='M22.167 8.167h-3.5V7a4.667 4.667 0 00-9.334 0v1.167h-3.5a1.167 1.167 0 00-1.166 1.166v12.834a3.5 3.5 0 003.5 3.5h11.666a3.5 3.5 0 003.5-3.5V9.333a1.167 1.167 0 00-1.166-1.166zM11.667 7a2.333 2.333 0 114.666 0v1.167h-4.666V7zM21 22.167a1.167 1.167 0 01-1.167 1.166H8.167A1.167 1.167 0 017 22.167V10.5h2.333v1.167a1.167 1.167 0 002.334 0V10.5h4.666v1.167a1.167 1.167 0 102.334 0V10.5H21v11.667z'
										fill='currentColor'
									></path>
								</svg>
							</Link>
							{cart.length === 0 ? null : <span>{cart.length}</span>}
						</div>
						<div className='box-icon login__container__header'>
							{login ? (
								<div className='sad_sad'>
									<Link to='/account'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											id='i-user'
											viewBox='0 0 28 28'
											fill='none'
										>
											<path
												d='M13.978 2.333a11.667 11.667 0 00-8.575 19.554 11.667 11.667 0 0017.15 0 11.666 11.666 0 00-8.575-19.554zm0 21a9.333 9.333 0 01-6.475-2.625 7 7 0 0112.95 0 9.334 9.334 0 01-6.475 2.625zm-2.333-11.666a2.333 2.333 0 114.666 0 2.333 2.333 0 01-4.666 0zm10.395 7a9.333 9.333 0 00-4.562-3.944 4.667 4.667 0 10-7 0 9.333 9.333 0 00-4.562 3.944A9.24 9.24 0 014.644 14a9.333 9.333 0 0118.667 0 9.241 9.241 0 01-1.271 4.667z'
												fill='currentColor'
											></path>
										</svg>
									</Link>
								</div>
							) : (
								<svg
									onClick={() => setOpenLoginForm(!openLoginForm)}
									xmlns='http://www.w3.org/2000/svg'
									id='i-user'
									viewBox='0 0 28 28'
									fill='none'
								>
									<path
										d='M13.978 2.333a11.667 11.667 0 00-8.575 19.554 11.667 11.667 0 0017.15 0 11.666 11.666 0 00-8.575-19.554zm0 21a9.333 9.333 0 01-6.475-2.625 7 7 0 0112.95 0 9.334 9.334 0 01-6.475 2.625zm-2.333-11.666a2.333 2.333 0 114.666 0 2.333 2.333 0 01-4.666 0zm10.395 7a9.333 9.333 0 00-4.562-3.944 4.667 4.667 0 10-7 0 9.333 9.333 0 00-4.562 3.944A9.24 9.24 0 014.644 14a9.333 9.333 0 0118.667 0 9.241 9.241 0 01-1.271 4.667z'
										fill='currentColor'
									></path>
								</svg>
							)}
						</div>
					</div>
				</header>
				<Modal
					openModal={openLoginForm}
					closeModal={() => {
						setOpenLoginForm(false);
					}}
				>
					<LoginAndRegister
						closeModal={() => {
							setOpenLoginForm(false);
						}}
						login={login}
						setLogin={setLogin}
					/>
				</Modal>
			</div>
		</div>
	);
};

export default Header;
