import React from 'react'
import Button from './index'
import { AdaptProvider, Box } from '..'

export default {
  title: 'Button',
  decorators: [storyFn => <AdaptProvider>{storyFn()}</AdaptProvider>],
}

export const size = () => (
  <Box>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">XLarge</Button>
  </Box>
)

export const loading = () => (
  <Box>
    <Button size="sm" loading>
      Primary
    </Button>
    <Button size="md" loading>
      Secondary
    </Button>
    <Button size="lg" loading>
      Success
    </Button>
    <Button size="xl" loading>
      Warning
    </Button>
    <Button size="xl" loading>
      Danger
    </Button>
  </Box>
)

export const full = () => (
  <Box>
    <Button size="sm" full>
      Small
    </Button>
    <Button size="md" full>
      Medium
    </Button>
    <Button size="lg" full>
      Large
    </Button>
    <Button size="xl" full>
      XLarge
    </Button>
    <Button size="xl" loading full>
      XLarge
    </Button>
  </Box>
)

export const disabled = () => (
  <Box>
    <Button size="sm" disabled>
      Small
    </Button>
    <Button size="md" disabled>
      Medium
    </Button>
    <Button size="lg" disabled>
      Large
    </Button>
    <Button size="xl" disabled loading>
      XLarge
    </Button>
  </Box>
)
