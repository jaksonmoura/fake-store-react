import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({
	id,
	title,
	price,
	category,
	image,
	rating,
	description,
}) => {
	return (
		<li>
			<Link to={`/product/${id}`}>
				{title}
				<img src={image} alt="" />
			</Link>
		</li>
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
