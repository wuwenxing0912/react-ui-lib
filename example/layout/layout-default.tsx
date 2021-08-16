import React from "react";
import Example from "../utils/example";
import Layout, { Content, Footer, Header } from "../../lib/layout/layout";

const layoutDefault = `import Layout, { Content, Header, Footer } from "./layout";
<Layout>
  <Header>Header</Header>
  <Content>Content</Content>
  <Footer>Footer</Footer>
</Layout>`;

const LayoutDefault = () => {
  return (
    <Example
      title="组件和代码示例"
      description="Layout 基本用法。Content、Header、Footer 和 Aside 需放在 Layout 里，Layout 也可放入 Layout 里。"
      code={layoutDefault}
    >
      <Layout className="layout-home">
        <Header className="layout-home-header">Header</Header>
        <Content className="layout-home-content">Content</Content>
        <Footer className="layout-home-footer">Footer</Footer>
      </Layout>
    </Example>
  );
};

export default LayoutDefault;
