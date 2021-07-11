import React, { Fragment } from "react";
import classes from "../helpers/classes";
import Icon from "../icon/icon";
import Button from "../button/button";
import "./modal.scss";
import ReactDOM from "react-dom";

interface Props {
	visible: boolean;
	onClose: React.MouseEventHandler;
	onClickMaskClose?: boolean;
}

const Modal: React.FunctionComponent<Props> = (props) => {
	const onClickClose: React.MouseEventHandler = (e) => {
		props.onClose(e);
	};
	const onClickMaskClose: React.MouseEventHandler = (e) => {
		if (props.onClickMaskClose) {
			props.onClose(e);
		}
	};
	const portal = props.visible ? (
		<Fragment>
			<div className={classes("x-modal-mask")} onClick={onClickMaskClose}></div>
			<div className={classes("x-modal")}>
				<header className={classes("x-modal-header")} onClick={onClickClose}>
					<div className={classes("x-modal-header-content")}>提示</div>
					<div className={classes("x-modal-icon-wrapper")}>
						<Icon name="close" className={classes("x-modal-icon")}></Icon>
					</div>
				</header>
				<main className={classes("x-modal-main")}>{props.children}</main>
				<footer className={classes("x-modal-footer")}>
					<Button className={classes("x-modal-footer-button")} onClick={props.onClose}>取消</Button>
					<Button type="primary" onClick={props.onClose}>确定</Button>
				</footer>
			</div>
		</Fragment>
	) : null;
	return ReactDOM.createPortal(portal, document.body);
};

Modal.defaultProps = {
	onClickMaskClose: false,
};

export default Modal;
