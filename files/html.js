/**
 * Generate Html file.
 * 
 * Generate react html file.
 * @param {*} projectName 
 * @returns 
 */
function generateHTML(projectName) {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <!-- gooogle search console meta tag -->
            <!-- <meta name="google-site-verification" content="Vf13TwnU09wnw59oPqlX_EtfKehkst6E9xfpn6frVdE" /> -->
            <meta name="google-site-verification" content="iFLjHntxKr8kYgrQh1_i8nOFrmnZV5EOeMozoHIqblQ" />
            <!-- meta tag end. replace with upside meta tag -->
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <title>${projectName} Application</title>
        </head>
        <body>
            <div id="root"></div>
        </body>
        </html>
    `
    return html
}

exports.generateHTML = generateHTML