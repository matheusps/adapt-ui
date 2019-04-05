import React, { FunctionComponent } from 'react'

type Measure = 'sm' | 'md' | 'lg' | 'xl'

const getSpeed = (speed: string) =>
  speed === 'fast' ? 600 : speed === 'slow' ? 900 : 750

const getThickness = (thickness: Measure) =>
  thickness === 'sm'
    ? 2
    : thickness === 'md'
    ? 4
    : thickness === 'lg'
    ? 6
    : thickness === 'xl'
    ? 8
    : 4

const getGap = (gap: Measure) =>
  gap === 'sm' ? 1 : gap === 'md' ? 3 : gap === 'lg' ? 4 : gap === 'xl' ? 5 : 4

interface LoaderProps {
  color: string
  speed: 'fast' | 'slow' | 'normal'
  gap: Measure
  thickness: Measure
  size: string
}

const Loader: FunctionComponent<LoaderProps> = ({
  thickness,
  size,
  speed,
  color,
  gap,
}) => (
  <svg
    height={size}
    width={size}
    style={{ animationDuration: `${getSpeed(speed)}ms` }}
    className="__react-svg-spinner_circle"
    role="img"
    aria-labelledby="title desc"
    viewBox="0 0 32 32"
  >
    <style
      dangerouslySetInnerHTML={{
        __html: `
      .__react-svg-spinner_circle{
          transition-property: transform;
          animation-name: __react-svg-spinner_infinite-spin;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
      }
      @keyframes __react-svg-spinner_infinite-spin {
          from {transform: rotate(0deg)}
          to {transform: rotate(360deg)}
      }
    `,
      }}
    />
    <circle
      role="presentation"
      cx={16}
      cy={16}
      r={14 - getThickness(thickness) / 2}
      stroke={color}
      fill="none"
      strokeWidth={getThickness(thickness)}
      strokeDasharray={Math.PI * 2 * (11 - getGap(gap))}
      strokeLinecap="round"
    />
  </svg>
)

Loader.defaultProps = {
  color: 'rgba(0,0,0,0.4)',
  size: '2rem',
  thickness: 'md',
  speed: 'normal',
}

export default Loader
