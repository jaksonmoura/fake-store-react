import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
	increaseQty,
	decreaseQty,
	removeFromCart,
	placeOrder,
} from "../../cartSlice";
import Modal from "../../components/Misc/Modal";
import * as S from "./Cart.style";

const Cart = () => {
	const items = useSelector((state) => state.cart);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();

	const orderTotal = () => {
		let total = 0;
		items.forEach((i) => {
			total = total + parseFloat(i.item.price) * parseInt(i.qty);
		});
		return total;
	};

	const subtractItem = (id) => {
		dispatch(decreaseQty(id));
	};

	const addItem = (id) => {
		dispatch(increaseQty(id));
	};

	const handlePlaceOrderClick = () => {
		showModal();
		setTimeout(() => {
			dispatch(placeOrder());
		}, 300);
	};

	const showModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<>
			<S.CartWrapper>
				<div className="container">
					<h1>Shopping cart</h1>

					<h2>Product details</h2>
					{items.length === 0 ? (
						<div className="panel">
							<p>You don't have any product in the cart yet.</p>
						</div>
					) : (
						<S.OrderGrid>
							<S.CartList>
								{loading &&
									Array(2)
										.fill(0)
										.map((_, i) => (
											<S.CartItem
												key={i}
												className="component-loading"
											>
												<div
													className="loading box"
													style={{ height: "100px" }}
												></div>
												<div>
													<div className="loading box box-h-sm"></div>
													<div className="loading box box-h-sm"></div>
												</div>
												<div className="loading box box-h-sm"></div>
											</S.CartItem>
										))}
								{!loading && (
									<>
										{items.map((i) => (
											<S.CartItem key={i.id}>
												<img
													src={i.item.images[0]}
													alt=""
												/>
												<S.ItemDetails>
													<h3>
														{i.qty}x{" "}
														<Link
															to={`/product/${i.id}`}
														>
															{i.item.title}
														</Link>
													</h3>
													<span>{i.item.brand}</span>
													<span>
														${i.item.price} (
														{Math.round(
															i.item
																.discountPercentage,
														)}
														% OFF)
													</span>

													<S.ItemQty>
														<S.ItemQtyArrow
															onClick={() =>
																subtractItem(
																	i.item.id,
																)
															}
															disabled={
																i.qty === 1
															}
														>
															<i className="material-icons">
																keyboard_arrow_down
															</i>
														</S.ItemQtyArrow>

														<input
															type="text"
															value={i.qty}
															readOnly
														/>
														<S.ItemQtyArrow
															onClick={() =>
																addItem(
																	i.item.id,
																)
															}
														>
															<i className="material-icons">
																keyboard_arrow_up
															</i>
														</S.ItemQtyArrow>
													</S.ItemQty>
												</S.ItemDetails>
												<span>
													<p className="subtotal">
														Subtotal: $
														{i.qty * i.item.price}
													</p>
													<S.RemoveItem
														onClick={() =>
															dispatch(
																removeFromCart(
																	i.item.id,
																),
															)
														}
													>
														<i className="material-icons">
															delete
														</i>
														Remove
													</S.RemoveItem>
												</span>
											</S.CartItem>
										))}
									</>
								)}
							</S.CartList>
							<S.OrderSummary>
								<h2>Order summary</h2>
								<ul>
									<li>
										<span>Total cost</span>{" "}
										{loading && (
											<div className="component-loading">
												<div className="loading box box-h-sm box-w-sm"></div>
											</div>
										)}
										{!loading && (
											<span>${orderTotal()}</span>
										)}
									</li>
									<li>
										<span>Shipping</span>
										{loading && (
											<div className="component-loading">
												<div className="loading box box-h-sm box-w-sm"></div>
											</div>
										)}
										{!loading && <span>Free</span>}
									</li>
								</ul>
								<S.OrderButton
									onClick={() => handlePlaceOrderClick()}
								>
									Place order
								</S.OrderButton>
							</S.OrderSummary>
						</S.OrderGrid>
					)}
				</div>
			</S.CartWrapper>
			<Modal
				title="Order Placed!"
				handleClose={closeModal}
				show={isModalOpen}
				noFooter
			>
				<div style={{ textAlign: "center" }}>
					<i
						style={{
							fontSize: "80px",
							display: "block",
							color: "#4CAF50",
						}}
						className="material-icons"
					>
						check_circle
					</i>
					<p>
						<strong>Your order has been placed successfully</strong>
					</p>
					<p>Thanks for shopping with us!</p>
					<button
						style={{
							background: "#4CAF50",
							color: "white",
						}}
						onClick={() => navigate("/")}
					>
						Go Home!
					</button>
				</div>
			</Modal>
		</>
	);
};

export default Cart;
