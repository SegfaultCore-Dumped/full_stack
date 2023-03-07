import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';

const theme = createTheme({
  palette: {
    mode: 'dark',
    neutral: {
      main: '#303030',
    },
  },
});
function App() {
  const { isLogged } = useSelector((state) => state.authReducer);

  console.log(isLogged);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {isLogged && (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </>
        )}

        {!isLogged && (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </>
        )}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
