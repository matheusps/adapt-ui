import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<any>`
  ${({ full, disabled }) => `
    display: ${full ? 'block' : 'relative'};
    width: ${full ? '100%' : 'auto'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `};
  border: none;
  box-sizing: border-box;
  overflow: hidden;
  text-decoration: none;
  appearance: none;
  user-select: none;
  background: transparent;
`

const Clickable: React.FC<ClickableType> = ({
  full,
  disabled,
  onClick,
  ...rest
}) => {
  const handleClickEvent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    onClick && onClick(e)
  }

  return (
    <StyledButton
      full={full}
      disabled={disabled}
      onClick={handleClickEvent}
      {...rest}
    />
  )
}

Clickable.defaultProps = {
  full: false,
}

export { Clickable }
