import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextProps } from "./types";
import { useAuth0 } from "@auth0/auth0-react";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = ()=> {
  const context = useContext(AuthContext);
  if(!context) throw new Error ('useAuth must be used within AuthProvider');
  return context;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth0 = useAuth0();
  const [error, setError] = useState<Error | null>(null);

  const handleLogout = async () => {
    try {
      await auth0.logout({ logoutParams: { returnTo: window.location.origin } });
    } catch (err) {
      setError(err as Error);
    }
  };

  const getAccessToken = async () => {
    try {
      return await auth0.getAccessTokenSilently();
    } catch (err) {
      setError(err as Error);
      throw err;
    }
  };

  useEffect(() => {
    setError(auth0.error || null);
  }, [auth0.error]);

  const value: AuthContextProps = {
    isAuthenticated:auth0.isAuthenticated,
    user: auth0.user,
    loading: auth0.isLoading,
    error,
    loginWithRedirect: auth0.loginWithRedirect,
    logout: handleLogout,
    getAccessToken
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
