import { users } from '../types/user';

export const getUsers = async () => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/users', {
      method: 'GET',
    })
  ).json();
  return data as users;
};
