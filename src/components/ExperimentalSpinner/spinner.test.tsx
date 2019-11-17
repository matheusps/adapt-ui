import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Spinner, {
  SpinnerProps,
  getSize,
  getThickness,
  getGap,
  getSpeed,
} from './index'

type Measure = 'sm' | 'md' | 'lg' | 'xl'
type Speed = 'fast' | 'slow' | 'normal'

import 'jest-styled-components'

afterEach(cleanup)

describe('Spinner component', () => {
  const renderComponent = (customProps?: SpinnerProps) =>
    render(
      <>
        <Spinner {...customProps} />
      </>
    )

  const sizes: Measure[] = ['sm', 'md', 'lg', 'xl']
  const speeds: Speed[] = ['fast', 'slow', 'normal']

  it('should render without crashing', () => {
    const { container } = renderComponent()
    const firstChild = container.firstChild
    expect(firstChild).toBeInTheDocument()
  })

  it('should render for all sizes', () => {
    for (let size of sizes) {
      const { container } = renderComponent({ size: size })
      const firstChild = container.firstChild
      const sizeValue = `${getSize(size)}rem`
      expect(firstChild).toHaveAttribute('height', sizeValue)
      expect(firstChild).toHaveAttribute('width', sizeValue)
    }
  })

  it('should render for all thicknesses', () => {
    for (let size of sizes) {
      const { container } = renderComponent({ thickness: size })
      const circleElement = container.querySelector('circle')
      const thicknessValue = `${getThickness(size)}`
      expect(circleElement).toHaveAttribute('stroke-width', thicknessValue)
      const radiusValue = `${14 - getThickness(size) / 2}`
      expect(circleElement).toHaveAttribute('r', radiusValue)
    }
  })

  it('should render for all gaps', () => {
    for (let size of sizes) {
      const { container } = renderComponent({ gap: size })
      const circleElement = container.querySelector('circle')
      const gapValue = `${Math.PI * 2 * (11 - getGap(size))}`
      expect(circleElement).toHaveAttribute('stroke-dasharray', gapValue)
    }
  })

  it('should render for all speeds', () => {
    for (let speed of speeds) {
      const { container } = renderComponent({ speed: speed })
      const firstChild = container.firstChild
      expect(firstChild).toHaveStyle(`animation-duration: ${getSpeed(speed)}ms`)
    }
  })
})
