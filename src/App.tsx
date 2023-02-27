import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginProvider from './components/LoginProvider/LoginProvider';
import Main from './pages/Main/Main';
import {
  OwnerPanelPage,
  PrivatePanelPage,
  PublicPanelPage,
  UserPanelPage,
} from './routes';
import OwnerPanel from './pages/OwnerPanel/OwnerPanel';
import PrivatePanel from './pages/PrivatePanel/PrivatePanel';
import PublicPanel from './pages/PublicPanel/PublicPanel';
import UserPanel from './pages/UserPanel/UserPanel';

function App() {
  const [page, setPage] = useState<JSX.Element>(<Main />);

  const updatePage = () => {
    const hash = window.location.href.split('#');
    if (hash.length > 1) {
      switch (hash[1]) {
        case OwnerPanelPage:
          setPage(<OwnerPanel />);
          break;
        case PrivatePanelPage:
          setPage(<PrivatePanel />);
          break;
        case PublicPanelPage:
          setPage(<PublicPanel />);
          break;
        case UserPanelPage:
          setPage(<UserPanel />);
          break;
        default:
          setPage(<Main />);
      }
    }
  };

  useEffect(() => {
    updatePage();
    window.addEventListener('hashchange', updatePage);
    return () => window.removeEventListener('hashchange', updatePage);
  }, []);

  return (
    <div className='App'>
      <LoginProvider>{page || <></>}</LoginProvider>
    </div>
  );
}

export default App;
