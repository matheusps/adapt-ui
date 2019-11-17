import React, { FC } from 'react'
import styled from 'styled-components'
import { textTokens, TextTokens } from '../../tokens'

const Heading: FC<HeadingProps> = ({ level = 1, ...props }) => {
  const Component = styled[`h${level}`]`
    ${textTokens}
  `
  return <Component {...props} />
}

type NativeHeadingType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>

type HeadingProps = NativeHeadingType &
  TextTokens & {
    level?: 1 | 2 | 3 | 4 | 5 | 6
  }

export default Heading
