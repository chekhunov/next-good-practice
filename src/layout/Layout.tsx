import React, { FunctionComponent } from "react";
import cn from "classnames";

import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import withLayout from "../pages/index";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

const whitLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};

export default whitLayout;
