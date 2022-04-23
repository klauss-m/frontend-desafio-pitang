import { Accordion, Switch, Table } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { api } from '../../services/api';
import { useReload } from '../../states/reloadAppointment.state';
import { Appointment } from '../../types';

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
                            const result = await api.patch(`/appointments/${app.id}`, {
                              attendance: !app.attendance,
                            });
                            if (result.status === 200) {
                              showNotification({
                                title: 'Agendamento atualizado',
                                message: 'Conclusão do agendamento atualizada com sucesso!',
                                color: 'green',
                              });
                              setReload(true);
                            }
                            if (result.status === 404) {
                              showNotification({
                                title: 'Agendamento não encontrado.',
                                message: 'Não foi possível encontrar o agendamento selecionado.',
                                color: 'orange',
                              });
                              setReload(true);
                            }
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
