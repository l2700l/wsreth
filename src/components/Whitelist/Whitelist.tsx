import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { sendRequest } from '../../api/sendRequest';
import { getBalance } from '../../api/getBalance';
import { updateBalance } from '../../redux/slices/globalSlice';

const Whitelist = () => {
  const user = useSelector((state: RootState) => state.user);
  const [address, setAddress] = useState('');
  const [error, setError] = useState<string>();
  const dispatch = useDispatch();

  const btnHandler = async () => {
    const data = await sendRequest(user.address, address);
    if (!data) setError('Не получилось подтвердить');
    const balance = await getBalance(user.address);
    dispatch(updateBalance(balance));
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <label>
        Адрес:
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <button onClick={btnHandler}>Отправить</button>
    </div>
  );
};

export default Whitelist;
