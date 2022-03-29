import styled from "styled-components";

export const Title = styled.h1`
	width: 100%;
	margin: 0 0 1rem 0;
	font-size: 2.5rem;
	line-height: 1;
	a {
		color: #333;
		text-decoration: none;
	}
`;

export const FeaturedWrapper = styled.div`
	width: 100%;
	display: inline-flex;
	justify-content: center;
	background: var(--brown);
	padding: 2rem 1rem;
	margin-bottom: 2rem;
`;

export const FeaturedColumns = styled.div`
	display: grid;
	grid-template-columns: 60% 40%;
	gap: 2rem;
	width: 100%;
	max-width: 1000px;
`;

export const Image = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 6px;
	padding: 1rem;
	img {
		width: 100%;
		height: 100%;
		max-height: 500px;
		object-fit: contain;
		mix-blend-mode: multiply;
	}
`;

export const Info = styled.div`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
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
	color: var(--blue);
`;

export const Rating = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 4px;

	span {
		background: var(--blue);
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

export const Cta = styled.a`
	color: var(--dark-blue);
	text-decoration: none;
	font-size: 1.5rem;
	width: fit-content;
	border: 0;
	border-radius: 6px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	margin-top: 2rem;
	justify-self: flex-end;
`;
