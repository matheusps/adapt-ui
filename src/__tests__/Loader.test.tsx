import React from 'react'
import { render } from 'react-testing-library'
import Loader from '../components/Loader'

describe('Container component', () => {
  it('should render', () => {
    const component = render(<Loader />)
    expect(component).toBeTruthy()
  })

  it('should match snapshot as default', () => {
    const component = render(<Loader />)
    expect(component.asFragment()).toMatchSnapshot()
  })

  it('should match snapshot with all props', () => {
    const component = render(
      <Loader gap="xl" size="3rem" color="black" speed="fast" thickness="md" />
    )
    expect(component.asFragment()).toMatchSnapshot()
  })
})
