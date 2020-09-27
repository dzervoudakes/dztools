module.exports = {
  extends: [
    require.resolve('stylelint-a11y/recommended'),
    require.resolve('stylelint-config-standard'),
    require.resolve('stylelint-prettier/recommended')
  ],
  syntax: 'scss',
  plugins: [
    require.resolve('stylelint-a11y'),
    require.resolve('stylelint-order'),
    require.resolve('stylelint-prettier')
  ],
  rules: {
    // standard rules
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    indentation: 2,
    'property-no-vendor-prefix': true,
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export']
      }
    ],
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'single',
    'value-list-comma-space-after': 'always',

    // accessibility
    'a11y/no-obsolete-attribute': true,
    'a11y/no-obsolete-element': true,

    // ordering
    'order/properties-alphabetical-order': true
  }
};
