import React from 'react'
import Box from './index'
import { AdaptProvider } from '..'

export default {
  title: 'Box',
  decorators: [storyFn => <AdaptProvider>{storyFn()}</AdaptProvider>],
}

export const basic = () => <Box>Hello Button</Box>

export const asH2 = () => (
  <Box as="h2" display="flex" direction="row" justify="center">
    <Box
      elevation="xs"
      ma="xl"
      bgColor="maroon"
      style={{ width: 100, height: 100 }}
    ></Box>
    <Box
      elevation="md"
      ma="xl"
      bgColor="fuchsia"
      style={{ width: 100, height: 100 }}
    ></Box>
    <Box
      elevation="xl"
      ma="xl"
      bgColor="aqua"
      style={{ width: 100, height: 100 }}
    ></Box>
  </Box>
)

export const asButton = () => (
  <Box as="button" onClick={() => alert('Clicked Box')}>
    A Box can be anything!
  </Box>
)
