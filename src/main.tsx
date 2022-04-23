import { AppShell } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { Header } from './components/Header';
import { Appointments } from './pages/Appointments';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <NotificationsProvider>
        <AppShell header={<Header />}>
          <Appointments />
        </AppShell>
      </NotificationsProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
