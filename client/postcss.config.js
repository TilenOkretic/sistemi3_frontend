if (process.env.NODE_ENV === 'production') {
    module.exports = {
        plugins: {
            'postcss-preset-env': {
                browsers: 'last 2 versions',
            },
            autoprefixer: {},
            cssnano: {},
            'rucksack-css': {},
        },
    };
} else {
    module.exports = {
        plugins: {
            'postcss-preset-env': {
                browsers: 'last 2 versions',
            },
            autoprefixer: {},
            'rucksack-css': {},
        },
    };
}
