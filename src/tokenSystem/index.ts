const tokenBuilder = (styles: Args) => {
  const { propName, scale } = styles
  const props = Object.keys(propName)

  const styleFunctions = props.map(prop => {
    const name = propName[prop]

    const curriedStyleFn = (key, scale) => receivedProps => ({
      [prop]: scale[receivedProps[key]],
    })

    return curriedStyleFn(name, scale)
  })

  return styleFunctions
}

type PropSet = {
  [key: string]: any
}

type Args = {
  scale: PropSet
  propName: PropSet
}

export default tokenBuilder
