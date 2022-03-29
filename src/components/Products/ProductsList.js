import React, { useState } from "react";

import ProductItem from "./ProductItem";
import * as S from "./Products.style";

const ProductsList = ({ products = [] }) => {
	const [translationX, setTranslationX] = useState(0);
	const [arrowDisabled, setArrowDisabled] = useState(false);
	const productsList = document.querySelector("#products-list");
	const productsWrapper = document.querySelector("#products-wrapper");

	const calculateListTranslate = (back) => {
		let listVisibleWidth = productsWrapper.clientWidth;
		let rect = productsList.getBoundingClientRect();
		if (back) {
			console.log(translationX + listVisibleWidth);
			if (translationX + listVisibleWidth > 0) {
				setTranslationX(0);
				return;
			}
			setTranslationX(translationX + listVisibleWidth);
		} else {
			if (listVisibleWidth > rect.right - listVisibleWidth) {
				if (
					Math.abs(translationX - listVisibleWidth) >=
					productsList.clientWidth
				) {
					setTranslationX(0);
					return;
				}
				let endofListPosition =
					listVisibleWidth - (listVisibleWidth - rect.right + 16);
				setTranslationX(endofListPosition * -1);
				return;
			}

			setTranslationX(translationX - listVisibleWidth);
		}
	};

	const handleClick = (e, back = false) => {
		e.preventDefault();
		if (arrowDisabled) return;
		setArrowDisabled(true);
		calculateListTranslate(back);
		setTimeout(() => {
			setArrowDisabled(false);
		}, 300);
	};

	return (
		<S.ProductsWrapper id="products-wrapper">
			<S.ButtonScroll
				href="#"
				style={{
					visibility: translationX < 0 ? "visible" : "hidden",
				}}
				back
				disabled={arrowDisabled}
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
			<S.ButtonScroll
				href="#"
				disabled={arrowDisabled}
				onClick={(e) => handleClick(e)}
			>
				<i className="material-icons">keyboard_arrow_right</i>
			</S.ButtonScroll>
		</S.ProductsWrapper>
	);
};

export default ProductsList;
