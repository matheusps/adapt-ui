import React from 'react'
import styled from 'styled-components'

import { colorTokens, ColorTokens } from '../../tokens'
import Heading from './Heading'
import Paragraph from './Paragraph'
import { Preflight, Box } from '..'

export default {
  title: 'Typography',
  decorators: [
    storyFn => (
      <div>
        <Preflight />
        {storyFn()}
      </div>
    ),
  ],
}

const StyledHeading = styled(Heading)<ColorTokens>`
  ${colorTokens}
`

export const heading = () => (
  <Box>
    <StyledHeading level={1} color="orange" tt="upper">
      Styled Heading 1
    </StyledHeading>
    <Heading level={1}>Heading 1</Heading>
    <Heading level={2}>Heading 2</Heading>
    <Heading level={3}>Heading 3</Heading>
    <Heading level={4}>Heading 4</Heading>
    <Heading level={5}>Heading 5</Heading>
    <Heading level={6}>Heading 6</Heading>
  </Box>
)

export const paragraph = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Paragraph>
)
