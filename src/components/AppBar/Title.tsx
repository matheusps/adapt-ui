import React, { FC } from 'react'
import { Heading } from '../Text'

interface Props {
  text: string
}

const Title: FC<Props> = ({ text }) => {
  return (
    <Heading style={{ margin: 0 }} level={6}>
      {text}
    </Heading>
  )
}

Title.defaultProps = {
  text: '',
}

export default Title
