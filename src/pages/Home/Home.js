import React, { useState, useEffect } from "react";
import { API } from "../../API";

import Featured from "../../components/Featured/Featured";
import Products from "../../components/Products/ProductsList";
import Categories from "../../components/Categories/Categories";
import * as S from "./Home.style";

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
			<S.HomeWrapper>
				<div className="container">
					<S.HomeCategories>
						<Categories />
					</S.HomeCategories>
					<Products products={products} />
				</div>
			</S.HomeWrapper>
		</>
	);
};

export default Home;
