import React, { useState } from 'react';
import UserInfoPanel from '../../components/UserInfoPanel/UserInfoPanel';
import WhitelistInfo from '../../components/Whitelist/WhitelistInfo';

const PrivatePanel = () => {
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
        <option value={'whitelist'}>Информация о whitelist</option>
      </select>
      {selected === 'info' && <UserInfoPanel />}
      {selected === 'whitelist' && <WhitelistInfo />}
    </div>
  );
};

export default PrivatePanel;
