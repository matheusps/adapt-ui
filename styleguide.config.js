const path = require('path')
module.exports = {
  title: 'React Quarks',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/components/QuarksTheme'),
  },
  components: 'src/components/**/index.tsx',
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
}
