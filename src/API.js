export const BASE_URL = "https://dummyjson.com";

export const API = {
	fetchProducts: async (limit = 10, sort = "asc") => {
		return await fetch(`${BASE_URL}/products?limit=${limit}&sort=${sort}`, {
			mode: "cors",
		})
			.then((res) => res.json())
			.then((data) => data);
	},
	fetchProduct: async (productId = 0) => {
		return await fetch(`${BASE_URL}/products/${productId}`)
			.then((res) => res.json())
			.then((data) => data);
	},
	fetchProductsCategory: async (category = "", limit = 5, sort = "asc") => {
		return await fetch(
			`${BASE_URL}/products/category/${category}?limit=${limit}&sort=${sort}`,
			{ mode: "cors" },
		)
			.then((res) => res.json())
			.then((data) => data);
	},
	fetchCategories: async () => {
		return await fetch(`${BASE_URL}/products/categories/`, { mode: "cors" })
			.then((res) => res.json())
			.then((data) => data);
	},
	fetchCategory: async (category = "", limit = 5, sort = "asc") => {
		return await fetch(
			`${BASE_URL}/category/${category}?limit=${limit}&sort=${sort}`,
			{ mode: "cors" },
		)
			.then((res) => res.json())
			.then((data) => data);
	},
};
