const path = require('path')
module.exports = {
  title: 'React Stellar',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/components/StellarTheme'),
  },
  components: 'src/components/**/index.tsx',
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
}
