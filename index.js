require('ignore-styles')
require("regenerator-runtime/runtime");

require('@babel/register')({
    ignore: [/(node_module)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./app')