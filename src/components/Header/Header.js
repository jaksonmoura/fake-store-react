import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as S from "./Header.style";

const Header = () => {
	const items = useSelector((state) => state.cart);
	return (
		<S.Header>
			<div className="container">
				<Link className="logo" to={"/"}>
					STORE
				</Link>
				<nav>
					<ul>
						<li>
							<Link to={"/categories"}>Categories</Link>
						</li>
						<li className="cart">
							<Link to={"/cart"}>
								<span className="material-icons-outlined">
									shopping_cart
								</span>
								Your cart
								<span
									className="cart-counter"
									style={{
										display:
											items.length === 0
												? "none"
												: "block",
									}}
								>
									{items.length}
								</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</S.Header>
	);
};

export default Header;
