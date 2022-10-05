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
    fs.writeFileSync(`${projectFolder}/src/index.js`, indexJs)

    // app directory and App.js file
    const appDirectory = srcDirectory+'/app'
    const appJs = require('../files/app').appSetup(projectName)
    const appCss = require('../files/css').cssSetup()
    fs.mkdirSync(appDirectory)
    fs.writeFileSync(`${projectFolder}/src/app/App.js`, appJs)
    fs.writeFileSync(`${projectFolder}/src/app/app.css`, appCss)

    // common directory inside src directory
    const componetsDir = srcDirectory
    fs.mkdirSync(componetsDir+'/common')
    // component and hooks directory inside common
    fs.mkdirSync(componetsDir+'/common/components')
    fs.mkdirSync(componetsDir+'/common/tests')

    //assets directory inside src directory
    fs.mkdirSync(componetsDir+'/assets')
    fs.mkdirSync(componetsDir+'/assets/img')
    fs.mkdirSync(componetsDir+'/assets/icon')
    fs.mkdirSync(componetsDir+'/assets/fonts')
    fs.mkdirSync(componetsDir+'/assets/svg')

    //lib directory inside src directory
    fs.mkdirSync(componetsDir+'/lib')

    //data directory inside src directory
    fs.mkdirSync(componetsDir+'/data')
    fs.mkdirSync(componetsDir+'/data/consts')
    
    //hooks directory inside src directory
    fs.mkdirSync(componetsDir+'/hooks')

    //utils directory inside src directory
    fs.mkdirSync(componetsDir+'/utils')

    //pages directory inside src directory
    fs.mkdirSync(componetsDir+'/pages')

    //store directory inside src directory
    fs.mkdirSync(componetsDir+'/store')
    fs.mkdirSync(componetsDir+'/store/reducer')
    fs.mkdirSync(componetsDir+'/store/action')
}

exports.srcSetup = srcSetup