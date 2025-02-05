export interface SidebarProps {
    onNavClick?: (route: string) => void;
  }

  export  interface NavItemProps {
    children: React.ReactNode;
    onClick?: () => void;
  }