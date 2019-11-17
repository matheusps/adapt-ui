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
    <div style={{ width: 100, height: 100, backgroundColor: 'black' }}></div>
    <div style={{ width: 100, height: 100, backgroundColor: 'blue' }}></div>
    <div style={{ width: 100, height: 100, backgroundColor: 'green' }}></div>
  </Box>
)

export const asButton = () => (
  <Box as="button" onClick={() => alert('Clicked Box')}>
    A Box can be anything!
  </Box>
)
