import React from 'react';
import './CartItem.css';

const CartItem = ({ name, price, quantity, img }) => {
	return (
		<div className="CartItem">
			<h4 className="CartItem-title">{name}</h4>
			<img src={img} className="CartItem-img" alt="" />
			<ul>
				<li>Price: ${price}</li>
				<li>Quantity: {quantity}</li>
				<li>Subtotal: ${price * quantity}</li>
			</ul>
		</div>
	);
};

export default CartItem;
