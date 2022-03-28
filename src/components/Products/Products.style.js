import styled from "styled-components";

export const ProductsWrapper = styled.div`
	width: 100%;
	overflow: hidden;
	padding: 0 2rem;
	position: relative;
`;

export const ButtonScroll = styled.a`
	width: 50px;
	height: 50px;
	background: #fff;
	border: 1px solid #ccc;
	border-radius: 50%;
	position: absolute;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
	z-index: 5;
	top: 40px;
	${(props) => (props.back ? "left: 0" : "right: 0;")}
`;

export const ProductsCollection = styled.ul`
	width: fit-content;
	display: flex;
	gap: 2rem;
	padding: 0;
	transition: 0.5s ease-in-out;
`;

export const Product = styled.li`
	width: 250px;
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
