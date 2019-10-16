import React from 'react'
import styled from 'styled-components'
import Box from '../Box'

const StyledBox = styled(Box)<any>`
  ${({ full, disabled }) => `
    display: ${full ? 'block' : 'relative'};
    width: ${full ? '100%' : 'auto'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `};
  border: none;
  overflow: hidden;
  text-decoration: none;
  appearance: none;
  user-select: none;
  background: transparent;
`

const Clickable: React.FC<ClickableProps> = ({
  full,
  disabled,
  onClick,
  as,
  ...rest
}) => {
  const handleClickEvent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    onClick && onClick(e)
  }

  return (
    <StyledBox
      as={as}
      full={full}
      disabled={disabled}
      onClick={handleClickEvent}
      {...rest}
    />
  )
}

Clickable.defaultProps = {
  full: false,
  as: 'button',
}

type NativeButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ClickableProps = NativeButton & {
  full?: boolean
  as?: any
}

export default Clickable
