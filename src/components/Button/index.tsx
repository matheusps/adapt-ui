import React, { FC } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { getMeasure } from '../../global/helpers'
import useTheme from '../../hooks/useTheme'
import { getColor } from '../../helpers/getColor'

interface Props extends HasSkin {
  size?: Measure
  kind?: 'link' | 'ghost' | 'default'
}

const getFontSize = (measure: Measure) =>
  getMeasure(measure, ['0.8rem', '1rem', '1.25rem', '1.50rem'])

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
const Button: FC<Props> = ({ size, skin, children, ...rest }) => {
  const { elements, colors } = useTheme()

  const fontSize = getFontSize(size!)
  const padding = getPadding(size!)
  const borderRadius = elements.roundness

  const buttonSkin = colors.skin[skin!]
  const color = getColor(buttonSkin)
  const bg = getColor(buttonSkin, 0.1)
  const bgHover = getColor(buttonSkin, 0.2)
  const bgActive = getColor(buttonSkin, 0.3)

  return (
    <button
      {...rest}
      css={css`
        background-color: ${bg};
        color: ${color};
        font-size: ${fontSize};
        padding: ${padding};
        border-radius: ${borderRadius};
        border: none;
        box-sizing: border-box;
        font-weight: 500;
        font-stretch: normal;
        line-height: 1.4;
        margin: 0.2rem;
        display: relative;
        overflow: hidden;
        cursor: pointer;
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

Button.defaultProps = {
  skin: 'primary',
  size: 'md',
  kind: 'default',
}

export default Button
