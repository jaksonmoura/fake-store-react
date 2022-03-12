import React, { useState, useEffect } from "react";
import { API } from "../../API";
import Product from "./ProductItem";

const ProductsList = () => {
	const [products, setProducts] = useState([{}]);

	const fetchProducts = async () => {
		let productsResult = await API.fetchProducts();
		setProducts(productsResult);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<ul>
			{products.map((product) => (
				<Product key={product.id} {...product} />
			))}
		</ul>
	);
};

export default ProductsList;
