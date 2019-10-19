import React from 'react'
import Input from './Input'
import { AdaptProvider, Box } from '..'

export default {
  title: 'Forms',
  decorators: [storyFn => <AdaptProvider>{storyFn()}</AdaptProvider>],
}

export const inputs = () => (
  <Box width="md">
    <Input type="text" placeholder="Generic Text Input" />
    <Input type="email" placeholder="Email Input" />
    <Input type="search" placeholder="Search Input" />
    <Input type="password" placeholder="Password Input" />
    <Input type="tel" placeholder="Tel Input" />
    <Input type="number" placeholder="Number Input" />
    <Input type="date" placeholder="Date Input" />
    <Input type="file" placeholder="File Input" />
  </Box>
)
