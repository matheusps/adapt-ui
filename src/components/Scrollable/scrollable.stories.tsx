import React from 'react'
import Scrollable from './index'
import { Preflight, Heading, Box, Paragraph } from '..'

export default {
  title: 'Scrollable',
  decorators: [
    storyFn => (
      <div>
        <Preflight />
        {storyFn()}
      </div>
    ),
  ],
}

export const yAxis = () => (
  <Scrollable scroll="y" h="md">
    <Heading level={6}>Start Scrolling</Heading>
    <Box>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
    </Box>
  </Scrollable>
)

export const xAxis = () => (
  <Scrollable scroll="x">
    <Heading level={6}>Start Scrolling</Heading>
    <Box style={{ backgroundColor: 'black' }} />
    <Box>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
    </Box>
  </Scrollable>
)

export const xyAxis = () => (
  <Scrollable scroll="xy">
    <Heading level={6}>Start Scrolling</Heading>
    <Box style={{ backgroundColor: 'black' }} />
    <Box>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
    </Box>
  </Scrollable>
)
