import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { buyF } from '../../api/buy';
import { getBalance } from '../../api/getBalance';
import { updateBalance } from '../../redux/slices/globalSlice';

const Buy = () => {
  const user = useSelector((state: RootState) => state.user);
  const [count, setCount] = useState('0');
  const [error, setError] = useState<string>();
  const dispatch = useDispatch();

  const btnHandler = async () => {
    const data = await buyF(user.address, +count);
    if (!data.success) setError('Не получилось подтвердить: ' + data.error);
    const balance = await getBalance(user.address);
    dispatch(updateBalance(balance));
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <label>
        Количество:
        <input value={count} onChange={(e) => setCount(e.target.value)} />
      </label>
      <button onClick={btnHandler}>Подтвердить</button>
    </div>
  );
};

export default Buy;
