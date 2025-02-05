import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { LayoutWrapper, SidebarArea, HeaderArea, ContentArea } from './styles';

export const Layout = () => {
 const location = useLocation();
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
     <SidebarArea>
       <Sidebar />
     </SidebarArea>
     <HeaderArea>
       <Header title={getPageTitle()} />
     </HeaderArea>
     <ContentArea>
       <Outlet />
     </ContentArea>
   </LayoutWrapper>
 );
};