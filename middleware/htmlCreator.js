const fs = require('fs');

/**
 * Setup public folder.
 * 
 * Creating project public directory and generate index.html file.
 * @param {string} projectName - project name used for html page title.
 * @param {string} projectFolder - To get user current directory.
 * @param {string} assetsPath - To get asset file path.
 * @returns {void} 
 */

function setupPublicDirectory(projectName, projectFolder, assetsPath) {
    const publicFolder = projectFolder+'/public'
    const html = require('../files/html').generateHTML(projectName)
    const manifest = require('../files/manifest').generateManifest(projectName);

    // Public directory
    fs.mkdirSync(publicFolder)
    // Index.html file
    fs.writeFileSync(`${process.cwd()}/${projectName}/public/index.html`, html)
    // Manifest file
    fs.writeFileSync(`${process.cwd()}/${projectName}/public/manifest.json`, manifest)

    // 192 size logo file
    const smallLogoSrc = assetsPath + '/logo/logo192.png'
    const smallLogoDest = `${process.cwd()}/${projectName}/public/logo192.png`
    fs.copyFileSync(smallLogoSrc, smallLogoDest)
    // 512 size logo file
    const bigLogoSrc = assetsPath + '/logo/logo512.png'
    const bigLogoDest = `${process.cwd()}/${projectName}/public/logo512.png`
    fs.copyFileSync(bigLogoSrc, bigLogoDest)
    // Favicon file
    const faviconSrc = assetsPath + '/icon/favicon.ico'
    const faviconDest = `${process.cwd()}/${projectName}/public/favicon.ico`
    fs.copyFileSync(faviconSrc, faviconDest)
}

exports.setupPublicDirectory = setupPublicDirectory