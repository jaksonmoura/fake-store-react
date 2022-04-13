import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../API";
import ProductItem from "../../components/Products/ProductItem";

import * as S from "../../components/Products/Products.style";

const Category = () => {
	const [products, setProducts] = useState([{}]);
	let params = useParams();
	const category = params.category;
	const categoryTitle =
		category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ");

	const fetchProductsFromCategory = async (category = "") => {
		let products = await API.fetchProductsCategory(category);
		setProducts(products.products);
	};

	useEffect(() => {
		fetchProductsFromCategory(category);
	}, [category]);

	return (
		<div className="container">
			<h1>
				<em>Products in {categoryTitle}</em> category.
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
