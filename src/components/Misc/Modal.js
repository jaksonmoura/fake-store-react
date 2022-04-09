import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Modal.style";

const Modal = ({ title, show, handleClose, noFooter, children }) => {
	const navigate = useNavigate();

	return (
		<S.Modal
			className={`modal ${show ? "show" : ""}`}
			id="modal"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="modal-label"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="modal-label">
							{title}
						</h5>
						<button
							type="button"
							className="close"
							aria-label="Close"
							onClick={handleClose}
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">{children}</div>
					{!noFooter && (
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={handleClose}
							>
								Keep shopping
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => navigate("/cart")}
							>
								<i className="material-icons">shopping_cart</i>
								Go to cart
							</button>
						</div>
					)}
				</div>
			</div>
		</S.Modal>
	);
};

export default Modal;
