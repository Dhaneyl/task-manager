import React from "react";

  export  interface NavItemProps {
    children: React.ReactNode;
    onClick?: () => void;
  }
  export interface UserProfileProps {
    name: string;
    email: string;
    image?: string;
   }

   export interface LogoutButtonProps {
    children: React.ReactNode;
    onClick: () => void;
  }
  