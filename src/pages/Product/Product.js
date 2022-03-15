import React, { useState, useEffect } from "react";
import * as S from "./Product.style";
import { API } from "../../API";

const Product = ({ id = 1 }) => {
	const [product, setProduct] = useState({});

	const fetchProduct = async (productId) => {
		let productResult = await API.fetchProduct(productId);
		setProduct(productResult);
	};

	useEffect(() => {
		fetchProduct(id);
	}, [id]);

	return (
		<>
			<S.ProductColumns>
				<S.Image src={product.image} alt=""></S.Image>
				<S.Info>
					<S.Title>{product.title}</S.Title>
					<S.Price>${product.price}</S.Price>
					<S.Description>{product.description}</S.Description>
				</S.Info>
			</S.ProductColumns>
		</>
	);
};

export default Product;
