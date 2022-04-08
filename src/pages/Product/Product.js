import React, { useState, useEffect } from "react";
import * as S from "./Product.style";
import { API } from "../../API";
import { useDispatch } from "react-redux";
import { addToCart } from "../../cartSlice";
import { useParams } from "react-router-dom";

const Product = () => {
	const [product, setProduct] = useState({});
	const [rating, setRating] = useState(0);
	let { id } = useParams();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	const fetchProduct = async (productId) => {
		let productResult = await API.fetchProduct(productId);
		setProduct(productResult);
		setRating(Math.round(productResult.rating));
	};

	const addProductToCart = () => {
		dispatch(addToCart(product));
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
		const img = new Image();
		img.src = product.thumbnail;
		img.onload = () => {
			setLoading(false);
		};
	}, [id, product.thumbnail]);

	return (
		<div className="container">
			{loading && (
				<S.ProductColumns className="component-loading">
					<div className="loading box box-h-xlg"></div>
					<div>
						<div className="loading box box-h-md"></div>
						<div className="loading box box-h-sm"></div>
						<div className="loading box box-h-lg"></div>
						<div className="loading box box-w-sm box-h-md"></div>
					</div>
				</S.ProductColumns>
			)}
			{!loading && (
				<S.ProductColumns>
					<S.Image>
						<img src={product.thumbnail} alt="" />
					</S.Image>
					<S.Info>
						<S.Title>{product.title}</S.Title>
						<S.Details>
							<S.Price>${product.price}</S.Price>
							<S.Rating>
								<span>{product.rating}</span>
								<RatingStar />
							</S.Rating>
							<S.Availability>
								{product.stock} items
							</S.Availability>
						</S.Details>
						<S.Description>{product.description}</S.Description>
						<S.AddToCart onClick={() => addProductToCart()}>
							<i className="material-icons">add_shopping_cart</i>
							Add to cart
						</S.AddToCart>
					</S.Info>
				</S.ProductColumns>
			)}
		</div>
	);
};

export default Product;
