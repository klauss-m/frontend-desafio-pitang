import { createStyles } from '@mantine/core';

const headerStyles = createStyles({
  root: {
    position: 'relative',
    zIndex: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
});

export { headerStyles };
