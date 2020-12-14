import React from 'react';

import { useDarkMode } from '../../utils';

import { EmptyState } from '../EmptyState';

import styles from './Layout.module.scss';

interface ILayoutProps {
  todoAmount: number;
}

const Layout: React.FC<ILayoutProps> = ({ todoAmount, children }) => {
  const darkMode = useDarkMode();

  return (
    <main className={styles.mainContainer}>
      <div className={`${styles.topSection} ${darkMode && styles.dark}`} />
      <div className={`${styles.bottomSection} ${darkMode && styles.dark}`}>
        {todoAmount === 0 && <EmptyState />}
      </div>
      <div className={styles.innerContainer}>{children}</div>
      <span className={`${styles.dragDropIndicator} ${darkMode && styles.dark}`}>
        Drag and drop to reorder list
      </span>
    </main>
  );
};

export default Layout;
