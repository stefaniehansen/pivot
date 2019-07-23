var exec = require('child_process').exec;
var fs = require('fs');


// take command line arguments (PL/HL)
// find matching map
// add template imports to top of file via fs.writeFile
// create transpiled/dist folder for consumer
// then exec recursively on each file in directory provided after adding imports, output matching file in transpiled/dist directory


exec('npx sjs ./test/test-script.js', function(err, stdout, stderr) {
    // Add outFile flag to output file of the same name in dist folder
    if (err) throw err;
    else console.log(stdout);
});
