import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { LayoutWrapper, ContentArea, WelcomeMessage } from './styles';
import { useAuth0 } from '@auth0/auth0-react';

export const Layout = () => {
 const location = useLocation();
 const {user} = useAuth0()
 const getPageTitle = () => {
   switch(location.pathname) {
     case '/': return 'Dashboard';
     case '/tasks': return 'Tasks';
     case '/settings': return 'Settings';
     default: return 'Dashboard';
   }
 };

 return (
   <LayoutWrapper>
       <Sidebar />
       <Header title={getPageTitle()} />
     <ContentArea>
      <WelcomeMessage>Welcome back, {user?.name}👋</WelcomeMessage>
       <Outlet />
     </ContentArea>
   </LayoutWrapper>
 );
};