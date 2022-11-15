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

// export interface IUSer {
//   id: number;
//   login: string;
//   first_name: string;
//   last_name: string;
//   email: string;
//   address: string;
//   phone: string;
// }

const user = {
  id: 1,
  name: 'Pablo Ferreira',
  email: 'admin@adegas.com.br',
  first_name: 'Pablo',
  last_name: 'Ferreira',
  address: 'Rua das cervejas geladas nº 10',
  phone: '55 (11) 9 1234-5678',
};

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
