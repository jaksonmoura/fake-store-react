import React, { useState, useEffect } from "react";
import * as S from "./Product.style";
import { API } from "../../API";

const Product = ({ id = 1 }) => {
	const [product, setProduct] = useState({});
	const [rating, setRating] = useState(0);

	const fetchProduct = async (productId) => {
		let productResult = await API.fetchProduct(productId);
		setProduct(productResult);
		setRating(Math.round(product?.rating?.rate));
	};

	const ratingBuild = (score = 0) => {
		if (score <= rating) {
			return (
				<li key={score} className="score">
					<i className="material-icons">star</i>
				</li>
			);
		} else {
			return (
				<li key={score}>
					<i className="material-icons">star</i>
				</li>
			);
		}
	};

	const RatingStar = () => {
		return <ul>{[...Array(5)].map((x, i) => ratingBuild(i + 1))}</ul>;
	};

	useEffect(() => {
		fetchProduct(id);
	}, [id, rating]);

	return (
		<>
			<S.ProductColumns>
				<S.Image>
					<img src={product.image} alt="" />
				</S.Image>
				<S.Info>
					<S.Title>{product.title}</S.Title>
					<S.Details>
						<S.Price>${product.price}</S.Price>
						<S.Rating>
							<span>{product.rating?.rate}</span>
							<RatingStar />
						</S.Rating>
						<S.Availability>
							{product.rating?.count} items
						</S.Availability>
					</S.Details>
					<S.Description>{product.description}</S.Description>
					<S.AddToCart>
						<i className="material-icons">add_shopping_cart</i>Add
						to cart
					</S.AddToCart>
				</S.Info>
			</S.ProductColumns>
		</>
	);
};

export default Product;
