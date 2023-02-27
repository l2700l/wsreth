import { requests } from '../types/requests';

export const getRequests = async () => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/requests', {
      method: 'GET',
    })
  ).json();
  return data as requests;
};
