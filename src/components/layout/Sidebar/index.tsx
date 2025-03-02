import { LayoutDashboard, ListTodo, Settings, HelpCircle, LogOut } from 'lucide-react';
import { SidebarWrapper, UserProfile, UserName, UserEmail, NavItem, LogoutButton } from './styles';
import { useAuth0 } from '@auth0/auth0-react';
export const Sidebar = () => {
  const {user, logout} = useAuth0(); 
  const { name, picture, email } = user || {};
 return (
   <SidebarWrapper>
     <UserProfile>
       <img src={picture} alt="Profile" />
       <UserName>{name}</UserName>
       <UserEmail>{email}</UserEmail>
     </UserProfile>
     
     <NavItem to='/' ><LayoutDashboard size={20} /> Dashboard</NavItem>
     <NavItem to='/tasks'><ListTodo size={20} /> My Task</NavItem>
     <NavItem to='/settings'><Settings size={20} /> Settings</NavItem>
     <NavItem to='/help'><HelpCircle size={20} /> Help</NavItem>
     <LogoutButton onClick={() => {logout();}}><LogOut size={20} /> Logout</LogoutButton>
   </SidebarWrapper>
 );
};