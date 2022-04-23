import { Modal as MantineModal } from '@mantine/core';
import { useState } from 'react';

function Modal() {
  const [opened, setOpened] = useState(false);

  return (
    <MantineModal
      opened={opened}
      onClose={() => setOpened(false)}
    >
      <h1>Teste</h1>
    </MantineModal>
  );
}

export { Modal };
