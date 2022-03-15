import styled from "styled-components";

export const Footer = styled.footer`
	width: 100%;
	background: #333;
	color: #ccc;

	.container {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		height: 100%;
		flex-direction: column;
	}

	nav {
		display: inline-flex;
	}

	a {
		color: #ccc;
		text-decoration: none;
	}
`;