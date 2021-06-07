import { componentClassMaker } from "../helpers/classes";
import React, { Fragment, ReactElement } from "react";
import { Icon } from "../index";
import "./dialog.scss";
import ReactDOM from "react-dom";

interface Props {
	visible: boolean;
	buttons: Array<ReactElement>;
	onClose: React.MouseEventHandler;
	onClickMaskClose?: boolean;
}

const cc = componentClassMaker("x-dialog");

const Dialog: React.FunctionComponent<Props> = (props) => {
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
			<div className={cc("mask")} onClick={onClickMaskClose}></div>
			<div className={cc()}>
				<div className={cc("close")} onClick={onClickClose}>
					<Icon name="close" />
				</div>
				<header className={cc("header")}>提示</header>
				<main className={cc("main")}>{props.children}</main>
				<footer className={cc("footer")}>
					{props.buttons.map((button, index) =>
						React.cloneElement(button, { key: index })
					)}
				</footer>
			</div>
		</Fragment>
	) : null;
	return ReactDOM.createPortal(portal, document.body);
};

Dialog.defaultProps = {
	onClickMaskClose: false,
};

export default Dialog;
