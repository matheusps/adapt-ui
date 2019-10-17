import styleComposer from './index'

describe('Style Composer', () => {
  it('should work as basic', () => {
    const y = {
      scale: {
        sm: '1rem',
        md: '2rem',
      },
      propName: {
        margin: 'm',
        padding: 'm',
      },
    }
    const res = styleComposer(y)
    const solvedResults = res.map(x => x({ m: 'sm' }))
    expect(solvedResults).toEqual([{ margin: '1rem' }, { padding: '1rem' }])
  })
})
