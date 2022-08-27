import React from 'react';
import Header from './Header/Header';

type Props = {
  children?: React.ReactNode,
};

const Layout: React.FC<Props> = ({ children }): JSX.Element => (
    <>
      <Header />
      <main>{children}</main>
    </>
  );

export default Layout;
