import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LogoutButtonProps } from './types';

export const SidebarWrapper = styled.aside`
  background: ${props => props.theme.colors.primary};
  width: 250px;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
   grid-area: sidebar;
`;

export const UserProfile = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
`;

export const UserName = styled.h3`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
`;

export const UserEmail = styled.p`
  color: rgba(255,255,255,0.8);
  font-size: 0.875rem;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  color: white;
  opacity: 0.8;
  margin-bottom: 0.5rem;
  cursor: pointer;
  text-decoration:none;
  
  &:hover, &.active{
  opacity: 1;
  background: rgba(255,255,255,0.1);
  border-radius: 0.5rem;
  }
 
`;
export const LogoutButton = styled.div<LogoutButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  color: white;
  cursor: pointer;
  margin-top: auto;
  
  &:hover {
    background: rgba(255,255,255,0.1);
    border-radius: 0.375rem;
  }
`;