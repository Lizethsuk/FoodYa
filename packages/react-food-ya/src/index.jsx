import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './context/themeContext';
import { UserProvider } from './context/userContext';
import { MenuManageProvider } from './context/menuManageContext';

ReactDOM.render(
  <React.StrictMode>
    <MenuManageProvider>
      <UserProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </UserProvider>
    </MenuManageProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
