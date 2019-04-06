module.exports = {
  title: 'React Style Guide Example',
  components: 'src/components/**/index.tsx',
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
}
