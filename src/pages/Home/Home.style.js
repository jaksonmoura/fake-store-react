import styled from "styled-components";

export const HomeWrapper = styled.div`
	width: 100%;
	display: inline-flex;
	justify-content: center;
	.container {
		display: grid;
		gap: 1rem;
		grid-template-columns: 240px auto;
	}
`;

export const HomeCategories = styled.div`
	h2 {
		margin-top: 0;
	}

	ul {
		display: inline-flex;
		flex-direction: column;
		width: 100%;
		li {
			padding: 0.5rem;
			width: 100%;
			font-weight: 600;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);

			&:first-of-type {
				border-top: 1px solid rgba(0, 0, 0, 0.1);
			}

			a {
				text-decoration: none;
				color: #666;
			}
		}
	}
`;
