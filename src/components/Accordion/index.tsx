import { Accordion as MantineAccordion, Switch, Table } from '@mantine/core';
import { NotificationProps, showNotification } from '@mantine/notifications';
import axios from 'axios';
import { api } from '../../services/api';
import { useReload } from '../../states/reloadAppointment.state';
import { Appointment } from '../../types';
import { notifications } from '../../notifications';

interface StyledAccordionProps {
  items: Appointment[];
}

function Accordion({ items }: StyledAccordionProps) {
  const { setReload } = useReload();

  const dates = [...new Set(items.map((date) => date.appointmentDate.toString().split(' ')[0]))];

  async function onchange(id: string, attendance: boolean) {
    let status = 200;
    await api
      .patch(`/appointments/${id}`, {
        attendance: !attendance,
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          status = error.response?.status! || 500;
        } else {
          status = 500;
        }
      });
    showNotification(notifications.find((notif) => notif.status === status) as NotificationProps);
    setReload(true);
  }

  return (
    <MantineAccordion iconSize={10}>
      {dates
        .sort(
          (a, b) =>
            // @ts-ignore
            new Date(a.split('/').reverse().join('-')) - new Date(b.split('/').reverse().join('-')),
        )
        .map((date) => (
          <MantineAccordion.Item
            key={date}
            label={date}
          >
            <Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Nascimento</th>
                  <th>Agendamento</th>
                  <th>Concluído</th>
                </tr>
              </thead>
              <tbody>
                {items
                  .filter((item) => item.appointmentDate.toString().split(' ')[0] === date)
                  .map((app) => (
                    <tr key={app.id}>
                      <td>{app.name}</td>
                      <td>{app.dateOfBirth.toString()}</td>
                      <td>{app.appointmentDate.toString().split(' ')[1]}</td>
                      <td>
                        <Switch
                          style={{ cursor: 'pointer' }}
                          checked={app.attendance}
                          onChange={() => onchange(app.id, app.attendance)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </MantineAccordion.Item>
        ))}
    </MantineAccordion>
  );
}

export { Accordion };
