var path = require('path');
var fs = require('fs');
var jsonFile = require('jsonfile');

var mapsDir = path.join(__dirname, '/../language-maps');
var templatesDir = path.join(__dirname, '/../src/templates');
var rulesDir = path.join(__dirname, '/../rules')
var mapFile = path.join(mapsDir, '/javascript-spanish.json');

main();

function main()
{
    console.log("Using maps dir: " + mapsDir);

    var mapFiles = getMapFiles(mapsDir);
    var templateFiles = getTemplateFiles(templatesDir);

    if (!fs.existsSync(rulesDir)){
        fs.mkdirSync(rulesDir);
    }

    mapFiles.forEach(mapFile => {
        outputFile = path.join(rulesDir, getFileName(mapFile) + ".sjs");
        outputContent = "";
        templateNames = [];
        mapDictionary = getMapDictionary(path.join(mapsDir, mapFile));

        templateFiles.forEach(templateFile => {
            templateName = getTemplateName(templateFile);
            templateContent = fs.readFileSync(path.join(templatesDir, templateFile), 'utf8');
            console.log('Template content:\n' + templateContent);
            resolvedContent = templateContent;
            keys = Object.keys(mapDictionary);

            for (var keyIndex in keys)
            {
                key = keys[keyIndex];
                value = mapDictionary[key];
                console.log('Replacing ' + key + ' -> ' + value);
                replaceKey = '##' + key + '##';
                resolvedContent = resolvedContent.replace(new RegExp(replaceKey, 'g'), value);
            }

            console.log('Resolved content:\n' + resolvedContent);

            outputContent += resolvedContent + '\n';
            templateNames.push(mapDictionary[templateName]);
        });

        outputContent += '\n#import {' + templateNames.join(',') + '} from ' + outputFile;

        fs.writeFileSync(outputFile, outputContent, 'utf8');
    });
}

function getMapDictionary(mapFileName)
{
    var mapDictionary = jsonFile.readFileSync(mapFileName);
    return mapDictionary;
}

function getKeys(mapDictionary)
{
    keys = Object.keys(mapDictionary);
    for(var i in keys){
      console.log(keys[i] + " : " + mapDictionary[keys[i]]);
    }

    return keys;
}

function getFiles(directoryPath)
{
    files = fs.readdirSync(directoryPath);
    return files;
}

function getTemplateFiles(templatesDir)
{
    return getFiles(templatesDir);
}

function getMapFiles(mapsDir)
{
    return getFiles(mapsDir);
}

function getFileName(filePath)
{
    return path.parse(filePath).base;
}

function getTemplateName(templateFile)
{
    fileName = getFileName(templateFile);
    templateName = fileName.replace(".pivot", "");
    return templateName;
}