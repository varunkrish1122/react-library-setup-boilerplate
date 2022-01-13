import babel from 'rollup-plugin-babel';
import externalPeers from 'rollup-plugin-peer-deps-external';
import packageResolver from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { uglify } from 'rollup-plugin-uglify';

const extensions = ['.js', '.jsx'];
export default [
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs'
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named'
            }
        ],
        plugins: [
            babel({
                exclude: './node_modules/**',
                extensions,
                presets: ['@babel/preset-react']
            }),
            externalPeers(),
            packageResolver({
                mainFields: ['module', 'main', 'jsnext:main', 'browser'],
                extensions
            }),
            terser(),
            uglify()
        ]
    }
]