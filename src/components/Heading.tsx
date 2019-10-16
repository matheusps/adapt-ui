import React, { FC } from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  margin: 0.67em 0;
`

const H2 = styled.h2`
  font-size: 3.5rem;
  font-weight: 400;
`

const H3 = styled.h3`
  font-size: 3rem;
  font-weight: 400;
`
const H4 = styled.h4`
  font-size: 2.5rem;
  font-weight: 500;
`

const H5 = styled.h5`
  font-size: 2rem;
  font-weight: 500;
`

const H6 = styled.h6`
  font-size: 1.5rem;
  font-weight: 700;
`

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

const Heading: FC<HeadingProps> = ({ level = 1, ...props }) => {
  const Component = getComponent(level)
  //@ts-ignore
  return <Component {...props} />
}

type HLevel = 1 | 2 | 3 | 4 | 5 | 6

type NativeHeadingType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>

type HeadingProps = NativeHeadingType & {
  level?: HLevel
}

export { Heading }
