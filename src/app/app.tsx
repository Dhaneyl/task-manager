
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import {Layout} from '../components/layout/index'
import { Dashboard } from '../pages/Dashboard';
import { Tasks } from '../pages/Tasks';
import { Settings } from '../pages/Settings';
import Login from "../app/auth/login";
import { ProtectedRoute } from "../components/protected-route"; 

export const App = () => (

  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
   
      <Routes>
     
      <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route index element={<Dashboard/>} />
          <Route path="tasks" element={<Tasks/>} />
          <Route path="Settings" element={<Settings/>} />
          <Route path="logout" element={<div>Logout</div>} />
          <Route path="help" element={<div>Help</div>} />
        </Route>
      
      <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  </ThemeProvider>
 );

export default App;
