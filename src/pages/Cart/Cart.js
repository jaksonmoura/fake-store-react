import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<>
			<h1>Cart</h1>
			{cart.map((c) => (
				<span key={c.id}>{c.title}</span>
			))}
		</>
	);
};

export default Cart;
