import { NotificationsProvider } from '@mantine/notifications';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { Appointments } from './pages/Appointments';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <NotificationsProvider>
        <Appointments />
      </NotificationsProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
