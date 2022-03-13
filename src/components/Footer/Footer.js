import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Footer.style";

const Footer = () => {
	return (
		<S.Footer>
			<div className="container">
				<Link to={"/"}>STORE</Link>
				<nav>
					<ul>
						<li>Lala</li>
					</ul>
				</nav>
			</div>
		</S.Footer>
	);
};

export default Footer;
