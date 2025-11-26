export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
  ],
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'media-query-no-invalid': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': '^-?[a-z][a-z0-9]*(--?[a-z0-9]+)*$',
    'scss/no-global-function-names': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'selector-class-pattern': [
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
      {
        message: 'Class names should match the BEM naming convention',
        severity: 'warning',
        resolveNestedSelectors: true,
      },
    ],
    'selector-nested-pattern': [
      '^(?!.*&-(?!-)).*',
      {
        message: 'Avoid using &- selectors — use BEM &__ or &-- instead.',
      },
    ],
    'max-nesting-depth': [
      3,
      {
        ignore: ['pseudo-classes'],
        ignoreAtRules: ['include', 'media'],
      },
    ],
  },
}
