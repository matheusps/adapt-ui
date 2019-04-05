import React from 'react'
import { render } from 'react-testing-library'
import Container from '../components/Container'

describe('Container component', () => {
  it('should render', () => {
    const component = render(<Container />)
    expect(component).toBeTruthy()
  })

  it('shoult match snapshot', () => {
    const component = render(<Container />)
    expect(component.asFragment()).toMatchSnapshot()
  })
})
