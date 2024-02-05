module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'sul-plugin',
    ],
    rules: {
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-single'],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx', 'json'] },
        ],
        // 'react/jsx-indent': [2, 2],
        // 'react/jsx-indent-props': [2, 2],
        // indent: [2, 2],
        // 'react/jsx-filename-extension': [2, {
        //   extensions: ['.js', '.jsx', '.tsx'],
        // }],
        'linebreak-style': 0,
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'as',
                    'role',
                    'data-testid',
                    'to',
                    'target',
                    'justify',
                    'align',
                    'direction',
                    'gap',
                ],
            },
        ],
        'max-len': [
            'error',
            {
                code: 140,
                ignoreComments: true,
            },
        ],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react/button-has-type': 'off', // TODO: check this rule
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'sul-plugin/path-checker': 'error',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'linebreak-style': [
                    'error',
                    process.platform === 'win32' ? 'windows' : 'unix',
                ],
                'i18next/no-literal-string': ['error', { ignore: ['border'] }],
                'max-len': 'off',
            },
        },
    ],
};
