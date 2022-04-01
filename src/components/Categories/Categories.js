import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../API";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	const fetchCategories = async () => {
		const categs = await API.fetchCategories();
		console.log(categs);
		setCategories(categs);
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	return (
		<div className="categories">
			<h2>Categories</h2>
			<ul>
				{categories.map((c, i) => (
					<li key={i}>
						<Link to={`/products/${c}`}>{c.replace("-", " ")}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
