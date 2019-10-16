import React from 'react'
import { render } from '@testing-library/react'

import Box from './index'
import { AdaptProvider } from '../'
import 'jest-styled-components'

describe('Box component', () => {
  const renderComponent = (customProps?) =>
    render(
      <AdaptProvider>
        <Box {...customProps!} />
      </AdaptProvider>
    )

  it('should render', () => {
    const basic = renderComponent()
    const withChildren = renderComponent({ children: 'children' })
    const withAsProp = renderComponent({ as: 'h1' })
    expect(basic).toBeTruthy()
    expect(withChildren).toBeTruthy()
    expect(withAsProp).toBeTruthy()
  })
})
