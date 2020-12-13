import React from 'react';

import { AppContext } from '../context';

const useDarkMode = () => {
  const [savedDarkMode, setSavedDarkMode] = React.useState<boolean>(
    Boolean(localStorage.getItem('darkMode')),
  );
  const { state } = React.useContext(AppContext);
  const { darkMode } = state;

  React.useEffect(() => {
    setSavedDarkMode(Boolean(localStorage.getItem('darkMode')));
  }, [darkMode]);

  return savedDarkMode;
};

export default useDarkMode;
