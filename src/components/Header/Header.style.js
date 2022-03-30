import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	background: var(--dark-blue);
	color: #fff;
	font-weight: 500;
	height: 60px;
	display: flex;
	justify-content: center;

	.container {
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		padding: 5px 10px;
	}
	a {
		height: 60%;
		border-radius: 16px;
		&:hover {
			background: rgba(0, 0, 0, 0.15);
		}
	}

	nav {
		height: 100%;
		ul {
			height: 100%;
			display: inline-flex;
			align-items: center;
			li {
				list-style-type: none;
				height: 100%;
				display: inline-flex;
				align-items: center;
				a {
					padding: 0 10px;
					display: inline-flex;
					align-items: center;
					gap: 0.5rem;
					border-radius: 16px;
				}
			}
		}
	}

	a {
		text-decoration: none;
		color: #fff;
	}
`;
