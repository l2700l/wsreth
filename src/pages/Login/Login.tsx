import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../api/login';
import {
  updateBalance,
  updatePhase,
  updateTime,
  updateUser,
} from '../../redux/slices/globalSlice';
import { getBalance } from '../../api/getBalance';
import { getPhase } from '../../api/getPhase';
import { getTime } from '../../api/getTime';

const Login = () => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const auth = async () => {
    const user = await login(address, password);
    if (user.success) {
      const balance = await getBalance(address);
      const phase = await getPhase();
      const time = await getTime();
      dispatch(updateTime(time));
      dispatch(updatePhase(phase));
      dispatch(updateBalance(balance));
      dispatch(updateUser({ ...user, address }));
    }
  };
  return (
    <div>
      <label>
        Адрес:
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <label>
        Пароль:
        <input
          type={'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={auth}>Войти</button>
    </div>
  );
};

export default Login;
