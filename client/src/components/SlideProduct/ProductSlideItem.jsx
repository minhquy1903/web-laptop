import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { formatMoney } from '../../service/service';
import { CartContext } from '../Context/Context';

import './ProductSlideItem.scss';

export default function ProductSlideItem({ product, loading }) {
	const [cart, setCart] = useContext(CartContext);
	if (loading) return <h2>Loadding ...</h2>;
	const addToCart = () => {
		setCart([...cart, product]);
		localStorage.setItem('cart', JSON.stringify([...cart, product]));
	};
	return (
		<div className='product-slide-item-container'>
			<div className='wrap-product-item'>
				<div className='top-content'>
					<div className='image-container'>
						<Link to={`${product.name}?option=${product._id}`}>
							<img
								height='150'
								alt='hinh-laptop'
								src='https://lh3.googleusercontent.com/-uJiYXta7Z3y_J6MQO_lUFM6aFoII57litOf43wUBikenb0HH7SgAyxN5XKg50biNgRocRWa1m6OG8_la8Aai7VHQz0DjRE=w500-rw'
							/>
						</Link>
						<div className='product-tag'>
							{product.discount !== 0 ? (
								<span className='onsale'>
									-{formatMoney(product.discount)} đ
								</span>
							) : null}
							{product.status === 'incoming' ? (
								<span className='new'>Mới về</span>
							) : null}
						</div>
					</div>
				</div>

				<div className='bottom-content'>
					<h3 className='product-name'>{product.name}</h3>
					<div className='sku-code'>SKU: {product.sku}</div>
					<div className='price'>{formatMoney(product.price)}đ</div>
					<button className='add-to-cart-btn' onClick={() => addToCart()}>
						Thêm vào giỏ hàng
					</button>
				</div>
			</div>
		</div>
	);
}
