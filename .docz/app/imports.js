export const imports = {
  'src/docs/Button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-button" */ 'src/docs/Button.mdx'
    ),
  'src/docs/Loader.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-loader" */ 'src/docs/Loader.mdx'
    ),
  'src/docs/Surface.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-surface" */ 'src/docs/Surface.mdx'
    ),
  'src/docs/Text.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-text" */ 'src/docs/Text.mdx'
    ),
}
