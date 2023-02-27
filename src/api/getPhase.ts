import { phase } from '../types/phase';

export const getPhase = async () => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/phase', {
      method: 'GET',
    })
  ).json();
  return data as phase;
};
