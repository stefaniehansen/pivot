#!/usr/bin/env node
var exec = require('child_process').exec;
var fs = require('fs');
var fsProm = require('fs').promises;
var readdirp = require('readdirp');
var concatFiles = require('concat');

var argv = require('yargs')
    .alias('d', 'out-dir')
    .alias('i', 'input')
    .alias('hl', 'human-language')
    .alias('pl', 'programming-language')
    .describe('d', 'write output to directory')
    .nargs('out-dir', 1)
    .nargs('input', 1)
    .nargs('human-language', 1)
    .nargs('programming-language', 1)
    .help('h')
    .alias('h', 'help')
    .argv;

// Command line arguments provided by user
let {outDir, input, humanLanguage, programmingLanguage} = argv;

// If the user doesn't specify a target directory, use the current working directory
if (!outDir) {
    outDir = 'dist-pivot';
}

// Find the syntax rule file for the language mapping.
let syntaxRulesFile = `${__dirname}/rules/${programmingLanguage}-${humanLanguage}.js`;
// TODO: This should be dynamically constructed from the syntax rules.
let imports = `{para, funcion, mientras, retorna, variable}`;
let importStatement = `import ${imports} from '${syntaxRulesFile}'`;

function makeDirIfNotExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

function isJavascriptFile(fileName) {
    let fileNameArray = fileName.split('.');
    let ext = fileNameArray[fileNameArray.length - 1];
    return ext === 'js';
}

// Keep track of current target directory (mirrors current working directory)
function getTargetDir(path) {
    let basePath = path.fullPath.split(input)[0];
    let currentPosition = path.fullPath.split(input)[1];
    let targetPath = `${basePath}${outDir}${currentPosition}`;
    return targetPath;
}

function transpileFile(entry) {
    // Where are we writing the target files?
    let targetDir = getTargetDir(entry);
    let targetFilePath = `${targetDir}${entry.basename}`;
    makeDirIfNotExists(targetDir);
    // Write syntax rule imports into target dir files
    fsProm.writeFile(targetFilePath, importStatement, 'utf8')
    // Concatenate target dir files containing import statements with base file content
        .then(concatFiles([targetFilePath, entry.fullPath], targetFilePath))
        // Run the transpiler on each file and write over it in target directory.
        .then(exec(`npx sjs ${targetFilePath} --out-file ${targetFilePath}`, function (err, stdout, stderr) {
            if (err) throw err;
            else console.log(stdout);
        }))
        .catch(err => {
            console.log(err)
        })
}

// Get target Directory and create if not exists.
// Read one file.
// Strip off path from current working directory up until the input dir
// Add path from target working directory up until the output dir.
// Create dir if not exists.
// Copy current file to target dir.
// Read file from target dir and add write import at top.
// Run through npx.


// Recursive directory scan
async function read() {
    // Create initial output directory (using command line input)
    makeDirIfNotExists(outDir);
    // Read input directory recursively
    for await (const entry of readdirp(input)) {
        if (isJavascriptFile(entry.basename)) {
            transpileFile(entry)
        }
    }
}

read()
