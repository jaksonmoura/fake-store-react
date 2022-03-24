import React, { useState, useEffect } from "react";
import { API } from "../../API";
import ProductItem from "./ProductItem";
import * as S from "./Products.style";

const ProductsList = () => {
	const [products, setProducts] = useState([{}]);
	const [translationX, setTranslationX] = useState(0);
	const productsList = document.querySelector("#products-list");
	const productsWrapper = document.querySelector("#products-wrapper");

	const fetchProducts = async () => {
		let productsResult = await API.fetchProducts();
		setProducts(productsResult);
	};

	const handleClick = (e, back = false) => {
		e.preventDefault();
		let listWidth = productsWrapper.clientWidth;
		let translationXPositive = Math.abs(translationX);
		if (back) {
			let tlX =
				translationXPositive - listWidth >= 0
					? translationXPositive - listWidth
					: 0;
			setTranslationX(tlX * -1);
		} else {
			let tlX =
				translationXPositive + listWidth >= productsList.clientWidth
					? translationXPositive - listWidth
					: 0;
			setTranslationX(tlX);
		}
		console.log(listWidth, productsList.clientWidth, translationXPositive);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<S.ProductsWrapper id="products-wrapper">
			<S.ButtonScroll href="#" back onClick={(e) => handleClick(e)}>
				<i className="material-icons">keyboard_arrow_left</i>
			</S.ButtonScroll>
			<S.ProductsCollection
				id="products-list"
				style={{ transform: `translateX(${translationX}px)` }}
			>
				{products.map((product) => (
					<ProductItem key={product.id} {...product} />
				))}
			</S.ProductsCollection>
			<S.ButtonScroll href="#" onClick={(e) => handleClick(e)}>
				<i className="material-icons">keyboard_arrow_right</i>
			</S.ButtonScroll>
		</S.ProductsWrapper>
	);
};

export default ProductsList;
