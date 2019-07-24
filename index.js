var exec = require('child_process').exec;
var fsProm = require('fs').promises;
var readdirp = require('readdirp');
var concatFiles = require('concat');
var path = require('path');
var generateImports = require('./src/utils/generate-imports');
var fileUtils = require('./src/utils/file-utils');


// Get target Directory and create if not exists.
// Read files one by one.
// Construct target directory path using current directory.
// Create directories as we traverse if they don't exist.
// Copy current file to target directory.
// Add import at top.
// Run the target file through Sweet.js and produce transpiled files (overwrite intermediate file).

module.exports = function(outDir, input, humanLanguage, programmingLanguage) {
// If the user doesn't specify an output directory, use dist-pivot by default
    if (!outDir) {
        outDir = 'dist-pivot';
    }

    if (!programmingLanguage) {
        programmingLanguage = 'javascript';
    }

// Generate import statement for rules.
    let importStatement = generateImports(programmingLanguage, humanLanguage);

    function isJavascriptFile(fileName) {
        return path.extname(fileName) === '.js';
    }

// Keep track of current target directory (mirrors current working directory)
    function getTargetDir(currentPath) {
        let basePath = currentPath.fullPath.split(input)[0];
        let currentPosition = currentPath.fullPath.split(input)[1];
        let targetPath = path.join(basePath, outDir, currentPosition);
        return targetPath;
    }

    function transpileFile(entry) {
        let targetDir = getTargetDir(entry);
        let targetFilePath = `${targetDir}${entry.basename}`;
        fileUtils.makeDirIfNotExists(targetDir);
        // Write syntax rule imports into target dir files
        fsProm.writeFile(targetFilePath, importStatement, 'utf8')
        // Concatenate target dir files containing import statements with base file content
            .then(concatFiles([targetFilePath, entry.fullPath], targetFilePath))
            // Run the transpiler on each file and write over it in target directory.
            .then(exec(`npx sjs ${targetFilePath} --out-file ${targetFilePath}`, function (err, stdout, stderr) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(stdout);
                }
            }))
            .catch(err => {
                console.log(err);
            })
    }

// Recursive directory scan
    async function read() {
        // Create initial output directory (using command line input)
        fileUtils.makeDirIfNotExists(outDir);
        // Read input directory recursively
        for await (const entry of readdirp(input)) {
            if (isJavascriptFile(entry.basename)) {
                transpileFile(entry);
            }
        }
    }

    read();
}
