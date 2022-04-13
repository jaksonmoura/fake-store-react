import styled from "styled-components";

export const Title = styled.h1`
	width: 100%;
	margin: 0 0 1rem 0;
	font-size: 2.5rem;
	line-height: 1;
	a {
		color: #f1f1f1;
		text-decoration: none;
	}
`;

export const FeaturedWrapper = styled.div`
	width: 100%;
	display: inline-flex;
	justify-content: center;
	background: var(--primary);
	padding: 2rem 1rem;
	margin-bottom: 2rem;
	position: relative;
	overflow: hidden;

	&:before {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		bottom: -50%;
		background: linear-gradient(45deg, #540dd8, aqua);
		filter: blur(60px);
		border-radius: 50%;
		z-index: 0;
		opacity: 0.3;
	}
`;

export const FeaturedColumns = styled.div`
	display: grid;
	grid-template-columns: 60% 40%;
	gap: 2rem;
	width: 100%;
	max-width: 1000px;
	z-index: 1;

	@media screen and (max-width: 992px) {
		grid-template-columns: 1fr;
		grid-template-rows: minmax(auto, 250px) 50%;
	}

	&.component-loading {
	}
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
		object-fit: cover;
		border-radius: 6px;
	}
	@media screen and (max-width: 992px) {
		padding: 0;
		img {
			max-height: 250px;
		}
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
	color: var(--accent);
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
	color: #ccc;
	font-size: 1.3rem;
	line-height: 1.5;
`;

export const Cta = styled.div`
	color: var(--accent);
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

	&:visited {
		color: var(--accent);
	}
`;
