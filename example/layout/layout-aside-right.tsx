import React from "react";
import Example from "../utils/example";
import Layout, {
  Aside,
  Content,
  Footer,
  Header,
} from "../../lib/layout/layout";

const layoutAsideRight = `import { Layout, Content, Header, Footer, Aside } from "lib-x-ui";
<Layout>
  <Header>Header</Header>
  <Layout>
    <Content>Content</Content>
    <Aside>Aside</Aside>
  </Layout>
  <Footer>Footer</Footer>
</Layout>`;

const LayoutAsideRight = () => {
  return (
    <Example description="Aside 侧边栏在右侧。" code={layoutAsideRight}>
      <Layout className="layout-home">
        <Header className="layout-home-header">Header</Header>
        <Layout className="layout-home-flex-direction">
          <Content className="layout-home-content">Content</Content>
          <Aside className="layout-home-aside  aside-inner">Aside</Aside>
        </Layout>
        <Footer className="layout-home-footer">Footer</Footer>
      </Layout>
    </Example>
  );
};

export default LayoutAsideRight;
