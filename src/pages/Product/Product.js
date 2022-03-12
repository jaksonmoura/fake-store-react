import React, { useState, useEffect } from "react";
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
			<h1>{product.title}</h1>
		</>
	);
};

export default Product;
