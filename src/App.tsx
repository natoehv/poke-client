import React from 'react';
import Listing from './components/organism/Listing';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff5000',
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="app">
      <header className="app__header">
      </header>
      <Listing />
    </div>
    </ThemeProvider>
  );
}

export default App;
