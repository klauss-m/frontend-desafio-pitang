import { Container, Group, Title } from '@mantine/core';
import { headerStyles } from './styles';

export function Header() {
  const { classes } = headerStyles();

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position='apart'>
          <Title>Pitang Vacina</Title>
        </Group>
      </Container>
    </div>
  );
}
