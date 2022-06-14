import React from 'react';
import Nav from "../Nav";
import Footer from "../Footer";

import styles from './Layout.module.css'

const Layout = ({children}: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;