import { AppShell, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Appointments } from './pages/Appointments';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <NotificationsProvider>
        <AppShell
          header={<Header />}
          footer={<Footer />}
        >
          <MantineProvider>
            <Appointments />
          </MantineProvider>
        </AppShell>
      </NotificationsProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
