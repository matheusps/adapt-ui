import React, { FC } from 'react'
import Surface from '../Surface'
import Title from './Title'
import styled from 'styled-components'
import { get } from 'lodash'
import { isBrightColor } from '../../global/helpers'

interface Props extends withGoal {
  fixed?: boolean
  title?: string
  theme: string
}

const ReStyledSurface = styled(Surface)<Props>(
  ({ theme: { colors }, goal }) => ({
    backgroundColor: get(colors.goal, goal),
    color: isBrightColor(get(colors.goal, goal)) ? '#000' : '#fff',
    border: 0,
    borderRadius: 0,
    width: '100%',
  })
)

const AppBar: FC<Props> = ({ fixed, goal, title, children }) => {
  return (
    <ReStyledSurface goal={goal} lifting={1}>
      {title && <Title text={title} />}
      {children}
    </ReStyledSurface>
  )
}

AppBar.defaultProps = {
  goal: 'create',
}

export default AppBar
