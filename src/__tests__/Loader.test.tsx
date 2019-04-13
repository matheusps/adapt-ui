import React from 'react'
import { render } from 'react-testing-library'
import Loader from '../components/Loader'
import QuarksTheme from '../components/QuarksTheme'

describe('Container component', () => {
  const renderComponent = (customProps?) =>
    render(
      <QuarksTheme>
        <Loader {...customProps!} />
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
      gap: 'xl',
      size: '3rem',
      color: 'primary',
      speed: 'fast',
      thickness: 'md',
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

  it('should match snapshot with all speeds', () => {
    const slow = renderComponent({
      speed: 'slow',
    })
    const normal = renderComponent({
      speed: 'normal',
    })
    const fast = renderComponent({
      speed: 'fast',
    })
    expect(slow.asFragment()).toMatchSnapshot()
    expect(normal.asFragment()).toMatchSnapshot()
    expect(fast.asFragment()).toMatchSnapshot()
  })
})
