import { base } from '../types/base';

export const approveF = async (address: string, to: string, amount: number) => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/approve', {
      method: 'POST',
      body: JSON.stringify({ address, to, amount }),
    })
  ).json();
  return data as base;
};
