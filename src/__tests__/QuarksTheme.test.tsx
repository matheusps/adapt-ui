import React from 'react'
import { render } from 'react-testing-library'
import QuarksTheme from '../components/QuarksTheme'

describe('Container component', () => {
  const component = render(
    <QuarksTheme>
      <p>Test</p>
    </QuarksTheme>
  )

  it('should render', () => {
    expect(component).toBeTruthy()
  })

  it('should match snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
