import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, ListTodo, Settings, HelpCircle, LogOut } from 'lucide-react';
import { SidebarWrapper, UserProfile, UserName, UserEmail, NavItem } from './styles';

export const Sidebar = () => {
 const navigate = useNavigate();
 
 return (
   <SidebarWrapper>
     <UserProfile>
       <img src="https://i.pravatar.cc/300" alt="Profile" />
       <UserName>Sundar Gurung</UserName>
       <UserEmail>sundargurung360@gmail.com</UserEmail>
     </UserProfile>
     
     <NavItem to='/' ><LayoutDashboard size={20} /> Dashboard</NavItem>
     <NavItem to='/tasks'><ListTodo size={20} /> My Task</NavItem>
     <NavItem to='/settings'><Settings size={20} /> Settings</NavItem>
     <NavItem to='/help'><HelpCircle size={20} /> Help</NavItem>
     <NavItem to='/logout'><LogOut size={20} /> Logout</NavItem>
   </SidebarWrapper>
 );
};