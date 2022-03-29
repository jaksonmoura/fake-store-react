import React from "react";
import * as S from "./Featured.style";

const Featured = ({ featured }) => {
	return (
		<S.FeaturedWrapper>
			<S.FeaturedColumns>
				<S.Image>
					<img src={featured.image} alt="" />
				</S.Image>
				<S.Info>
					<S.Title>
						<a href={`/product/${featured.id}`}>{featured.title}</a>
					</S.Title>
					<S.Details>
						<S.Price>${featured.price}</S.Price>
					</S.Details>
					<S.Description>{featured.description}</S.Description>
					<S.Cta href={`/product/${featured.id}`}>
						View details
						<i className="material-icons">arrow_right_alt</i>
					</S.Cta>
				</S.Info>
			</S.FeaturedColumns>
		</S.FeaturedWrapper>
	);
};

export default Featured;
