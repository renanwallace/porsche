import React from 'react';
import {ThemeProvider} from 'styled-components';
import Login from './pages/Login';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </>
  );
};

export default App;
