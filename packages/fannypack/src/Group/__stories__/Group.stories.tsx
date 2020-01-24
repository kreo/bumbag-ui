import * as React from 'react';
import { Box, Group, LayoutSet, Button, Set } from '../../';

export default { title: 'Group' };

export const _default = () => (
  <Group>
    <Box backgroundColor="primary" color="white" padding="0.5rem 1rem">
      Hello
    </Box>
    <Button>Send</Button>
    <Button>Cancel</Button>
  </Group>
);

export const verticalGroups = () => (
  <Group isVertical>
    <Box backgroundColor="primary" color="white" padding="0.5rem 1rem">
      Hello
    </Box>
    <Button>Send</Button>
    <Button>Cancel</Button>
  </Group>
);

export const responsiveBreakpoint = () => (
  <Group verticalBreakpoint="max-desktop">
    <Box backgroundColor="primary" color="white" padding="0.5rem 1rem">
      Hello
    </Box>
    <Button>Send</Button>
    <Button>Cancel</Button>
  </Group>
);