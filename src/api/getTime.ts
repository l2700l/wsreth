import { time } from '../types/time';

export const getTime = async () => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/time', {
      method: 'GET',
    })
  ).json();
  return data as time;
};
