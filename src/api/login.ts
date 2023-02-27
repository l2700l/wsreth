import { user } from '../types/user';

export const login = async (address: string, password: string) => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/login', {
      method: 'POST',
      body: JSON.stringify({ address, password }),
    })
  ).json();
  return data as user;
};
