import tokenBuilder from '../index'

describe('Token Builder', () => {
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
    const res = tokenBuilder(y)
    const solvedResults = res.map(x => x({ m: 'sm' }))
    expect(solvedResults).toEqual([{ margin: '1rem' }, { padding: '1rem' }])
  })
})
