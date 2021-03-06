import { useEffect, useState } from 'react';
import axios from 'axios';
import { NotificationProps, showNotification } from '@mantine/notifications';
import { Title } from '@mantine/core';
import { Accordion } from '../../components/Accordion';
import { api } from '../../services/api';
import { Appointment } from '../../types';
import { useReload } from '../../states/reloadAppointment.state';
import { notifications } from '../../notifications';
import { Modal } from '../../components/Modal';

function Appointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const { reload, setReload } = useReload();

  useEffect(() => {
    async function loadAppointments() {
      let status = 200;
      const result = await api.get<Appointment[]>('/appointments').catch((error) => {
        if (axios.isAxiosError(error)) {
          status = error.response?.status || 500;
        } else {
          status = 500;
        }
        showNotification(
          notifications.find((notif) => notif.status === status) as NotificationProps,
        );
      });
      if (result?.data) {
        setAppointments(result.data);
      }
    }
    if (reload) {
      loadAppointments();
      setReload(false);
    }
  }, [reload, setReload]);

  return (
    <>
      <Title
        order={3}
        align='center'
      >
        Agendamentos
      </Title>
      <Accordion items={appointments} />
      <Modal />
    </>
  );
}

export { Appointments };
