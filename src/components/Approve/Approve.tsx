import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { approveF } from '../../api/approve';
import { getBalance } from '../../api/getBalance';
import { updateBalance } from '../../redux/slices/globalSlice';

const Approve = () => {
  const user = useSelector((state: RootState) => state.user);
  const [address, setAddress] = useState('');
  const [count, setCount] = useState('0');
  const [error, setError] = useState<string>();
  const dispatch = useDispatch();
  const btnHandler = async () => {
    const data = await approveF(user.address, address, +count);
    if (!data.success) {
      setError('Не получилось подтвердить: ' + data.error);
      return;
    }
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
      <button onClick={btnHandler}>Подтвердить</button>
    </div>
  );
};

export default Approve;
