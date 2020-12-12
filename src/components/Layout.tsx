import React from 'react';

import { AppContext } from '../context';
import styles from '../styles/layout.module.scss';

const Layout: React.FC = ({ children }) => {
  const { state } = React.useContext(AppContext);
  const { darkMode } = state;

  return (
    <main className={styles.mainContainer}>
      <div className={`${styles.topSection} ${darkMode && styles.dark}`} />
      <div className={`${styles.bottomSection} ${darkMode && styles.dark}`} />
      <div className={styles.innerContainer}>{children}</div>
      <span className={`${styles.dragDropIndicator} ${darkMode && styles.dark}`}>
        Drag and drop to reorder list
      </span>
    </main>
  );
};

export default Layout;
