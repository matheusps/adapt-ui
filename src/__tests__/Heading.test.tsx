import React from 'react'
import { render } from '@testing-library/react'

import { Heading, DarksideTheme } from '../components'
import 'jest-styled-components'

describe('Heading component', () => {
  const renderComponent = (customProps?) =>
    render(
      <DarksideTheme>
        <Heading {...customProps!} />
      </DarksideTheme>
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
      level: 1,
    })

    expect(component.asFragment()).toMatchSnapshot()
  })

  it('should match snapshot with all levels', () => {
    const h1 = renderComponent({
      level: 1,
    })
    const h2 = renderComponent({
      level: 2,
    })
    const h3 = renderComponent({
      level: 3,
    })
    const h4 = renderComponent({
      level: 4,
    })
    const h5 = renderComponent({
      level: 5,
    })
    const h6 = renderComponent({
      level: 6,
    })

    expect(h1.asFragment()).toMatchSnapshot()
    expect(h2.asFragment()).toMatchSnapshot()
    expect(h3.asFragment()).toMatchSnapshot()
    expect(h4.asFragment()).toMatchSnapshot()
    expect(h5.asFragment()).toMatchSnapshot()
    expect(h6.asFragment()).toMatchSnapshot()
  })
})
