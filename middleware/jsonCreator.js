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
function initialSetup(projectName, projectFolder, assetsPath, makeable) {
    const jsonFile = require('../files/json').generateJSON(projectName)
    if (makeable) {
        fs.mkdirSync(projectFolder)
    }
    fs.writeFileSync(`${projectFolder}/package.json`, jsonFile)
    
    // Gitignore file
    const gitSrc = require('../files/git').gitSetup()
    fs.writeFileSync(`${projectFolder}/.gitignore`, gitSrc)
}

exports.initialSetup = initialSetup