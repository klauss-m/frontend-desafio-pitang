import { Accordion, Switch, Table } from '@mantine/core';
import { NotificationProps, showNotification } from '@mantine/notifications';
import axios from 'axios';
import { api } from '../../services/api';
import { useReload } from '../../states/reloadAppointment.state';
import { Appointment } from '../../types';
import { notifications } from '../../notifications';

interface StyledAccordionProps {
  items: Appointment[];
}

function StyledAccordion({ items }: StyledAccordionProps) {
  const { setReload } = useReload();

  const dates = [...new Set(items.map((date) => date.appointmentDate.toString().split(' ')[0]))];

  return (
    <Accordion iconSize={10}>
      {dates
        .sort(
          (a, b) =>
            // @ts-ignore
            new Date(a.split('/').reverse().join('-')) - new Date(b.split('/').reverse().join('-')),
        )
        .map((date) => (
          <Accordion.Item
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
                          onChange={async () => {
                            let status = 200;
                            await api
                              .patch(`/appointments/${app.id}`, {
                                attendance: !app.attendance,
                              })
                              .catch((error) => {
                                if (axios.isAxiosError(error)) {
                                  status = error.response?.status!;
                                } else {
                                  status = 500;
                                }
                              });
                            showNotification(
                              notifications.find(
                                (notif) => notif.status === status,
                              ) as NotificationProps,
                            );
                            setReload(true);
                            // endLoadingScreen
                          }}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Accordion.Item>
        ))}
    </Accordion>
  );
}

export { StyledAccordion };
