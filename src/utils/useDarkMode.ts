import React from 'react';

import { AppContext } from '../context';

const useDarkMode = () => {
  const [savedDarkMode, setSavedDarkMode] = React.useState<boolean>(
    Boolean(localStorage.getItem('darkMode')),
  );
  const { state } = React.useContext(AppContext);
  const { darkMode } = state;

  React.useEffect(() => {
    console.log('dark mode from context', darkMode);
    console.log('dark mode from storage', Boolean(localStorage.getItem('darkMode')));
    console.log('change dark mode');
    setSavedDarkMode(Boolean(localStorage.getItem('darkMode')));
  }, [darkMode]);

  return savedDarkMode;
};

export default useDarkMode;
