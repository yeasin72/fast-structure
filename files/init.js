/**
 * Generate index.js.
 * 
 * Generate index.js initial code.
 * @returns {string} indexJs - initial code of index.js
 */
function generateIndexJS() {
    const index = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);`
return index
}

exports.generateIndexJS = generateIndexJS