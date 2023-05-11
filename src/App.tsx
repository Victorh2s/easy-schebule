import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global-style'
import { SideBarProvider } from './context/SideBarContext'
import { Router } from './Router'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <SideBarProvider>
          <GlobalStyle /> 
          <Router />
        </SideBarProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
