import styled from "styled-components";

export const Modal = styled.div`
	width: 100vw;
	height: 100vh;
	margin: 0 auto;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0;
	transition: all 0.3s ease-in-out;
	visibility: hidden;

	&.show {
		opacity: 1;
		visibility: visible;

		.modal-dialog {
			transform: translateY(0);
		}
	}

	.modal-dialog {
		transition: all 0.3s ease-in-out;
		transform: translateY(50px);
		width: 100%;
		max-width: 500px;
		border-radius: 6px;
		box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.1);
		background: #fff;
		padding: 20px;
		display: flex;
		flex-direction: column;

		.modal-content {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		.modal-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			border-bottom: 1px solid #e5e5e5;
		}

		.modal-title {
			font-size: 1.5rem;
			font-weight: 500;
			color: #333;
			margin: 0 0 10px 0;
		}

		button.close {
			background: transparent;
			border: 0;
			color: #333;
			border-radius: 50%;
			cursor: pointer;
			font-size: 1.5rem;
			height: 40px;
			width: 40px;
			padding: 0;
			margin-top: -10px;

			&:hover {
				background-color: #e5e5e5;
			}
		}

		.modal-body {
			width: 100%;

			img {
				width: 100%;
			}
		}

		.modal-footer {
			display: flex;
			justify-content: space-between;
			align-items: center;

			button {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 6px;
				background-color: var(--primary);
				color: #fff;
				height: 44px;
				border-radius: 6px;
				border: 0;
				padding: 4px 10px;
				cursor: pointer;

				&:hover {
					background-color: var(--primary-dark);
				}
			}
		}
	}
`;
