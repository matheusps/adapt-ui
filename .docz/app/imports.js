export const imports = {
  'src/docs/Button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-button" */ 'src/docs/Button.mdx'
    ),
  'src/docs/Container.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-container" */ 'src/docs/Container.mdx'
    ),
  'src/docs/Loader.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-loader" */ 'src/docs/Loader.mdx'
    ),
  'src/docs/Text.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-text" */ 'src/docs/Text.mdx'
    ),
}
