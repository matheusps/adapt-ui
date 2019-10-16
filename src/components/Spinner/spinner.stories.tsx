import React from 'react'
import Spinner from './index'
import { AdaptProvider, Box } from '..'

export default {
  title: 'Spinner',
  decorators: [storyFn => <AdaptProvider>{storyFn()}</AdaptProvider>],
}

export const size = () => (
  <Box>
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
    <Spinner size="xl" />
  </Box>
)

export const thickness = () => (
  <Box>
    <Spinner thickness="sm" />
    <Spinner thickness="md" />
    <Spinner thickness="lg" />
    <Spinner thickness="xl" />
  </Box>
)

export const gap = () => (
  <Box>
    <Spinner gap="sm" />
    <Spinner gap="md" />
    <Spinner gap="lg" />
    <Spinner gap="xl" />
  </Box>
)

export const speed = () => (
  <Box>
    <Spinner speed="slow" />
    <Spinner speed="normal" />
    <Spinner speed="fast" />
  </Box>
)
