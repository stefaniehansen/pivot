var path = require('path');
var fs = require('fs');
var jsonFile = require('jsonfile');

function makeDirIfNotExists(dir) {
    if (!fs.existsSync(dir)) {
        try {
            fs.mkdirSync(dir, { recursive: true });
        } catch (error) {
            console.log(error)
        }
    }
}

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

function getMapFiles(mapsDir)
{
    return getFiles(mapsDir);
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
    getMapFiles,
    getTemplateName,
    getTemplateFiles,
    getMapDictionary,
    makeDirIfNotExists
}
