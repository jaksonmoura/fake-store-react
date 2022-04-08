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
	const [loading, setLoading] = useState(true);

	const fetchImage = (imgs) => {
		if (!imgs) return;
		setFirstImage(imgs[0]);
	};

	useEffect(() => {
		fetchImage(images);
		const img = new Image();
		img.src = firstImage;
		img.onload = () => {
			setLoading(false);
		};
	});

	return (
		<>
			{loading && (
				<S.Product key={id} className="component-loading">
					<div className="loading box box-h-xlg box-w-xlg"></div>
					<div className="loading box box-w-sm box-h-sm"></div>
					<div className="loading box box-h-md box-w-lg"></div>
					<div className="loading box box-w-sm box-h-md"></div>
				</S.Product>
			)}
			{!loading && (
				<S.Product key={id}>
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
			)}
		</>
	);
};

export default ProductItem;
