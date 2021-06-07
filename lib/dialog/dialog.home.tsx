import React, { useState } from "react";
import Dialog from "./dialog";

const DialogHome: React.FunctionComponent = () => {
	const [visible, setVisible] = useState(false);
	return (
		<div>
			<button onClick={() => setVisible(!visible)}>click</button>
			<Dialog
				visible={visible}
				buttons={[
					<button onClick={() => setVisible(!visible)}>取消</button>,
					<button onClick={() => setVisible(!visible)}>确定</button>,
				]}
				onClose={() => setVisible(!visible)}
				onClickMaskClose={true}
			>
				<div>弹出框</div>
			</Dialog>
		</div>
	);
};

export default DialogHome;
