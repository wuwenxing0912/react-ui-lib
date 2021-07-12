import React, { Fragment, ReactNode } from "react";
import classes from "../helpers/classes";
import Icon from "../icon/icon";
import Button from "../button/button";
import "./modal.scss";
import ReactDOM from "react-dom";

interface Props {
	visible: boolean;
	onClose: React.MouseEventHandler;
	onConfirm: React.MouseEventHandler;
	onClickMaskClose?: boolean;
	title?: string | ReactNode;
}

const Modal: React.FunctionComponent<Props> = (props) => {
	// const onClickClose: React.MouseEventHandler = (e) => {
	// 	props.onClose(e);
	// };
	const onClickMaskClose: React.MouseEventHandler = (e) => {
		if (props.onClickMaskClose) {
			props.onClose(e);
		}
	};
	const portal =
		props.visible || true ? (
			<Fragment>
				<div
					className={classes("x-modal-mask")}
					onClick={onClickMaskClose}
				></div>
				<div className={classes("x-modal")}>
					<header className={classes("x-modal-header")}>
						<div className={classes("x-modal-header-content")}>
							{props.title}
						</div>
						<div
							className={classes("x-modal-icon-wrapper")}
							onClick={props.onClose}
						>
							<Icon name="close" className={classes("x-modal-icon")}></Icon>
						</div>
					</header>
					<main className={classes("x-modal-main")}>{props.children}</main>
					<footer className={classes("x-modal-footer")}>
						<Button
							className={classes("x-modal-footer-button")}
							onClick={props.onClose}
						>
							取消
						</Button>
						<Button type="primary" onClick={props.onConfirm}>
							确定
						</Button>
					</footer>
				</div>
			</Fragment>
		) : null;
	return ReactDOM.createPortal(portal, document.body);
};

Modal.defaultProps = {
	onClickMaskClose: false,
	title: "对话框",
};

export default Modal;
