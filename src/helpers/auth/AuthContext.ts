import {createContext} from 'react';

function noop() {}

interface AuthContextType {
  token: string | null,
  userId: number | null,
  userName: string | null,
  login: (jwtToken: string, id: number, name: string) => void,
  logout: () => void,
  isAuthenticated: boolean,
}

export const AuthContext = createContext({
    token: null,
    userId: null,
    userName: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
} as AuthContextType);