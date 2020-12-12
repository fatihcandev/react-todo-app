import React from 'react';

import { AppContext } from '../context';
import '../styles/layout.scss';

const Layout: React.FC = ({ children }) => {
  const { state } = React.useContext(AppContext);
  const { darkMode } = state;

  return (
    <main className="layout">
      <div className={`top-section ${darkMode && 'dark'}`} />
      <div className={`bottom-section ${darkMode && 'dark'}`} />
      <div className="container">{children}</div>
      <span className={`drag-drop-indicator ${darkMode && 'dark'}`}>
        Drag and drop to reorder list
      </span>
    </main>
  );
};

export default Layout;
