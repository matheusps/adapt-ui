import React from 'react'
import Box from './index'
import { AdaptProvider } from '..'

export default {
  title: 'Box',
  decorators: [storyFn => <AdaptProvider>{storyFn()}</AdaptProvider>],
}

export const basic = () => <Box>Hello Button</Box>

export const asH2 = () => (
  <Box as="h2" mb="sm" mt="sm" pt="md">
    A box can be an h2 element
  </Box>
)

export const asButton = () => (
  <Box width="sm" as="button" onClick={() => alert('Clicked Box')}>
    A Box can be anything!
  </Box>
)
