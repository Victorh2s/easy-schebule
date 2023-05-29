import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global-style';
import { SideBarProvider } from './context/SideBarContext';
import { Router } from './Router';
import { AuthProvider } from './context/AuthContext';
import { ModalProvider } from './context/ModalContext';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AuthProvider>
          <SideBarProvider>
            <ModalProvider>
              <ToastContainer />
              <GlobalStyle />
              <Router />
            </ModalProvider>
          </SideBarProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
