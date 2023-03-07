import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';
import App from './App';
import { Store, Persistor } from './Reducers/Store';
import './assets/styles.css';

const container = document.getElementById('root');
const root = createRoot(container);
const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <ThemeProvider theme={darkTheme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
