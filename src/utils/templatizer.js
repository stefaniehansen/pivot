var path = require('path');
var fs = require('fs');

var mapsDir = path.join(__dirname, '/../../language-maps');
var templatesDir = path.join(__dirname, '/../templates');
var rulesDir = path.join(__dirname, '/../../rules');
var fileUtils = require('./file-utils')
var argv = require('yargs')
    .alias('f', 'forward')
    .nargs('forward', 1)
    .argv;

let forward = true;
if (argv.forward) {
 forward = (argv.forward).toLowerCase() === 'true';
}

main(forward);

function getImportStatement() {
    return `'lang sweet.js';\nimport { fromKeyword, unwrap, isKeyword, fromIdentifier } from '@sweet-js/helpers' for syntax\n`;
}

function main(forward) {
    console.log("Using maps dir: " + mapsDir);

    var mapFiles = fileUtils.getMapFiles(mapsDir);
    var templateFiles = fileUtils.getTemplateFiles(templatesDir);
    fileUtils.makeDirIfNotExists(rulesDir);

    mapFiles.forEach(mapFile => {
        var mapLangs = getToAndFromLangs(mapFile);

        var outputFileName = "";
        if (forward) {
            outputFileName = `${mapLangs.FromLang}-${mapLangs.ToLang}.json.sjs`
        }
        else {
            outputFileName = `${mapLangs.ToLang}-${mapLangs.FromLang}.json.sjs`
        }

        var outputFile = path.join(rulesDir, outputFileName);
        var mapDictionary = fileUtils.getMapDictionary(path.join(mapsDir, mapFile));
        var outputContent = "";

        // Import required functions from sweet-js and signal that it is a sweet.js file to sjs.
        outputContent += getImportStatement();

        templateFiles.forEach(templateFile => {
            var templateContent = fs.readFileSync(path.join(templatesDir, templateFile), 'utf8');
            console.log('Template content:\n' + templateContent);
            var resolvedContent = templateContent;

            resolvedContent = applyMap(mapDictionary, templateContent, forward);

            console.log('Resolved content:\n' + resolvedContent);

            outputContent += resolvedContent + '\n';
        });


        fs.writeFileSync(outputFile, outputContent, 'utf8');
    })
}

function getToAndFromLangs(mapFileName) {
    var mapFileName = fileUtils.getFileName(mapFileName);
    var dashIndex = mapFileName.indexOf('-');
    if (dashIndex === -1) {
        console.log("Incorrect map name format: " + mapFileName);
    }

    var dotIndex = mapFileName.lastIndexOf('.');
    if (dotIndex === -1 || dotIndex <= dashIndex) {
        console.log("Incorrect map name format: " + mapFileName);
    }

    var fromLang = mapFileName.substr(0, dashIndex);
    var toLang = mapFileName.substr(dashIndex + 1, dotIndex - dashIndex - 1);
    return {
        "FromLang" : fromLang,
        "ToLang" : toLang
    };
}

function applyMap(mapDictionary, templateContent, forward) {
    var resolvedContent = templateContent;
    keys = Object.keys(mapDictionary);

    for (var keyIndex in keys) {
        var key = keys[keyIndex];
        value = mapDictionary[key];
        console.log('Replacing ' + key + ' -> ' + value);
        var fromKey = '##FROM_' + key + '##';
        var toKey = '##TO_' + key + '##';
        var fromValue = '';
        var toValue = '';

        if (forward) {
            fromValue = value;
            toValue = key;
        }
        else {
            fromValue = key;
            toValue = value;
        }

        resolvedContent = resolvedContent.replace(new RegExp(fromKey, 'g'), fromValue);
        resolvedContent = resolvedContent.replace(new RegExp(toKey, 'g'), toValue);
    }
    
    return resolvedContent;
}

