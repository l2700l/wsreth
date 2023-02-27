import { base } from '../types/base';

export const transfer = async (address: string, to: string, amount: number) => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/transfer', {
      method: 'POST',
      body: JSON.stringify({ address, to, amount }),
    })
  ).json();
  return data as base;
};
