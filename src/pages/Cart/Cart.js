import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as S from "./Cart.style";

const Cart = () => {
	const items = useSelector((state) => state.cart);

	return (
		<S.CartWrapper>
			<div className="container">
				<h1>Cart</h1>
				<S.CartList>
					{items.map((i) => (
						<S.CartItem key={i.id}>
							<img src={i.item.images[0]} alt="" />
							<h2>
								{i.qty}x{" "}
								<Link to={`/product/${i.id}`}>
									{i.item.title}
								</Link>
							</h2>
							<p>Subtotal: ${i.qty * i.item.price}</p>
						</S.CartItem>
					))}
				</S.CartList>
				<a href="#">Place order</a>
			</div>
		</S.CartWrapper>
	);
};

export default Cart;
