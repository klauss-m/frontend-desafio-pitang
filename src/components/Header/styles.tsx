import { createStyles } from '@mantine/core';

const headerStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colors.gray[0],
    borderBottom: `1px solid ${theme.colors.gray[4]}`,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },
}));

export { headerStyles };
