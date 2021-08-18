import React from "react";
import Example from "../utils/example";
import Layout, {
  Aside,
  Content,
  Footer,
  Header,
} from "../../lib/layout/layout";

const layoutAsideOut = `import { Layout, Content, Header, Footer, Aside } from "lib-x-ui";
<Layout>
  <Aside>Aside</Aside>
  <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
</Layout>`;

const LayoutAsideOut = () => {
  return (
    <Example description="Aside 侧边栏在外层左侧。" code={layoutAsideOut}>
      <Layout className="layout-home layout-home-flex-direction">
        <Aside className="layout-home-aside  aside-outer">Aside</Aside>
        <Layout>
          <Header className="layout-home-header">Header</Header>
          <Content className="layout-home-content">Content</Content>
          <Footer className="layout-home-footer">Footer</Footer>
        </Layout>
      </Layout>
    </Example>
  );
};

export default LayoutAsideOut;
