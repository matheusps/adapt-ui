import React from 'react'
import { render } from '@testing-library/react'

import Button from './index'
import { AdaptProvider } from '../'
import 'jest-styled-components'

describe('Button component', () => {
  const renderComponent = (customProps?) =>
    render(
      <AdaptProvider>
        <Button {...customProps!} />
      </AdaptProvider>
    )

  it('should render', () => {
    const basic = renderComponent()
    const withAsProp = renderComponent({ size: 'md' })
    const withAsDisabled = renderComponent({ disabled: 'disabled' })
    expect(basic).toBeTruthy()
    expect(withAsProp).toBeTruthy()
    expect(withAsDisabled).toBeTruthy()
  })
})
