import React, { useEffect, useState } from 'react';
import { users } from '../../types/user';
import { getUsers } from '../../api/getUsers';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const UserInfoPanel = () => {
  const [users, setUsers] = useState<users>();
  const thisUser = useSelector((state: RootState) => state.user);
  const [selected, setSelected] = useState('selected');
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      if (data.success) setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {users && (
        <select onChange={(e) => setSelected(e.target.value)}>
          <option value={'selected'}>Выбрать</option>
          {users.data.map((user) => (
            <option value={user.address} selected={selected === user.address}>
              {user.address}
            </option>
          ))}
        </select>
      )}
      {selected &&
        users &&
        users.data
          .filter((user) => user.address === selected)
          .map((user) => (
            <div style={{ marginBottom: 40 }}>
              <p>Address: {user.address}</p>
              {thisUser.data.role === 'owner' && (
                <p>Seed: {user.seedTokenAmount}</p>
              )}
              {(thisUser.data.role === 'owner' ||
                thisUser.data.role === 'private') && (
                <p>Private: {user.privateTokenAmount}</p>
              )}
              {(thisUser.data.role === 'owner' ||
                thisUser.data.role === 'public') && (
                <p>Public: {user.publicTokenAmount}</p>
              )}
            </div>
          ))}
    </div>
  );
};

export default UserInfoPanel;
