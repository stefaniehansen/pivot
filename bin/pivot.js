#!/usr/bin/env node
var argv = require('yargs')
    .alias('o', 'out-dir')
    .alias('i', 'input')
    .alias('hl', 'human-language')
    .alias('pl', 'programming-language')
    .describe('o', '(optional) output directory')
    .describe('i', 'input directory (root) to be transpiled')
    .describe('hl', 'human language source code is written in')
    .describe('pl', '(optional) programming language to output')
    .nargs('out-dir', 1)
    .nargs('input', 1)
    .nargs('human-language', 1)
    .nargs('programming-language', 1)
    .help('h')
    .alias('h', 'help')
    .argv;

// Command line arguments provided by user
let {outDir, input, humanLanguage, programmingLanguage} = argv;

require('../index')(outDir, input, humanLanguage, programmingLanguage);
