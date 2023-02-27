import React from 'react';
import HeaderElement from './HeaderElement';

const HeaderProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div>
      <HeaderElement />
      <div style={{ marginTop: 10 }}>{children}</div>
    </div>
  );
};

export default HeaderProvider;
