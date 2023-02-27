import React, { useState } from 'react';
import { transfer } from '../../api/transfer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getBalance } from '../../api/getBalance';
import { updateBalance } from '../../redux/slices/globalSlice';

const Transfer = () => {
  const user = useSelector((state: RootState) => state.user);
  const [address, setAddress] = useState('');
  const [count, setCount] = useState('0');
  const [error, setError] = useState<string>();
  const dispatch = useDispatch();

  const btnHandler = async () => {
    const data = await transfer(user.address, address, +count);
    if (!data.success) setError('Не получилось передать: ' + data.error);
    const balance = await getBalance(user.address);
    dispatch(updateBalance(balance));
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <label>
        Кому:
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <label>
        Количество:
        <input value={count} onChange={(e) => setCount(e.target.value)} />
      </label>
      <button onClick={btnHandler}>Передать</button>
    </div>
  );
};

export default Transfer;
