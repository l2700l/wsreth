import React, { useState } from 'react';
import UserInfoPanel from '../../components/UserInfoPanel/UserInfoPanel';
import Transfer from '../../components/Transfer/Transfer';
import CostChange from '../../components/CostChange/CostChange';

const PublicPanel = () => {
  const [selected, setSelected] = useState('selected');
  return (
    <div>
      <a href={'#'} style={{ marginBottom: 20 }}>
        Вернуться
      </a>
      <br />
      <br />
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value={'selected'}>Выбрать</option>
        <option value={'info'}>Информация о пользователях</option>
        <option value={'reward'}>Выдача награждений</option>
        <option value={'change'}>Изменение стоимости токена</option>
      </select>
      {selected === 'info' && <UserInfoPanel />}
      {selected === 'reward' && <Transfer />}
      {selected === 'change' && <CostChange />}
    </div>
  );
};

export default PublicPanel;
