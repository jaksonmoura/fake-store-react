import React, { useState, useEffect } from "react";
import { API } from "../../API";
import ProductItem from "./ProductItem";
import * as S from "./Products.style";

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
		<S.ProductsCollection>
			{products.map((product) => (
				<ProductItem key={product.id} {...product} />
			))}
		</S.ProductsCollection>
	);
};

export default ProductsList;
