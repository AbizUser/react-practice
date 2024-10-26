import {createContext, ReactNode, useContext, useState } from "react";

type User = {
  id: string;
  username: string;
  email: string;
};

interface AuthContextType {
  user: User | null;
  login: (userInfo: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProbider");
  }
  return context;
};

const AuthProvider = ({children}: { children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userInfo: User) => {
    if(
      userInfo.username === "testUser" && 
      userInfo.email === "testuser@mail.com"
    ) {
      setUser(userInfo);
    } else {
      console.log("cant logged in")
    }
  };
  const logout = ()  => {
    setUser(null);
  };

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider