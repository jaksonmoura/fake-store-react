import React from "react";
import ProductItem from "./ProductItem";
import * as S from "./Products.style";

const ProductsList = ({ products = [] }) => {
	const tick = new Date().getTime();

	return (
		<S.ProductsWrapper id="products-wrapper">
			<S.ProductsCollection id="products-list">
				{products.map((product, i) => (
					<ProductItem key={i * tick} {...product} />
				))}
			</S.ProductsCollection>
		</S.ProductsWrapper>
	);
};

export default ProductsList;
