import React from 'react'
import styled from 'styled-components'
import {
  colorTokens,
  spacingTokens,
  SpacingTokens,
  ColorTokens,
} from '../../tokens'
import Box from './index'
import { Preflight } from '..'
import { Color } from 'csstype'

export default {
  title: 'Box',
  decorators: [
    storyFn => (
      <div>
        <Preflight />
        {storyFn()}
      </div>
    ),
  ],
}

export const basic = () => <Box>Basic Box</Box>

export const asH2 = () => <Box as="h2">A Box can be a H2</Box>

export const asButton = () => (
  <Box as="button" onClick={() => alert('Clicked Box')}>
    A Box can be anything!
  </Box>
)

export const withTokens = () => {
  const StyledBox = styled(Box)<SpacingTokens & ColorTokens>`
    ${colorTokens}
    ${spacingTokens}
  `

  return (
    <StyledBox pa="xl" bgColor="black" color="fuchsia">
      <h1>Styled Box</h1>
    </StyledBox>
  )
}
