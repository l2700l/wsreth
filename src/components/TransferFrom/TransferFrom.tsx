import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getBalance } from '../../api/getBalance';
import { updateBalance } from '../../redux/slices/globalSlice';
import { transferFrom } from '../../api/transferFrom';

const TransferFrom = () => {
  const user = useSelector((state: RootState) => state.user);
  const [address, setAddress] = useState('');
  const [to, setTo] = useState('');
  const [count, setCount] = useState('0');
  const [error, setError] = useState<string>();
  const dispatch = useDispatch();

  const btnHandler = async () => {
    const data = await transferFrom(address, to, +count);
    if (!data.success) setError('Не получилось передать: ' + data.error);
    const balance = await getBalance(user.address);
    dispatch(updateBalance(balance));
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <label>
        Откуда:
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <label>
        Куда:
        <input value={to} onChange={(e) => setTo(e.target.value)} />
      </label>
      <label>
        Количество:
        <input value={count} onChange={(e) => setCount(e.target.value)} />
      </label>
      <button onClick={btnHandler}>Передать</button>
    </div>
  );
};

export default TransferFrom;
