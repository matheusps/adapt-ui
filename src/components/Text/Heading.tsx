import React, { FC } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

type HLevel = 1 | 2 | 3 | 4 | 5 | 6

interface Props {
  level: HLevel
  style: any //Find correct extension
}

const H1: FC = ({ children }) => (
  <h1
    css={css`
      font-size: 4rem;
      font-weight: 800;
      margin: 0.67em 0;
    `}
  >
    {children}
  </h1>
)

const H2: FC = ({ children }) => (
  <h2
    css={css`
      font-size: 3.5rem;
      font-weight: 800;
    `}
  >
    {children}
  </h2>
)

const H3: FC = ({ children }) => (
  <h3
    css={css`
      font-size: 3rem;
      font-weight: 600;
    `}
  >
    {children}
  </h3>
)

const H4: FC = ({ children }) => (
  <h4
    css={css`
      font-size: 2.5rem;
      font-weight: 600;
    `}
  >
    {children}
  </h4>
)

const H5: FC = ({ children }) => (
  <h5
    css={css`
      font-size: 2rem;
      font-weight: 600;
    `}
  >
    {children}
  </h5>
)

const H6: FC = ({ children }) => (
  <h6
    css={css`
      font-size: 1.5rem;
      font-weight: 600;
    `}
  >
    {children}
  </h6>
)

const getComponent = (level: HLevel) => {
  switch (level) {
    case 1:
      return H1
    case 2:
      return H2
    case 3:
      return H3
    case 4:
      return H4
    case 5:
      return H5
    case 6:
      return H6
    default:
      return H1
  }
}

const Heading: FC<Props> = ({ level, children, ...rest }) => {
  const H = getComponent(level)
  return <H {...rest}>{children}</H>
}

export default Heading
