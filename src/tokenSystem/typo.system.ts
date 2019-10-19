import tokenBuilder from './index'

const fs = {
  scale: {
    h1: '4rem',
    h2: '3rem',
    h3: '2.5rem',
    h4: '2rem',
    h5: '1.5rem',
    h6: '1rem',
    body: '0.8rem',
  },
  propName: {
    fontSize: 'fs',
  },
}

const fw = {
  scale: {
    light: '400',
    normal: '600',
    bold: '700',
  },
  propName: {
    fontWeight: 'fw',
  },
}

const fontSize = tokenBuilder(fs)
const fontWeight = tokenBuilder(fw)

export const typoSystem = [fontSize, fontWeight] as TypoSystem

export type TypoSystem = {
  fs?: keyof typeof fs.scale
  fw?: keyof typeof fw.scale
}
