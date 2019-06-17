import React, { FC } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

interface Props extends NativeDivType, FlexibleType {}

const Flexible: FC<Props> = ({
  width,
  height,
  order,
  shrink,
  grow,
  basis,
  self,
  inline,
  direction,
  wrap,
  justify,
  content,
  items,
  children,
  ...rest
}) => {
  return (
    <div
      css={css`
        width: ${width};
        height: ${height};
        order: ${order};
        flex-shrink: ${shrink};
        flex-grow: ${grow};
        flex-basis: ${basis};
        align-self: ${self};
        display: ${inline ? 'inline-flex' : 'flex'};
        flex-direction: ${direction};
        flex-wrap: ${wrap};
        justify-content: ${justify};
        align-items: ${items};
        align-content: ${content};
      `}
      {...rest}
    >
      {children}
    </div>
  )
}

Flexible.defaultProps = {
  width: 'auto',
  height: 'auto',
  order: 0,
  shrink: 1,
  grow: 0,
  self: 'auto',
  basis: 'auto',
  inline: false,
  direction: 'row',
  wrap: 'nowrap',
  justify: 'flex-start',
  items: 'stretch',
  content: 'stretch',
}

export default Flexible
