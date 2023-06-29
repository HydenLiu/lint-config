module.exports = {
  extends: [
    'stylelint-config-html',
    'stylelint-config-standard'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'v-deep']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends']
      }
    ],
    'block-no-empty': null,
    'declaration-property-value-no-unknown': true,
    'media-feature-name-value-no-unknown': true,
    'number-leading-zero': 'always'
  },
  ignoreFiles: [
    'node_modules',
    'dist',
    'public',
    'output',
    'coverage',
    'temp',
    '*.js',
    '*.cjs',
    '*.mjs',
    '*.ts',
    '*.tsx',
    '*.svg',
    '*.gif',
    '*.md'
  ]
}
