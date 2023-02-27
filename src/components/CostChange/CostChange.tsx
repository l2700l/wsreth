import React, { useState } from 'react';
import { changeCost } from '../../api/changeCost';

const CostChange = () => {
  const [cost, setCost] = useState('0');
  const [error, setError] = useState<string>();
  const change = async () => {
    const data = await changeCost(+cost);
    if (!data.success) {
      setError('Не получилось установить стоимость: ' + data.error);
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <label>
        Новая стоимость:
        <input value={cost} onChange={(e) => setCost(e.target.value)} />
      </label>
      <button onClick={change}>Установить</button>
    </div>
  );
};

export default CostChange;
