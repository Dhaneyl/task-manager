import styled from 'styled-components';
import { NavItemProps } from './types';

export const SidebarWrapper = styled.aside`
 background: ${props => props.theme.colors.gray900};
 color: ${props => props.theme.colors.surface};
 padding: 1.5rem;
`;

export const Logo = styled.div`
 font-size: 1.5rem;
 margin-bottom: 2rem;
`;

export const NavItem = styled.div<NavItemProps>`
 display: flex;
 align-items: center;
 gap: 0.75rem;
 padding: 0.75rem;
 color: ${props => props.theme.colors.gray300};
 cursor: pointer;
 
 &:hover {
   background: rgba(255,255,255,0.1);
   border-radius: 0.375rem;
 }
`;