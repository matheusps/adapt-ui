import React, { FC } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import useTheme from '../../hooks/useTheme'
import { getColor, getMeasure } from '../../helpers'
import { Loader } from '..'
import { getSize } from '../Loader'

interface Props
  extends HasSkin,
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  size?: Measure
  loading?: boolean
  full?: boolean
  kind?: 'link' | 'ghost' | 'default'
}

const getFontSize = (measure: Measure) =>
  getMeasure(measure, [0.8, 1, 1.25, 1.5])

const getPadding = (measure: Measure) =>
  getMeasure(measure, [
    '0.375rem 1.4rem 0.375rem 1.4rem',
    '0.45rem 1.8rem 0.45rem 1.8rem',
    '0.65rem 2.2rem 0.65rem 2.2rem',
    '0.80rem 2.6rem 0.80rem 2.6rem',
  ])

/**
 * TODO: create kinds, receive button interface, loading button
 * @param param0
 */
const Button: FC<Props> = ({
  size,
  skin,
  children,
  full,
  loading,
  disabled,
  ...rest
}) => {
  const { elements, colors } = useTheme()

  const fontSize = `${getFontSize(size!)}rem`
  const padding = getPadding(size!)
  const borderRadius = elements.roundness

  const buttonSkin = colors.skin[skin!]
  const color = getColor(buttonSkin, disabled ? 0.5 : 1)
  const bg = getColor(buttonSkin, disabled ? 0.08 : 0.1)
  const bgHover = getColor(buttonSkin, disabled ? 0.08 : 0.2)
  const bgActive = getColor(buttonSkin, 0.3)

  return (
    <button
      {...rest}
      disabled={disabled}
      css={css`
        background-color: ${bg};
        color: ${color};
        font-size: ${fontSize};
        padding: ${padding};
        border-radius: ${borderRadius};
        display: ${full ? 'block' : 'relative'};
        width: ${full ? '100%' : 'auto'};
        border: none;
        box-sizing: border-box;
        font-weight: 500;
        font-stretch: normal;
        line-height: 1.4;
        margin: 0.2rem;
        overflow: hidden;
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
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
      {loading ? <Loader size={getFontSize(size!)} skin={skin} /> : children}
    </button>
  )
}

Button.defaultProps = {
  skin: 'primary',
  size: 'md',
  kind: 'default',
  loading: false,
  full: false,
}

export default Button
