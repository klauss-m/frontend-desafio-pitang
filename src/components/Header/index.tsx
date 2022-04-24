import { Container, Group, Title, Header as MantineHeader } from '@mantine/core';
import { headerStyles } from './styles';

export function Header() {
  const { classes } = headerStyles();

  return (
    <MantineHeader height={60}>
      <Container className={classes.header}>
        <Group position='apart'>
          <Title>Pitang Vacina</Title>
        </Group>
      </Container>
    </MantineHeader>
  );
}
