import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../API";
import ProductItem from "../../components/Products/ProductItem";

import * as S from "../../components/Products/Products.style";

const Category = () => {
	const [products, setProducts] = useState([{}]);
	let params = useParams();
	const category = params.category;

	const fetchProductsFromCategory = async (category = "") => {
		let products = await API.fetchProductsCategory(category);
		console.log(products);
		setProducts(products.products);
	};

	useEffect(() => {
		fetchProductsFromCategory(category);
	}, [category]);

	return (
		<div className="container">
			<h1>
				Products in <em>{category}</em> category.
			</h1>
			<S.ProductsCollection>
				{products.map((product) => (
					<ProductItem key={product.id} {...product} />
				))}
			</S.ProductsCollection>
		</div>
	);
};

export default Category;
