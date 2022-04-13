import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Footer.style";

const Footer = () => {
	return (
		<S.Footer>
			<div className="container">
				<nav>
					<ul>
						<li>Built by Jakson Moura</li>
						<li>
							<a href="https://www.linkedin.com/in/jakson-moura/">
								<img src="/linkedin.svg" alt="Linkedin" />
							</a>
							<a href="https://github.com/jaksonmoura">
								<img src="/github.svg" alt="Github" />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</S.Footer>
	);
};

export default Footer;
