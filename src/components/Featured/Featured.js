import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./Featured.style";

const Featured = ({ featured }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const img = new Image();
		img.src = featured.thumbnail;
		img.onload = () => {
			setLoading(false);
		};
	});

	return (
		<S.FeaturedWrapper>
			{loading && (
				<S.FeaturedColumns className="component-loading">
					<div className="loading box box-h-xlg"></div>
					<div>
						<div className="loading box box-h-md"></div>
						<div className="loading box box-h-sm box-w-md"></div>
						<div className="loading box box-h-lg"></div>
						<div className="loading box box-h-md box-w-lg"></div>
					</div>
				</S.FeaturedColumns>
			)}
			{!loading && (
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
								<i className="material-icons">
									arrow_right_alt
								</i>
							</S.Cta>
						</Link>
					</S.Info>
				</S.FeaturedColumns>
			)}
		</S.FeaturedWrapper>
	);
};

export default Featured;
