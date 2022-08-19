import React from 'react';
import Header from './Header/Header';

type Props = {
  children?: React.ReactNode
};

const Layout: React.FC = ({ children }: Props) => (
    <>
      <Header />
      <main>{children}</main>
    </>
  );

export default Layout;
