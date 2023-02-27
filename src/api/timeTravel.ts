export const timeTravel = async () => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/timeTravel', {
      method: 'POST',
    })
  ).json();
};
