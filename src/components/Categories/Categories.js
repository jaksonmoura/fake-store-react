import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../API";

const Categories = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const fetchCategories = async () => {
		const categs = await API.fetchCategories();
		console.log(categs);
		setCategories(categs);
		setLoading(false);
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	return (
		<>
			<div className="categories">
				<h2>Categories</h2>
				<ul>
					{loading &&
						Array(10)
							.fill(0)
							.map((item, i) => (
								<div className="component-loading">
									<div className="loading box box-h-sm"></div>
								</div>
							))}
					{!loading && (
						<>
							{categories.map((c, i) => (
								<li key={i}>
									<Link to={`/products/${c}`}>
										{c.replace("-", " ")}
									</Link>
								</li>
							))}
						</>
					)}
				</ul>
			</div>
		</>
	);
};

export default Categories;
