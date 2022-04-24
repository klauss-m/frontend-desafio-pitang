import { Container, Group, Title, Header as MantineHeader, Button } from '@mantine/core';
import { headerStyles } from './styles';

import { useModal } from '../../states/modal.state';

export function Header() {
  const { setOpened } = useModal();
  const { classes } = headerStyles();

  return (
    <MantineHeader
      height={60}
      mb={20}
      className={classes.root}
    >
      <Container>
        <Group
          position='apart'
          spacing='lg'
        >
          <Title>Pitang Vacina</Title>
          <Button
            name='newAppointment'
            onClick={() => setOpened(true)}
          >
            Novo Agendamento
          </Button>
        </Group>
      </Container>
    </MantineHeader>
  );
}
