import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

type Level = 1 | 2 | 3 | 4 | 5 | 6

interface Props {
  heading?: Level
}

const Paragraph = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
`

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 800;
`
const H2 = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
`
const H3 = styled.h3`
  font-size: 3rem;
  font-weight: 600;
`
const H4 = styled.h4`
  font-size: 2.5rem;
  font-weight: 600;
`
const H5 = styled.h5`
  font-size: 2rem;
  font-weight: 600;
`
const H6 = styled.h6`
  font-size: 1.5rem;
  font-weight: 600;
`

const Heading = (heading: Level, children: any) => {
  switch (heading) {
    case 1:
      return <H1>{children}</H1>
    case 2:
      return <H2>{children}</H2>
    case 3:
      return <H3>{children}</H3>
    case 4:
      return <H4>{children}</H4>
    case 5:
      return <H5>{children}</H5>
    case 6:
      return <H6>{children}</H6>
    default:
      return <H1>{children}</H1>
  }
}

const Text: FunctionComponent<Props> = ({ children, heading }) => {
  return !!heading ? (
    Heading(heading, children)
  ) : (
    <Paragraph>{children}</Paragraph>
  )
}

export default Text
