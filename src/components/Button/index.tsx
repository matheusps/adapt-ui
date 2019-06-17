import React, { FC } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { getMeasure } from '../../helpers'
import { Loader, Clickable } from '../index'

interface Props extends ClickableType {
  size?: Measure
  loading?: boolean
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

const Button: FC<Props> = ({ size, children, loading, ...props }) => {
  const fontSize = `${getFontSize(size!)}rem`
  const padding = getPadding(size!)

  return (
    <Clickable
      {...props}
      css={css`
        font-size: ${fontSize};
        padding: ${padding};
      `}
    >
      {loading ? (
        <Loader size={getFontSize(size!)} skin={props.skin} />
      ) : (
        children
      )}
    </Clickable>
  )
}

Button.defaultProps = {
  size: 'md',
  kind: 'default',
  loading: false,
}

export { Button }
