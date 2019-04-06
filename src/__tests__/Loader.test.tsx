import React from 'react'
import { render } from 'react-testing-library'
import Loader from '../components/Loader'
import StellarTheme from '../components/StellarTheme'

describe('Container component', () => {
  it('should render', () => {
    const component = render(
      <StellarTheme>
        <Loader />
      </StellarTheme>
    )
    expect(component).toBeTruthy()
  })

  it('should match snapshot as default', () => {
    const component = render(
      <StellarTheme>
        <Loader />
      </StellarTheme>
    )
    expect(component.asFragment()).toMatchSnapshot()
  })

  it('should match snapshot with all props', () => {
    const component = render(
      <StellarTheme>
        <Loader
          gap="xl"
          size="3rem"
          color="primary"
          speed="fast"
          thickness="md"
        />
      </StellarTheme>
    )
    expect(component.asFragment()).toMatchSnapshot()
  })

  it('should match snapshot with all measures', () => {
    const component = render(
      <StellarTheme>
        <Loader thickness="sm" gap="sm" />
        <Loader thickness="md" gap="md" />
        <Loader thickness="lg" gap="lg" />
        <Loader thickness="xl" gap="xl" />
      </StellarTheme>
    )
    expect(component.asFragment()).toMatchSnapshot()
  })

  it('should match snapshot with all speeds', () => {
    const component = render(
      <StellarTheme>
        <Loader speed="slow" />
        <Loader speed="normal" />
        <Loader speed="fast" />
      </StellarTheme>
    )
    expect(component.asFragment()).toMatchSnapshot()
  })
})
