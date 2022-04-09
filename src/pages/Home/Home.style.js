import styled from "styled-components";

export const HomeWrapper = styled.div`
	width: 100%;
	display: inline-flex;
	justify-content: center;

	.container {
		@media screen and (max-width: 992px) {
			grid-template-columns: 1fr;
		}
		display: grid;
		gap: 1rem;
		grid-template-columns: 240px auto;
	}
`;

export const HomeCategories = styled.div`
	@media screen and (max-width: 992px) {
		ul {
			flex-direction: row !important;
			flex-wrap: wrap;
			gap: 0.5rem 1rem;
			overflow: hidden;
			max-height: 40px;

			&.show {
				max-height: 345px;
			}

			li {
				width: fit-content !important;

				&:first-of-type {
					border-top: 0 !important;
				}
			}
		}
		.show-more-categories {
			visibility: visible !important;
			opacity: 1 !important;
		}
	}
	h2 {
		margin-top: 0;
	}

	ul {
		display: inline-flex;
		flex-direction: column;
		width: 100%;
		transition: all 0.3s ease-in-out;

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

	.show-more-categories {
		visibility: hidden;
		opacity: 0;
		margin-top: 10px;
		color: #666;
		font-weight: 500;
		border-bottom: 2px solid #666;
		background-color: rgba(0, 0, 0, 0.05);
		width: 100%;
		padding: 0.5rem;
		display: inline-flex;
		justify-content: center;
		align-items: center;
	}
`;
