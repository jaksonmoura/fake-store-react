import styled from "styled-components";

export const CartWrapper = styled.div`
	width: 100%;
	margin-top: 2rem;
	padding: 0 2rem;

	.container {
		background: #fff;
		padding: 1rem;
		border-radius: 6px;
	}

	h1 {
		margin-top: 0;
	}
`;

export const CartList = styled.ul`
	border: 1px solid rgba(0, 0, 0, 0.1);
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

	h2 {
		margin: 0;
		font-size: 1.2rem;
	}

	p {
		padding: 0;
		margin: 0;
	}
`;
