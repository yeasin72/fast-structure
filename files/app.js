/**
 * App.Js file.
 * 
 * Generate App.js file inside app directoruy 
 * @param {string} projecName - To show app name inside heading 2
 * @returns {string} appCode 
 */
function appSetup(projecName) {
// Implementation
// import './App.css';
    const app = `import React from "react"

function App() {
  return (
    <div className="App">
      <h2>${projecName} Application</h2>
    </div>
  );
}

export default App;
    `
    return app
}
exports.appSetup = appSetup