import styled from "styled-components";

export const CartWrapper = styled.div`
	width: 100%;
	margin-top: 2rem;
	padding: 0 2rem;
	display: inline-flex;
	justify-content: center;
	max-width: 1400px;

	.container {
		background: #fff;
		padding: 1rem;
		border-radius: 6px;
	}

	h1 {
		margin-top: 0;
	}

	h2 {
		font-size: 1rem;
		text-transform: uppercase;
		color: #666;
	}
`;

export const OrderGrid = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: auto 300px;
`;

export const CartList = styled.ul`
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 6px;
	height: fit-content;
`;

export const CartItem = styled.li`
	display: grid;
	grid-template-columns: 100px auto 100px;
	gap: 10px;
	padding: 10px;
	width: 100%;

	&:not(:last-of-type) {
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	img {
		width: 100%;
	}

	h3 {
		margin: 0;
		font-size: 1.2rem;
	}

	p {
		padding: 0;
		margin: 0;
	}
`;

export const ItemDetails = styled.div`
	display: inline-flex;
	flex-direction: column;

	span {
		font-size: 0.9rem;
		color: #666;
	}
`;

export const OrderSummary = styled.div`
	background-color: #eef2f3;
	color: #444;
	padding: 10px;
	border-radius: 6px;

	ul {
		display: inline-flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		margin: 2rem 0;

		li {
			width: 100%;
			display: inline-flex;
			justify-content: space-between;

			span:last-of-type {
				font-weight: 500;
			}
		}
	}
`;

export const OrderButton = styled.button`
	width: 100%;
	height: 60px;
	background-color: var(--accent);
	border: none;
	border-radius: 6px;
	font-size: 1rem;
	font-weight: 500;
	margin-top: 1rem;
	cursor: pointer;
	&:hover {
		opacity: 0.9;
		background-color: var(--accent-dark);
	}
`;
