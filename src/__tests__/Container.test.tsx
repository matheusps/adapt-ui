import React from 'react'
import { render } from 'react-testing-library'
import Container from '../components/Container'
import StellarTheme from '../components/StellarTheme'

describe('Container component', () => {
  const component = render(
    <StellarTheme>
      <Container bg="primary" />
    </StellarTheme>
  )

  it('should render', () => {
    expect(component).toBeTruthy()
  })

  it('should match snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
