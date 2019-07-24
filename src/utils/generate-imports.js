var path = require('path');
var mapsDir = path.join(__dirname, '/../../language-maps');
var rulesDir = path.join(__dirname, '/../../rules');
var templatesDir = path.join(__dirname, '/../templates');
var fileUtils = require('./file-utils');


module.exports = function(programmingLanguage, humanLanguage, forward) {
    console.log(`Using maps dir: ${mapsDir} for ${programmingLanguage} and ${humanLanguage} map`);

    var mapFile = fileUtils.getMapFile(programmingLanguage, humanLanguage);
    var templateFiles = fileUtils.getTemplateFiles(templatesDir);
    var importedNames = [];
    var mapDictionary = fileUtils.getMapDictionary(path.join(mapsDir, mapFile));

    templateFiles.forEach(templateFile => {
        var templateName = fileUtils.getTemplateName(templateFile);

        if (forward) {
            importedNames.push(mapDictionary[templateName]);
        }
        else {
            importedNames.push(templateName);
        }
    })

    var outputFile = path.join(rulesDir, fileUtils.getFileName(mapFile) + ".sjs").replace(/\\/g, "/");
    return `import {${importedNames.join(', ')}} from '${outputFile}';\n`;
}
