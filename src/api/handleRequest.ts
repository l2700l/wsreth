export const handleRequest = async (address: string, isAccept: boolean) => {
  const data = await fetch(process.env.REACT_APP_API_URL + '/handleRequest', {
    method: 'POST',
    body: JSON.stringify({ address, isAccept }),
  });
  return data.ok;
};
