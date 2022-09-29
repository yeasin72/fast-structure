const setup = require('./middleware/jsonCreator');
const public = require('./middleware/htmlCreator');
const srcSetup = require('./middleware/srcCreator');
const colors = require('colors');
const fs = require('fs');
const { setupOption } = require('./utils/utils');

function structure() {
    const projectName = process.argv[2]
    const option = process.argv[3]
    if (projectName === undefined) {
        console.log('fstructur: ' + colors.red('ERR! ') + 'project name undefined. please set project name "fstructure your-project-name"');
        return 
    }
    if (projectName === "--help") {
        return
    }
    if (projectName.indexOf('-') === 0) {
        console.log('fstructure: '+ colors.red("ERR! ") + `"${projectName}" not a valid project name. for any help run "fstructure --help"`);
        return
    }
    if (option === setupOption?.next) {
        console.log(colors.red('Sorry'));
        console.log("This option isn't available");
        return
    }
    if (option === setupOption?.react || option === undefined) {
        
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
        return
    }else{
        console.log('fstructure: '+ colors.red("ERR! ") + `your option "${option}" not valid. for any help run "fstructure --help"`);
    }
}
// structure()
exports.structure = structure