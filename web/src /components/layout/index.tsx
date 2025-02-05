import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { LayoutWrapper, MainContent } from './styles';

export const Layout = () => (
  <LayoutWrapper>
    <Sidebar />
    <MainContent>
    <Outlet />
    </MainContent>
  </LayoutWrapper>
);