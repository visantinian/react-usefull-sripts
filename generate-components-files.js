

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
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

folderNames.forEach(function(folderName) {
    mkdirp(`./src/components/${folderName}`, function (err){
        if (err) console.error(err);
        else console.log(`${folderName} created wapeow!`)
    });

    fs.writeFile(`./src/components/${folderName}/${folderName}.js`,
      `import React from 'react';\n\nimport './${folderName}.css'
      \nconst ${capitalize(folderName)} = () => {\n}`; ', function (err) {
        if (err) throw err();
        console.log(`File ${folderName}.js is created successfully.`);
    });

    fs.writeFile(`./src/components/${folderName}/${folderName}.css`, '', function(err) {
        if (err) throw err();
        console.log(`File ${folderName}.css is created successfully.`);
    });

    fs.writeFile(`./src/components/${folderName}/index.js`,
       `import ${capitalize(folderName)} from './${folderName}';
        \nexport default ${capitalize(folderName);}  `, function(err) {
        if (err) throw err();
        console.log(`File index.js  in ${folderName}is created successfully.`);
    })
});
