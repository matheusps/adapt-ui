import * as React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { useTheme } from '../hooks'
import { getColor } from '../helpers'

const Clickable: React.FC<ClickableType> = ({
  skin,
  children,
  full,
  disabled,
  onClick,
  ghost,
  noEffect,
  ...rest
}) => {
  const { elements, colors } = useTheme()

  const padding = '0.5rem'
  const margin = '0.5rem'

  const borderRadius = elements.roundness

  const selectedSkin = colors.skin[skin!]
  const color = getColor(selectedSkin, disabled ? 0.5 : 1)
  const bg = ghost
    ? 'transparent'
    : getColor(selectedSkin, disabled ? 0.08 : 0.1)
  const bgHover = !noEffect && getColor(selectedSkin, disabled ? 0.08 : 0.2)
  const bgActive = !noEffect && getColor(selectedSkin, 0.3)

  const handleClickEvent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    onClick && onClick(e)
  }

  return (
    <button
      {...rest}
      disabled={disabled}
      onClick={handleClickEvent}
      css={css`
        background-color: ${bg};
        color: ${color};
        padding: ${padding};
        border-radius: ${borderRadius};
        display: ${full ? 'block' : 'relative'};
        width: ${full ? '100%' : 'auto'};
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
        margin: ${margin};

        border: none;
        box-sizing: border-box;
        font-weight: 500;
        font-stretch: normal;
        line-height: 1.4;
        overflow: hidden;
        text-align: center;
        text-decoration: none;
        text-transform: none;
        white-space: nowrap;
        justify-content: center;
        align-items: center;
        appearance: none;
        user-select: none;

        transition: background-color 0.2s ease-in-out;
        will-change: background-color;

        :hover {
          background-color: ${bgHover};
        }

        :active {
          background-color: ${bgActive};
        }

        :focus {
          outline: none;
        }
      `}
    >
      {children}
    </button>
  )
}

Clickable.defaultProps = {
  skin: 'primary',
  full: false,
}

export { Clickable }
