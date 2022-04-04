import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	background: var(--primary);
	color: #fff;
	font-weight: 500;
	display: flex;
	justify-content: center;

	.container {
		height: 60px;
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		padding: 5px 10px;
		line-height: 1.8;
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
				&.cart {
					a {
						position: relative;
					}

					.cart-counter {
						background-color: red;
						border-radius: 50%;
						position: absolute;
						font-size: 0.8rem;
						top: -4px;
						left: 24px;
						padding: 2px 4px;
						font-size: 0.8rem;
						color: #fff;
						line-height: 1;
						border-radius: 50px;
						text-align: center;
						display: inline-flex;
						align-items: center;
					}
				}
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
