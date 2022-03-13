import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Header.style";

const Header = () => {
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
						<li>
							<Link to={"/cart"}>
								<span className="material-icons-outlined">
									shopping_cart
								</span>{" "}
								You cart
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</S.Header>
	);
};

export default Header;
