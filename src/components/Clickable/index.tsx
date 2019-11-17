import React from 'react'
import styled from 'styled-components'
import Box from '../Box'

const StyledBox = styled(Box)<any>`
  ${({ disabled }) => `
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `};
`

const Clickable: React.FC<ClickableProps> = ({ onClick, as, ...rest }) => {
  const handleClickEvent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    onClick && onClick(e)
  }

  return <StyledBox as={as} onClick={handleClickEvent} {...rest} />
}

Clickable.defaultProps = {
  as: 'button',
}

type NativeButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ClickableProps = NativeButton & {
  as?: any
}

export default Clickable
