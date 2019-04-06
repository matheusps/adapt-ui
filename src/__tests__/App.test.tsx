import React from 'react'
import { render } from 'react-testing-library'
import App from '../App'

describe('App component', () => {
  it('should render', () => {
    const component = render(<App />)
    expect(component).toBeTruthy()
  })

  it('should match snapshot', () => {
    const component = render(<App />)
    expect(component.asFragment()).toMatchSnapshot()
  })
})
