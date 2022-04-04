import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as S from "./Cart.style";

const Cart = () => {
	const items = useSelector((state) => state.cart);

	const orderTotal = () => {
		let total = 0;
		items.forEach((i) => {
			total = total + parseFloat(i.item.price) * parseInt(i.qty);
		});
		return total;
	};

	return (
		<S.CartWrapper>
			<div className="container">
				<h1>Shopping cart</h1>

				<h2>Product details</h2>
				<S.OrderGrid>
					<S.CartList>
						{items.map((i) => (
							<S.CartItem key={i.id}>
								<img src={i.item.images[0]} alt="" />
								<S.ItemDetails>
									<h3>
										{i.qty}x{" "}
										<Link to={`/product/${i.id}`}>
											{i.item.title}
										</Link>
									</h3>
									<span>{i.item.brand}</span>
									<span>
										${i.item.price} (
										{Math.round(i.item.discountPercentage)}%
										OFF)
									</span>
									<span></span>
								</S.ItemDetails>
								<p>Subtotal: ${i.qty * i.item.price}</p>
							</S.CartItem>
						))}
					</S.CartList>
					<S.OrderSummary>
						<h2>Order summary</h2>
						<ul>
							<li>
								<span>Total cost</span>{" "}
								<span>${orderTotal()}</span>
							</li>
							<li>
								<span>Shipping</span> <span>$22</span>
							</li>
						</ul>
						<S.OrderButton>Place order</S.OrderButton>
					</S.OrderSummary>
				</S.OrderGrid>
			</div>
		</S.CartWrapper>
	);
};

export default Cart;
