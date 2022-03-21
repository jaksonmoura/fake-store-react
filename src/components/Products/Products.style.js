import styled from "styled-components";

export const ProductsCollection = styled.ul`
	width: 100%;
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
	padding: 0;
`;

export const Product = styled.li`
	width: 100%;
	max-width: 250px;
	min-height: 350px;
	list-style-type: none;
	background: #fff;
	border-radius: 6px;
	box-shadow: 3px 6px 10px rgba(46, 73, 98, 0.1);
	padding: 1rem;

	a {
		display: flex;
		flex-direction: column;
		gap: 4px;
		text-decoration: none;
		color: green;
	}

	img {
		width: 100%;
		height: 250px;
		object-fit: contain;
		margin-bottom: 0.5rem;
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
		font-weight: 600;
		color: #333;
	}
	.price {
		font-weight: 600;
	}
	.description {
		color: #666;
		height: 50px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;
