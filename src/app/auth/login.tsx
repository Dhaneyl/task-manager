
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { useAuth } from './auth.context';

export const Login: React.FC = () => {
  const { loginWithRedirect, error } = useAuth0();
  const location = useLocation();

  useEffect(() => {
    loginWithRedirect();
  }, [loginWithRedirect, location]);

  if (error) return <div>Login failed: {error.message}</div>;
  return <div>Loading</div>;
};
export default Login;
