import React from 'react'
import { render } from 'react-testing-library'
import Button from '../components/Button'
import QuarksTheme from '../components/QuarksTheme'
import 'jest-styled-components'

describe('Container component', () => {
  const renderComponent = (customProps?) =>
    render(
      <QuarksTheme>
        <Button {...customProps!}>Test</Button>
      </QuarksTheme>
    )

  it('should render', () => {
    const component = renderComponent()
    expect(component).toBeTruthy()
  })

  it('should match snapshot as default', () => {
    const component = renderComponent()
    expect(component.asFragment()).toMatchSnapshot()
  })

  it('should match snapshot with all props', () => {
    const component = renderComponent({
      size: 'lg',
      color: 'primary',
    })
    expect(component.asFragment()).toMatchSnapshot()
  })

  it('should match snapshot with all measures', () => {
    const sm = renderComponent({
      size: 'sm',
    })
    const md = renderComponent({
      size: 'md',
    })
    const lg = renderComponent({
      size: 'lg',
    })
    const xl = renderComponent({
      size: 'xl',
    })
    expect(sm.asFragment()).toMatchSnapshot()
    expect(md.asFragment()).toMatchSnapshot()
    expect(lg.asFragment()).toMatchSnapshot()
    expect(xl.asFragment()).toMatchSnapshot()
  })
})
