

const fs = require('fs');
const mkdirp = require('mkdirp');

const folderNames = [
    'app',
    'header',
    'item-list',
    'person-details',
    'planet-details',
    'random-planet',
    'starship-details'
];
folderNames.forEach(function(folderName) {
    mkdirp(`./src/components/${folderName}`, function (err){
        if (err) console.error(err);
        else console.log(`${folderName} created wapeow!`)
    });

    fs.writeFile(`./src/components/${folderName}/${folderName}.js`, 'js file', function (err) {
        if (err) throw err();
        console.log(`File ${folderName}.js is created successfully.`);
    });

    fs.writeFile(`./src/components/${folderName}/${folderName}.css`, `css file`, function(err) {
        if (err) throw err();
        console.log(`File ${folderName}.css is created successfully.`);
    });

    fs.writeFile(`./src/components/${folderName}/index.js`, `index.js`, function(err) {
        if (err) throw err();
        console.log(`File index.js  in ${folderName}is created successfully.`);
    })
});
