import React from 'react'

import { render } from '@testing-library/react'
import { DarksideTheme } from '../components'

import 'jest-styled-components'

describe('DarksideTheme component', () => {
  const component = render(
    <DarksideTheme>
      <p>Test</p>
    </DarksideTheme>
  )

  it('should render', () => {
    expect(component).toBeTruthy()
  })

  it('should match snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
