import { Header as MantineHeader, Group, Text } from '@mantine/core';

export function Header() {
  return (
    <MantineHeader height={60}>
      <Group
        sx={{ height: '100%' }}
        px={20}
        position='apart'
      >
        <Text>Pitang Vacinação</Text>
      </Group>
    </MantineHeader>
  );
}
