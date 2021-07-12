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
	content?: string | ReactNode;
	cancelText?: string;
	confirmText?: string;
	cancelButtonType?: "default" | "primary" | "dashed" | "danger";
	confirmButtonType?: "default" | "primary" | "dashed" | "danger";
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
	const portal = props.visible ? (
		<Fragment>
			<div className={classes("x-modal-mask")} onClick={onClickMaskClose}></div>
			<div className={classes("x-modal")}>
				<header className={classes("x-modal-header")}>
					<div className={classes("x-modal-header-content")}>{props.title}</div>
					<div
						className={classes("x-modal-icon-wrapper")}
						onClick={props.onClose}
					>
						<Icon name="close" className={classes("x-modal-icon")}></Icon>
					</div>
				</header>
				<main className={classes("x-modal-main")}>{props.content}</main>
				<footer className={classes("x-modal-footer")}>
					<Button
						type={props.cancelButtonType}
						className={classes("x-modal-footer-button")}
						onClick={props.onClose}
					>
						{props.cancelText}
					</Button>
					<Button type={props.confirmButtonType} onClick={props.onConfirm}>
						{props.confirmText}
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
	cancelText: "取消",
	confirmText: "确定",
	cancelButtonType: "default",
	confirmButtonType: "primary",
};

export default Modal;
