import React from "react";
import Example from "../utils/example";
import Layout, {
  Aside,
  Content,
  Footer,
  Header,
} from "../../lib/layout/layout";

const layoutAsideLeft = `import { Layout, Content, Header, Footer, Aside } from "lib-x-ui";
<Layout>
  <Header>Header</Header>
  <Layout>
    <Aside>Aside</Aside>
    <Content>Content</Content>
  </Layout>
  <Footer>Footer</Footer>
</Layout>`;

const LayoutAsideLeft = () => {
  return (
    <Example description="Aside 侧边栏在左侧。" code={layoutAsideLeft}>
      <Layout className="layout-home">
        <Header className="layout-home-header">Header</Header>
        <Layout className="layout-home-flex-direction">
          <Aside className="layout-home-aside aside-inner">Aside</Aside>
          <Content className="layout-home-content">Content</Content>
        </Layout>
        <Footer className="layout-home-footer">Footer</Footer>
      </Layout>
    </Example>
  );
};

export default LayoutAsideLeft;
