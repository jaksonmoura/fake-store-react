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
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	max-height: 500px;
	object-fit: contain;
`;

export const Info = styled.div`
	display: inline-flex;
	flex-direction: column;
`;

export const Price = styled.span`
	font-weight: 600;
	justify-self: flex-end;
	font-size: 1.5rem;
	color: #00f;
`;

export const Description = styled.p`
	color: #666;
	font-size: 1.3rem;
	line-height: 1.5;
`;
