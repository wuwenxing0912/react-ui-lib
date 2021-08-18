import React, { useState } from "react";
import Example from "../utils/example";
import Button from "../../lib/button/button";
import Modal from "../../lib/modal/modal";

const modalDefault = `import { Modal } from "lib-x-ui";
const [modalVisible, setModalVisible] = useState(false);
<Button type="primary" onClick={() => setModalVisible(!modalVisible)}>
  open Modal
</Button>
<Modal
  visible={modalVisible}
  onClose={() => setModalVisible(!modalVisible)}
  onConfirm={() => setModalVisible(!modalVisible)}
/>`;

const ModalDefault = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Example
      title="组件和代码示例"
      description="对话框的基本用法。"
      code={modalDefault}
    >
      <Button type="primary" onClick={() => setModalVisible(!modalVisible)}>
        open Modal
      </Button>
      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
        onConfirm={() => setModalVisible(!modalVisible)}
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

export default ModalDefault;
