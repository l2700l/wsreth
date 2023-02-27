import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  updatePhase,
  updateTime,
  updateUser,
} from '../../redux/slices/globalSlice';
import { getTime } from '../../api/getTime';
import { timeTravel } from '../../api/timeTravel';
import {
  OwnerPanelPage,
  PrivatePanelPage,
  PublicPanelPage,
  UserPanelPage,
} from '../../routes';
import { getPhase } from '../../api/getPhase';

const HeaderElement = () => {
  const balance = useSelector((state: RootState) => state.balance);
  const user = useSelector((state: RootState) => state.user);
  const phase = useSelector((state: RootState) => state.phase);
  const time = useSelector((state: RootState) => state.time);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(async () => {
      const timer = await getTime();
      dispatch(updateTime(timer));
      const phaser = await getPhase();
      dispatch(updatePhase(phaser));
    }, 60000);
    // dispatch(updateTime({ ...time, data: { time: 14 } }));
    return () => clearInterval(interval);
  }, []);
  const getButtons = () => {
    if (user?.data?.role) {
      switch (user.data.role) {
        case 'owner': {
          return (
            <>
              <a href={'#' + OwnerPanelPage}>Панель Владельца системы</a>
              <a href={'#' + UserPanelPage}>Панель пользователя</a>
            </>
          );
        }
        case 'public': {
          return (
            <>
              <a href={'#' + PublicPanelPage}>Панель Public provider</a>
              <a href={'#' + UserPanelPage}>Панель пользователя</a>
            </>
          );
        }
        case 'private': {
          return (
            <>
              <a href={'#' + PrivatePanelPage}>Панель Private provider</a>
              <a href={'#' + UserPanelPage}>Панель пользователя</a>
            </>
          );
        }
        default: {
          return (
            <>
              <a href={'#' + UserPanelPage}>Панель пользователя</a>
            </>
          );
        }
      }
    }
  };
  const spreedTime = async () => {
    await timeTravel();
    const timer = await getTime();
    dispatch(updateTime(timer));
    const phaser = await getPhase();
    dispatch(updatePhase(phaser));
  };
  const unlogin = async () => {
    dispatch(updateUser({}));
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <p>Роль: {user.data.role}</p>
        <p style={{ marginRight: 10 }}>Адрес: {user.address}</p>
        <p>CMON баланс: {balance?.data?.tokenBalance}</p>
        <p style={{ marginRight: 10 }}>
          ETH баланс: {balance?.data?.ethBalance.slice(0, 18)}.
          {balance?.data?.ethBalance.slice(18)}
        </p>
        <p>Фаза: {phase?.data?.phase}</p>
        <p>Время жизни: {time?.data?.systemTime}</p>
        {time?.data?.systemTime > 5 && (
          <p>Время приватной фазы: {time.data.systemTime - 5}</p>
        )}
        {time?.data?.systemTime > 10 && (
          <p>Время публичной фазы: {time.data.systemTime - 10}</p>
        )}
        {user?.data?.role !== 'user' && (
          <button onClick={spreedTime}>Перемотать время</button>
        )}
        <button onClick={unlogin}>Выйти</button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        {getButtons()}
      </div>
    </>
  );
};

export default HeaderElement;
