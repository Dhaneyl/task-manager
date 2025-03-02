export interface AuthUser {
  email?: string;
  email_verified?: boolean;
  name?: string;
  picture?: string;
  sub?: string;
}

export interface AuthContextProps {
  isAuthenticated: boolean;
  user: AuthUser | undefined;
  loading: boolean;
  error: Error | null;
  loginWithRedirect: () => Promise<void>;
  logout: () => Promise<void>;
  getAccessToken: () => Promise<string | undefined>;
}
