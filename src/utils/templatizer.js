var path = require('path');
var fs = require('fs');

var mapsDir = path.join(__dirname, '/../../language-maps');
var templatesDir = path.join(__dirname, '/../templates');
var rulesDir = path.join(__dirname, '/../../rules');
var fileUtils = require('./file-utils')

main();

function getImportStatement() {
    return `'lang sweet.js';\nimport { fromKeyword, unwrap, isKeyword, fromIdentifier } from '@sweet-js/helpers' for syntax\n`;
}

function main() {
    console.log("Using maps dir: " + mapsDir);

    var mapFiles = fileUtils.getMapFiles(mapsDir);
    var templateFiles = fileUtils.getTemplateFiles(templatesDir);
    fileUtils.makeDirIfNotExists(rulesDir);

    mapFiles.forEach(mapFile => {
        var outputFile = path.join(rulesDir, fileUtils.getFileName(mapFile) + ".sjs");
        var mapDictionary = fileUtils.getMapDictionary(path.join(mapsDir, mapFile));
        var outputContent = "";

        // Import required functions from sweet-js and signal that it is a sweet.js file to sjs.
        outputContent += getImportStatement();

        templateFiles.forEach(templateFile => {
            var templateContent = fs.readFileSync(path.join(templatesDir, templateFile), 'utf8');
            console.log('Template content:\n' + templateContent);
            var resolvedContent = templateContent;
            keys = Object.keys(mapDictionary);

            for (var keyIndex in keys) {
                var key = keys[keyIndex];
                value = mapDictionary[key];
                console.log('Replacing ' + key + ' -> ' + value);
                var replaceKey = '##' + key + '##';
                resolvedContent = resolvedContent.replace(new RegExp(replaceKey, 'g'), value);
            }

            console.log('Resolved content:\n' + resolvedContent);

            outputContent += resolvedContent + '\n';
        });


        fs.writeFileSync(outputFile, outputContent, 'utf8');
    })
}
