import { balance } from '../types/balance';

export const getBalance = async (address: string) => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/balance', {
      method: 'POST',
      body: JSON.stringify({ address }),
    })
  ).json();
  return data as balance;
};
