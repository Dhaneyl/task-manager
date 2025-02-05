import { LayoutDashboard, CheckCircle2, Settings, HelpCircle, LogOut } from 'lucide-react';
import { SidebarWrapper, Logo, NavItem } from './styles';
import { SidebarProps } from './types';

export const Sidebar = ({ onNavClick }: SidebarProps) => (
  <SidebarWrapper>
    <Logo>TaskManager</Logo>
    <nav>
      <NavItem onClick={() => onNavClick?.('dashboard')}>
        <LayoutDashboard size={20}/> Dashboard
      </NavItem>
      <NavItem><CheckCircle2 size={20} /> Tasks</NavItem>
      <NavItem><Settings size={20} /> Settings</NavItem>
      <NavItem><HelpCircle size={20} /> Help</NavItem>
      <NavItem><LogOut size={20} /> Logout</NavItem>
    </nav>
  </SidebarWrapper>
);

export default Sidebar;