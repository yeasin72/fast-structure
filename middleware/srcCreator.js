const fs = require('fs');

/**
 * Setup project folder.
 * 
 * Creating project directory and generate package JSON file for npm setup.
 * @param {string} projectName - project name used for creating project directory and package JSON file project name.
 * @param {string} projectFolder - To get user current directory
 * @param {string} assetsPath - To get asset file path.
 * @returns {void} 
 */
function srcSetup(projectName, projectFolder, assetsPath) {
    const srcDirectory = projectFolder+'/src'
    const indexJs = require('../files/init').generateIndexJS()

    // src directory and index.js file
    fs.mkdirSync(srcDirectory)
    fs.writeFileSync(`${process.cwd()}/${projectName}/src/index.js`, indexJs)

    // app directory and App.js file
    const appDirectory = srcDirectory+'/app'
    const appJs = require('../files/app').appSetup(projectName)
    fs.mkdirSync(appDirectory)
    fs.writeFileSync(`${process.cwd()}/${projectName}/src/app/App.js`, appJs)

    // Components directory inside src directory
    const componetsDir = srcDirectory+'/Components'
    fs.mkdirSync(componetsDir)
}

exports.srcSetup = srcSetup