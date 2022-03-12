export const BASE_URL = "https://fakestoreapi.com";

export const API = {
	fetchProducts: async (limit = 5, sort = "asc") => {
		return await fetch(`${BASE_URL}/products?limit=${limit}&sort=${sort}`)
			.then((res) => res.json())
			.then((data) => {
				return data;
			});
	},

	fetchProduct: async (productId = 0) => {
		return await fetch(`${BASE_URL}/products/${productId}`)
			.then((res) => res.json())
			.then((data) => data);
	},

	fetchCategories: async () => {
		return await fetch(`${BASE_URL}/categories`)
			.then((res) => res.json())
			.then((data) => data);
	},

	fetchCategory: async (category = "", limit = 5, sort = "asc") => {
		return await fetch(
			`${BASE_URL}/category/${category}?limit=${limit}&sort=${sort}`,
		)
			.then((res) => res.json())
			.then((data) => data);
	},
};
