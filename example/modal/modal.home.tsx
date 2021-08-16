import React, { Fragment } from "react";
import ModalDefault from "./modal-default";
import ModalMask from "./modal-mask";

const ModalHome: React.FunctionComponent = () => {
  return (
    <Fragment>
      <ModalDefault />
      <ModalMask />
      <section>
        <h1>API</h1>
        <table className="api-table" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th className="api-table-head">API</th>
              <th className="api-table-head">说明</th>
              <th className="api-table-head">类型</th>
              <th className="api-table-head">是否可选</th>
              <th className="api-table-head">默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="api">visible</td>
              <td className="api-description">Modal 是否可见</td>
              <td className="api-type">boolean</td>
              <td className="api-nesscery">否</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">onClose</td>
              <td className="api-description">关闭 Modal 回调函数</td>
              <td className="api-type">React.MouseEventHandler</td>
              <td className="api-nesscery">否</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">onConfirm</td>
              <td className="api-description">确定 Modal 回调函数</td>
              <td className="api-type">React.MouseEventHandler</td>
              <td className="api-nesscery">否</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">onClickMaskClose</td>
              <td className="api-description">是否点击遮罩层关闭 Modal</td>
              <td className="api-type">boolean</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">false</td>
            </tr>
            <tr>
              <td className="api">title</td>
              <td className="api-description">Modal 标题</td>
              <td className="api-type">string | ReactNode</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">"对话框"</td>
            </tr>
            <tr>
              <td className="api">content</td>
              <td className="api-description">Modal 内容</td>
              <td className="api-type">string | ReactNode</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">cancelText</td>
              <td className="api-description">Modal 取消按钮 内容</td>
              <td className="api-type">string</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">取消</td>
            </tr>
            <tr>
              <td className="api">confirmText</td>
              <td className="api-description">Modal 确定按钮 内容</td>
              <td className="api-type">string</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">确定</td>
            </tr>
            <tr>
              <td className="api">cancelButtonType</td>
              <td className="api-description">Modal 取消按钮 类型</td>
              <td className="api-type">
                "default" | "primary" | "dashed" | "danger"
              </td>
              <td className="api-nesscery">是</td>
              <td className="api-default">default</td>
            </tr>
            <tr>
              <td className="api">confirmButtonType</td>
              <td className="api-description">Modal 确定按钮 类型</td>
              <td className="api-type">
                "default" | "primary" | "dashed" | "danger"
              </td>
              <td className="api-nesscery">是</td>
              <td className="api-default">primary</td>
            </tr>
            <tr>
              <td className="api">className</td>
              <td className="api-description">自定义 Modal 类名</td>
              <td className="api-type">string</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">style</td>
              <td className="api-description">自定义 Modal外层容器 样式</td>
              <td className="api-type">React.CSSProperties</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Fragment>
  );
};

export default ModalHome;
