const setup = require('./middleware/jsonCreator');
const public = require('./middleware/htmlCreator');
const srcSetup = require('./middleware/srcCreator');
const colors = require('colors');
const fs = require('fs');

function structure() {
    const projectName = process.argv[2]
    if (projectName === undefined) {
        console.log('fstructur: ' + colors.red('ERR! ') + 'project name undefined. please set project name "fstructure your-project-name"');
        return 
    }
    // Setup directory and files
    const projectFolder = process.cwd()+'/'+projectName
    const assetFilePath = __dirname + '/assets/react'

    // if same directory there
    if (fs.existsSync(projectFolder)) {
        console.log('fstructur: ' + colors.red('ERR! ') + `${projectName} folder already exist`);
        return
    }
    // else init setup
    setup.initialSetup(projectName, projectFolder, assetFilePath)
    public.setupPublicDirectory(projectName, projectFolder, assetFilePath)
    srcSetup.srcSetup(projectName, projectFolder, assetFilePath)
    
    console.log(colors.cyan(`cd ${projectName}`));
    console.log(`Travel to project directory`);
    console.log();
    console.log(colors.cyan('npm install'));
    console.log("Install necessary package");
    console.log();
    console.log(colors.cyan(`start coding`));
}
// structure()
exports.structure = structure