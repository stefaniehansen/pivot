var path = require('path');
var fs = require('fs');
var jsonFile = require('jsonfile');

var mapsDir = path.join(__dirname, '/../language-maps');
var templatesDir = path.join(__dirname, '/../src/templates');
var rulesDir = path.join(__dirname, '/../rules');

module.exports = function main(programmingLanguage, humanLanguage) {
    console.log("Using maps dir: " + mapsDir);

    var mapFile = getMapFile(programmingLanguage, humanLanguage);
    var templateFiles = getTemplateFiles(templatesDir);

    if (!fs.existsSync(rulesDir)) {
        fs.mkdirSync(rulesDir);
    }

    var outputFile = path.join(rulesDir, getFileName(mapFile) + ".sjs");
    var outputContent = "";

    // Import required functions from sweet-js and signal that it is a sweet.js file to sjs.
    outputContent += `'lang sweet.js';\nimport { fromKeyword, unwrap, isKeyword, fromIdentifier } 
    from '@sweet-js/helpers' for syntax\n`

    var templateNames = [];
    var mapDictionary = getMapDictionary(path.join(mapsDir, mapFile));

    templateFiles.forEach(templateFile => {
        var templateName = getTemplateName(templateFile);
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
        templateNames.push(mapDictionary[templateName]);
    });

    fs.writeFileSync(outputFile, outputContent, 'utf8');

    return `import {${templateNames.join(', ')}} from '${outputFile}';\n`;
}

function getMapDictionary(mapFileName) {
    var mapDictionary = jsonFile.readFileSync(mapFileName);
    return mapDictionary;
}

function getFiles(directoryPath) {
    var files = fs.readdirSync(directoryPath);
    return files
}

function getTemplateFiles(templatesDir) {
    return getFiles(templatesDir);
}

function getMapFile(programmingLanguage, humanLanguage) {
    return `${programmingLanguage}-${humanLanguage}.json`;
}

function getFileName(filePath) {
    return path.parse(filePath).base;
}

function getTemplateName(templateFile) {
    var fileName = getFileName(templateFile);
    var templateName = fileName.replace(".pivot", "");
    return templateName;
}
