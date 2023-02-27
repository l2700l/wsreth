import { base } from '../types/base';

export const changeCost = async (newValue: number) => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/changeCost', {
      method: 'POST',
      body: JSON.stringify({ newValue }),
    })
  ).json();
  return data as base;
};
