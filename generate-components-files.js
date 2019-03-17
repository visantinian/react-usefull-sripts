const fs = require('fs');
const mkdirp = require('mkdirp');

const folderNames = [
    'app',
    'header',
    'item-list',
    'person-details',
    'planet-details',
    'random-planet',
    'starship-details',
    'stupid-ass-long-kebab-test-class'
];
const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}
const removeKebab = (a) => {
    if (typeof a !== 'string') {
        return ''
    }
    const target = [];
    const splitString = a.split("-");
    const length = splitString.length;
    for (var j = 0; j <= length; j++) {
        target.push(capitalize(splitString[j]));
    }
    return target.join('');
}

folderNames.forEach(function (folderName) {
    mkdirp(`../src/components/${folderName}`, function (err) {
        if (err) console.error(err);
        else console.log(`${folderName} created wapeow!`)
    });

    fs.writeFile(
      `../src/components/${folderName}/${folderName}.js`,
      `import React from 'react';\n\nimport './${folderName}.css'
      \nconst ${removeKebab(folderName)} = () => {
          \nrender() {\n return (\n<div>\n</div>\n)\n}\n};
       \n export default ${removeKebab(folderName)};`,
      function(err) {
        if (err) console.error(err);
        console.log(`File ${folderName}.js is created successfully.`);
      }
    );

    fs.writeFile(`../src/components/${folderName}/${folderName}.css`, '', function (err) {
        if (err) console.error(err);
        console.log(`File ${folderName}.css is created successfully.`);
    });

    fs.writeFile(`../src/components/${folderName}/index.js`,
        `import ${removeKebab(folderName)} from './${folderName}';
        \nexport default ${removeKebab(folderName)};`, function (err) {
            if (err) console.error(err);
            console.log(`File index.js  in ${folderName}is created successfully.`);
        })
});
