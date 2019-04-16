import React from 'react'
import { render } from 'react-testing-library'
import Container from '../components/Container'
import QuarksTheme from '../components/QuarksTheme'
import 'jest-styled-components'

describe('Container component', () => {
  const component = render(
    <QuarksTheme>
      <Container />
    </QuarksTheme>
  )

  it('should render', () => {
    expect(component).toBeTruthy()
  })

  it('should match snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
