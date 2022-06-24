import React from "react";
import {authProvider} from "../utils/auth";

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({children}: { children: React.ReactNode }) {
  const authUser = window.localStorage.getItem('authUser')
  let [user, setUser] = React.useState<string | null>(authUser);

  let signin = (newUser: string, callback: VoidFunction) => {
    return authProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return authProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = {user, signin, signout};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


function useAuth() {
  return React.useContext(AuthContext);
}

export {useAuth, AuthProvider, AuthContext}
