import React from 'react';
import Header from './Header/Header';

type LayoutProps = {
  children?: React.ReactNode,
};

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => (
    <>
      <Header />
      <main>{children}</main>
    </>
  );

export default Layout;
