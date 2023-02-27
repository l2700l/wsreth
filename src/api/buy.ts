import { base } from '../types/base';

export const buyF = async (address: string, amount: number) => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/buy', {
      method: 'POST',
      body: JSON.stringify({ address, amount }),
    })
  ).json();
  return data as base;
};
