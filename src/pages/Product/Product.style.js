import styled from "styled-components";

export const Title = styled.h1`
	width: 100%;
	margin: 0 0 1rem 0;
	font-size: 2rem;
	line-height: 1;
`;

export const ProductColumns = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
	margin: 2rem auto 0 auto;
	width: 100%;
	max-width: 1000px;
`;

export const Image = styled.div`
	width: 100%;
	height: 100%;
	background: #fff;
	border-radius: 6px;
	padding: 1rem;
	img {
		width: 100%;
		height: 100%;
		max-height: 500px;
		object-fit: contain;
	}
`;

export const Info = styled.div`
	display: inline-flex;
	flex-direction: column;
`;

export const Details = styled.div`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
`;

export const Price = styled.span`
	font-weight: 600;
	justify-self: flex-end;
	font-size: 1.5rem;
	color: var(--secondary);
`;

export const Rating = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 4px;

	span {
		background: var(--secondary);
		color: #fff;
		border-radius: 6px;
		padding: 2px 4px;
	}

	ul {
		display: inline-flex;
		align-items: center;

		color: #ccc;

		li.score {
			color: orange;
		}
	}
`;

export const Availability = styled.div`
	color: #555;
	font-weight: 600;
`;

export const Description = styled.p`
	color: #666;
	font-size: 1.3rem;
	line-height: 1.5;
`;

export const AddToCart = styled.button`
	background: var(--accent);
	color: var(--primary);
	font-size: 1.5rem;
	padding: 0.6rem 1rem;
	border: 0;
	border-radius: 6px;
	display: inline-flex;
	width: fit-content;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	margin-top: 2rem;
	justify-self: flex-end;
	cursor: pointer;
`;
