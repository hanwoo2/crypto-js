const { default: commonjs } = require('@rollup/plugin-commonjs');
const { default: babel } = require('@rollup/plugin-babel');

module.exports = {
    input: './index.js',
    output: {
        name: 'crypto-js',
        file: './dist/crypto-js.js',
        format: 'cjs',
        compact: true,
        sourcemap: true,
    },
    plugins: [
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false,
                        targets: {
                            browsers: ['last 2 versions', 'ie >= 11'],
                        },
                    },
                ],
            ],
        }),
    ]
}