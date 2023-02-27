import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Login from '../../pages/Login/Login';
import { Header } from '../Header';

const LoginProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const user = useSelector((state: RootState) => state.user);
  return <>{user?.data?.role ? <Header>{children}</Header> : <Login />}</>;
};

export default LoginProvider;
