import React from 'react';
import UserInfoPanel from '../../components/UserInfoPanel/UserInfoPanel';

const OwnerPanel = () => {
  return (
    <div>
      <a href={'#'} style={{ marginBottom: 20 }}>
        Вернуться
      </a>
      <br />
      <br />
      <UserInfoPanel />
    </div>
  );
};

export default OwnerPanel;
