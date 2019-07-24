var path = require('path');
var fs = require('fs');
var jsonFile = require('jsonfile');

function getMapFile(programmingLanguage, humanLanguage) {
    return `${programmingLanguage}-${humanLanguage}.json`;
}

function getTemplateName(templateFile) {
    var fileName = getFileName(templateFile);
    var templateName = fileName.replace(".pivot", "");
    return templateName;
}

function getFileName(filePath) {
    return path.parse(filePath).base;
}

function getTemplateFiles(templatesDir) {
    return getFiles(templatesDir);
}

function getMapDictionary(mapFileName) {
    var mapDictionary = jsonFile.readFileSync(mapFileName);
    return mapDictionary;
}

function getFiles(directoryPath) {
    var files = fs.readdirSync(directoryPath);
    return files
}

module.exports = exports = {
    getFileName,
    getMapFile,
    getTemplateName,
    getTemplateFiles,
    getMapDictionary
}
