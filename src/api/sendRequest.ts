export const sendRequest = async (address: string, name: string) => {
  const data = await fetch(process.env.REACT_APP_API_URL + '/sendRequest', {
    method: 'POST',
    body: JSON.stringify({ address, name }),
  });
  return data.ok;
};
