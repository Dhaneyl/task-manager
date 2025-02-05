
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import {Layout} from '../components/layout/index'

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Dashboard</div>} />
          <Route path="tasks" element={<div>Tasks</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
 );

export default App;
