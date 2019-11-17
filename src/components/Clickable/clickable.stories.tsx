import React from 'react'
import { createVariation } from 'styled-tokens'
import styled from 'styled-components'

import { spacingTokens, SpacingTokens } from '../../tokens'
import Clickable from './index'
import { Preflight } from '..'

export default {
  title: 'Clickable',
  decorators: [
    storyFn => (
      <div>
        <Preflight />
        {storyFn()}
      </div>
    ),
  ],
}

export const basic = () => (
  <Clickable onClick={() => alert('CLICKED')}>Click Me</Clickable>
)

export const disabled = () => (
  <Clickable disabled>This is disabled and cannot be clicked</Clickable>
)

export const buttonExample = () => {
  const name = 'skin'

  const variation = {
    primary: {
      backgroundColor: '#001f3f',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#85144b',
      color: 'white',
    },
  }

  const skinVariation = createVariation({ name, variation })

  type ButtonProps = SpacingTokens &
    Partial<{
      [name]: keyof typeof variation
    }>

  const Button = styled(Clickable)<ButtonProps>`
    ${skinVariation}
    ${spacingTokens}
  `

  return (
    <>
      <Button ma="sm" pa="sm" skin="primary">
        Primary
      </Button>
      <Button ma="sm" pa="sm" skin="secondary">
        Secondary
      </Button>
    </>
  )
}
