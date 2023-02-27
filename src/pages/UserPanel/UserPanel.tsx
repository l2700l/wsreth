import React, { useState } from 'react';
import Transfer from '../../components/Transfer/Transfer';
import Approve from '../../components/Approve/Approve';
import Buy from '../../components/Buy/Buy';
import Whitelist from '../../components/Whitelist/Whitelist';
import TransferFrom from '../../components/TransferFrom/TransferFrom';

const UserPanel = () => {
  const [selected, setSelected] = useState('selected');
  const getElement = () => {
    if (selected !== 'selected') {
      switch (selected) {
        case 'transfer': {
          return <Transfer />;
        }
        case 'approve': {
          return <Approve />;
        }
        case 'whitelist': {
          return <Whitelist />;
        }
        case 'buy': {
          return <Buy />;
        }
        case 'another': {
          return <TransferFrom />;
        }
        default: {
          return <></>;
        }
      }
    }
    return <></>;
  };
  return (
    <div>
      <a href={'#'} style={{ marginBottom: 20 }}>
        Вернуться
      </a>
      <br />
      <br />
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value={'selected'}>Выбрать</option>
        <option value={'transfer'}>Передача токенов</option>
        <option value={'approve'}>Выдача прав распоряжение</option>
        <option value={'another'}>Управление токенами</option>
        <option value={'whitelist'}>Заявки в whitelist</option>
        <option value={'buy'}>Покупка токенов</option>
      </select>
      <br />
      {getElement()}
    </div>
  );
};

export default UserPanel;
