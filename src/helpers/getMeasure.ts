const getMeasure = (measure: Measure, [sm, md, lg, xl]: Array<any>) => {
  switch (measure) {
    case 'sm':
      return sm
    case 'md':
      return md
    case 'lg':
      return lg
    case 'xl':
      return xl
    default:
      return sm
  }
}

export default getMeasure
