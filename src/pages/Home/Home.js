import React, { useState, useEffect } from "react";
import { API } from "../../API";

import Featured from "../../components/Featured/Featured";
import Products from "../../components/Products/ProductsList";

const Home = () => {
	const [products, setProducts] = useState([{}]);
	const fetchProducts = async () => {
		let productsResult = await API.fetchProducts();
		setProducts(productsResult.products);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			<Featured
				featured={products[Math.floor(Math.random() * products.length)]}
			/>
			<div className="container">
				<Products products={products} />
			</div>
		</>
	);
};

export default Home;
