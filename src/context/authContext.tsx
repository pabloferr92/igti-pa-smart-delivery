import React, {
  useState,
  useContext,
  createContext,
  FC,
  useEffect,
} from 'react';
import ICart from '../interfaces/cart';
import { IUser } from '../interfaces/user';

interface AuthContext {
  user?: IUser;
  isLoggedIn?: Boolean;
  getLoginStatus: () => Boolean;
}

const defaultState = {
  user: { id: 0, name: 'sys admin', email: 'admin@adegas.com.br' },
  isLoggedIn: true,
  getLoginStatus: () => true,
};

const AuthContext = createContext<AuthContext>(defaultState);
export const useAuthContext = () => useContext(AuthContext);

const user = { id: 1, name: 'sys admin', email: 'admin@adegas.com.br' };

const AuthProvider: FC = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  const getLoginStatus = () => {
    return isLoggedIn;
  };

  return (
    <AuthContext.Provider
      value={{
        getLoginStatus,
        isLoggedIn,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
