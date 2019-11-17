import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Clickable, { ClickableProps } from './index'
import 'jest-styled-components'

afterEach(cleanup)

describe('Clickable component', () => {
  const renderComponent = (customProps?: ClickableProps) =>
    render(
      <>
        <Clickable {...customProps} />
      </>
    )

  it('should render without crashing', () => {
    const { container } = renderComponent()
    expect(container.firstChild).toBeDefined()
  })

  it('should render with disabled styles', () => {
    const { container } = renderComponent({ disabled: true })
    expect(container.firstChild).toHaveStyleRule('cursor', 'not-allowed')
  })
})
