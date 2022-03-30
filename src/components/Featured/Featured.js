import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Featured.style";

const Featured = ({ featured }) => {
	return (
		<S.FeaturedWrapper>
			<S.FeaturedColumns>
				<S.Image>
					<img src={featured.thumbnail} alt="" />
				</S.Image>
				<S.Info>
					<S.Title>
						<Link to={`/product/${featured.id}`}>
							{featured.title}
						</Link>
					</S.Title>
					<S.Details>
						<S.Price>${featured.price}</S.Price>
					</S.Details>
					<S.Description>{featured.description}</S.Description>
					<Link to={`/product/${featured.id}`}>
						<S.Cta>
							View details
							<i className="material-icons">arrow_right_alt</i>
						</S.Cta>
					</Link>
				</S.Info>
			</S.FeaturedColumns>
		</S.FeaturedWrapper>
	);
};

export default Featured;
