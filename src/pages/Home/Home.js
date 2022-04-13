import React, { useState, useEffect } from "react";
import { API } from "../../API";

import Featured from "../../components/Featured/Featured";
import Products from "../../components/Products/ProductsList";
import Categories from "../../components/Categories/Categories";
import * as S from "./Home.style";

const Home = () => {
	const [products, setProducts] = useState([{}]);
	const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
	const [randomFeatured, setRandomFeatured] = useState({});
	const fetchProducts = async () => {
		let productsResult = await API.fetchProducts();
		setProducts(productsResult.products);
		setRandomFeatured(
			productsResult.products[
				Math.floor(Math.random() * productsResult.products.length)
			],
		);
		console.log(randomFeatured);
	};

	const toggleMoreCategoriesMobile = (e) => {
		e.preventDefault();
		setIsCategoriesVisible(!isCategoriesVisible);
		document.querySelector(".categories ul").classList.toggle("show");
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			<Featured featured={randomFeatured} />
			<S.HomeWrapper>
				<div className="container">
					<S.HomeCategories>
						<Categories />
						<button
							className="show-more-categories"
							onClick={(e) => toggleMoreCategoriesMobile(e)}
						>
							{isCategoriesVisible ? (
								<i className="material-icons">remove</i>
							) : (
								<i className="material-icons">add</i>
							)}
							{" categories"}
						</button>
					</S.HomeCategories>
					<Products products={products} />
				</div>
			</S.HomeWrapper>
		</>
	);
};

export default Home;
