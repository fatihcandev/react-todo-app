import React from 'react';

import { AppContext } from '../context';

const useDarkMode = () => {
  const { state } = React.useContext(AppContext);
  const { darkMode } = state;
  const savedDarkMode = React.useMemo(() => {
    const darkModeFromStorage = localStorage.getItem('darkMode');
    return darkModeFromStorage === 'true';
  }, [darkMode]);

  return savedDarkMode;
};

export default useDarkMode;
