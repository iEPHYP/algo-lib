const buildEnvironment = process.env.BUILD_ENV;

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['typescript', 'prettier', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  rules: {
    'max-lines': ['warn', { max: 500, skipComments: true, skipBlankLines: true }],
    'no-console': [buildEnvironment ? 'error' : 'warn', { allow: ['error', 'warn'] }],
    'eol-last': ['error', 'always'],
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: ['interface', 'type'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['interface', 'type'] },
      { blankLine: 'always', prev: 'class', next: '*' },
      { blankLine: 'always', prev: '*', next: 'class' },
    ],
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true, // Allows empty interfaces that extend other interfaces
      },
    ],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-unused-vars': buildEnvironment ? 'error' : 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    eqeqeq: 'error',
  },
  // overrides: [
  //   // override "simple-import-sort" config
  //   {
  //     files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
  //     rules: {
  //       'simple-import-sort/imports': [
  //         'error',
  //         {
  //           groups: [
  //             // Side effect imports.
  //             ['^\\u0000'],
  //             // Parent imports. Put `..` last.
  //             ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
  //             // Other relative imports. Put same-folder imports and `.` last.
  //             ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
  //           ],
  //         },
  //       ],
  //     },
  //   },
  // ],
};
