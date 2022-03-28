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
		if (back) {
			if (translationX + listWidth > 0) return;
			setTranslationX(translationX + listWidth);
		} else {
			if (
				Math.abs(translationX - listWidth) >= productsList.clientWidth
			) {
				setTranslationX(0);
				return;
			}
			setTranslationX(translationX - listWidth);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<S.ProductsWrapper id="products-wrapper">
			<S.ButtonScroll
				href="#"
				style={{ display: translationX < 0 ? "inline-flex" : "none" }}
				back
				onClick={(e) => handleClick(e, true)}
			>
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
