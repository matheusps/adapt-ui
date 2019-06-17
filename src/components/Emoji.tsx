import * as React from 'react'
import emojione from 'emojione'
import { getMeasure } from '../helpers'

interface Props extends NativeImgType {
  symbol: string
  size?: Measure
}

const getSize = (size: Measure) => getMeasure(size, [32, 32, 64, 128])

/**
 * Renders a single emoji using emojione
 */
const Emoji: React.FC<Props> = ({ size, symbol, ...rest }) => {
  const emojiSize = getSize(size!)

  const path = emojione.imagePathPNG
  const shorName = emojione.toShort(symbol)

  //@ts-ignore :: Hack :: Emojione types are incomplete
  const emojiList = emojione.emojioneList

  const fileName = shorName ? emojiList[shorName].uc_base : ''
  const source = `${path}${emojiSize}/${fileName}.png`

  const smReduction = size === 'sm' ? 1.8 : 1

  return (
    <img
      width={emojiSize / smReduction}
      height={emojiSize / smReduction}
      src={source}
      alt={symbol}
      {...rest}
    />
  )
}

Emoji.defaultProps = {
  size: 'md',
}

export { Emoji }
