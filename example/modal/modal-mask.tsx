import React, { useState } from "react";
import Example from "../utils/example";
import Button from "../../lib/button/button";
import Modal from "../../lib/modal/modal";

const modalMask = `import Modal from "./modal";
const [modalVisible, setModalVisible] = useState(false);
<Modal
  visible={modalVisible}
  onClose={() => setModalVisible(!modalVisible)}
  onConfirm={() => setModalVisible(!modalVisible)}
  onClickMaskClose={true}
/>`;

const ModalMask = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Example description="点击遮罩层关闭 Modal。" code={modalMask}>
      <Button type="primary" onClick={() => setModalVisible(!modalVisible)}>
        open Modal
      </Button>
      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
        onConfirm={() => setModalVisible(!modalVisible)}
        onClickMaskClose={true}
        content={
          <div>
            <div>more content...</div>
            <div>more content...</div>
            <div>more content...</div>
          </div>
        }
      />
    </Example>
  );
};

export default ModalMask;
