const styleComposer = (styles: Args) => {
  const { propName, scale } = styles
  const props = Object.keys(propName)

  const styleFunctions = props.map(prop => {
    const name = propName[prop]

    const curriedStyleFn = (key, scale) => _props => ({
      [prop]: scale[_props[key]],
    })

    return curriedStyleFn(name, scale)
  })

  return styleFunctions
}

type Args = {
  scale: any
  propName: any
}

export default styleComposer
