import React, {useState, useCallback, useEffect} from 'react';
import { AuthService } from '../services/API/AuthService';

const storageName = 'remedial-app-global-user';

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [ready, setReady] = useState<boolean>(false);
  const [userId, setUserId] = useState<number | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  const login = useCallback((jwtToken: string, id: number, name: string) => {
    setToken(jwtToken);
    setUserId(id);
    setUserName(name);
    console.log('LOGIN');

    localStorage.setItem(storageName, JSON.stringify({
      userId: id, userName: name, token: jwtToken
    }));
  }, [])

  const logout = useCallback(async () => {
    console.log('!!')
    setToken(null);
    setUserId(null);
    setUserName(null);
    localStorage.removeItem(storageName);
    const res = await AuthService.logout();
    console.log('LOGOUT', res);
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName)!);
    console.log('USE AUTH', data);
    // debugger;

    if (data && data.token) {
      login(data.token, data.userId, data.userName);
    }
    setReady(true);
  }, [login]);


  return { login, logout, token, userId, userName, ready }
}