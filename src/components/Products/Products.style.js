import styled from "styled-components";

export const ProductsCollection = styled.ul`
	width: 100%;
	display: flex;
	gap: 3rem 2rem;
	flex-wrap: wrap;
	padding: 0;
`;

export const Product = styled.li`
	width: 100%;
	max-width: 250px;
	height: 350px;
	list-style-type: none;

	a {
		display: flex;
		flex-direction: column;
		gap: 4px;
		text-decoration: none;
	}

	img {
		width: 100%;
		height: 250px;
		padding: 1rem;
		object-fit: contain;
	}
`;

export const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;

	.category {
		font-size: 0.9rem;
		color: blue;
	}
	.title {
		font-weight: 500;
		color: #333;
	}
	.description {
		color: #666;
		height: 50px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;
