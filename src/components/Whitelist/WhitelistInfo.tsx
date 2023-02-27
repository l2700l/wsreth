import React, { useEffect, useState } from 'react';
import { request, requests } from '../../types/requests';
import { getRequests } from '../../api/getRequests';
import { handleRequest } from '../../api/handleRequest';

const WhitelistInfo = () => {
  const [requests, setRequests] = useState<requests>();
  const fetchData = async () => {
    const data = await getRequests();
    setRequests(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const btnHandler = async (request: request, isAccept: boolean) => {
    await handleRequest(request.address, isAccept);
    await fetchData();
  };
  return (
    <div>
      {requests && requests.data.length > 0 ? (
        requests.data.map((request) => (
          <div style={{ marginBottom: 20 }}>
            <p>Адрес: {request.address}</p>
            <p>Название: {request.name}</p>
            <button onClick={() => btnHandler(request, true)}>Принять</button>
            <button onClick={() => btnHandler(request, false)}>Отказать</button>
          </div>
        ))
      ) : (
        <p>Заявки отсутсвуют</p>
      )}
    </div>
  );
};

export default WhitelistInfo;
