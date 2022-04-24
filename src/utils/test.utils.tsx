/* eslint-disable import/no-extraneous-dependencies */
import { AppShell } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const customRender = (ui: React.ReactElement, options = {}) =>
  render(
    <RecoilRoot>
      <NotificationsProvider>
        <AppShell
          header={<Header />}
          footer={<Footer />}
        >
          {ui}
        </AppShell>
      </NotificationsProvider>
    </RecoilRoot>,
    {
      // wrap provider(s) here if needed
      wrapper: ({ children }) => children,
      ...options,
    },
  );

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
