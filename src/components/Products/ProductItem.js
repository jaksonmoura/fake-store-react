import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./Products.style";

const ProductItem = ({
	id,
	title,
	price,
	category,
	thumbnail,
	rating,
	description,
	images,
}) => {
	const [firstImage, setFirstImage] = useState("");

	const fetchImage = (imgs) => {
		if (!imgs) return;
		setFirstImage(imgs[0]);
	};

	useEffect(() => {
		fetchImage(images);
	});

	return (
		<S.Product>
			<Link to={`/product/${id}`}>
				<img src={firstImage} alt="" />
			</Link>
			<S.ProductInfo>
				<Link to={`/category/${category}`}>
					<span className="category">{category}</span>
				</Link>
				<Link className="product-text" to={`/product/${id}`}>
					<span className="title">{title}</span>
					<span className="price">${price}</span>
				</Link>
			</S.ProductInfo>
		</S.Product>
	);
};

export default ProductItem;

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//          "rate": 3.9,
//          "count": 120
//     }
//}
