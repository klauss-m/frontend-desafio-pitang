import { Text, Container, Group, ActionIcon } from '@mantine/core';
import { BrandGithub } from 'tabler-icons-react';
import { footerStyles } from './styles';

export function Footer() {
  const { classes } = footerStyles();
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text>Pitang Vacina</Text>
        <Group
          spacing={0}
          className={classes.links}
          position='right'
          noWrap
        >
          <ActionIcon size='lg'>
            <BrandGithub size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
