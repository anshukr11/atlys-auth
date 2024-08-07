import { useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const signUp = () => {
    setIsAuthenticated(true);
  };

  return {
    isAuthenticated,
    login,
    logout,
    signUp
  };
};

export default useAuth;