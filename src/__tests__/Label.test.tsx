import React from 'react'
import { render } from '@testing-library/react'

import { Label, DarksideTheme } from '../components'
import 'jest-styled-components'

describe('Label component', () => {
  const renderComponent = (customProps?) =>
    render(
      <DarksideTheme>
        <Label {...customProps!} />
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
})
